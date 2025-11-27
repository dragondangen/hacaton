import os
import logging
import aiohttp
from aiogram import Bot, Dispatcher, Router, F
from aiogram.filters import Command
from aiogram.types import Message
from aiogram.fsm.storage.memory import MemoryStorage
from dotenv import load_dotenv

# Загружаем переменные окружения
load_dotenv()

# Настройка логирования
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Конфигурация
BOT_TOKEN = "8316142366:AAFadeyJJz39wZ8rbwI7o4TwYLYvdDxWQ7c"
API_URL = os.getenv('API_URL', 'http://localhost:3004/chat')

if not BOT_TOKEN:
    raise ValueError("Не найден BOT_TOKEN в .env файле")

# Инициализация бота и диспетчера
bot = Bot(token=BOT_TOKEN)
storage = MemoryStorage()
dp = Dispatcher(storage=storage)

# Создаём роутер
router = Router()


@router.message(Command("start"))
async def cmd_start(message: Message):
    """Обработчик команды /start"""
    welcome_text = (
        "🏠 Добро пожаловать в бот <b>ПерепланировкаПросто!</b>\n\n"
        "Задайте любой вопрос нашему боту, связанный с перепланировкой, "
        "и мы на него ответим.\n\n"
        "Я помогу вам разобраться с:\n"
        "• Законодательством по перепланировке квартир\n"
        "• Процедурой согласования\n"
        "• Необходимыми документами\n"
        "• Тем, что можно и нельзя делать\n\n"
        "Просто напишите свой вопрос! 💬"
    )
    await message.answer(welcome_text, parse_mode="HTML")


@router.message(F.text)
async def handle_message(message: Message):
    """Обработчик текстовых сообщений"""
    user_id = message.from_user.id
    user_message = message.text
    
    # Отправляем "печатает..."
    await bot.send_chat_action(chat_id=message.chat.id, action="typing")
    
    try:
        # Формируем запрос к микросервису
        payload = {
            "session_id": str(user_id),
            "message": user_message
        }
        
        # Отправляем запрос к API
        async with aiohttp.ClientSession() as session:
            async with session.post(API_URL, json=payload, timeout=60) as response:
                if response.status == 200:
                    data = await response.json()
                    bot_response = data.get('response', 'Извините, не удалось получить ответ.')
                    await message.answer(bot_response)
                else:
                    error_text = await response.text()
                    logger.error(f"API вернул ошибку {response.status}: {error_text}")
                    await message.answer(
                        "❌ Извините, произошла ошибка при обработке вашего запроса. "
                        "Попробуйте еще раз."
                    )
    
    except aiohttp.ClientError as e:
        logger.error(f"Ошибка соединения с API: {e}")
        await message.answer(
            "❌ Не удалось связаться с сервером. Проверьте, что микросервис запущен."
        )
    
    except Exception as e:
        logger.error(f"Неожиданная ошибка: {e}")
        await message.answer(
            "❌ Произошла непредвиденная ошибка. Попробуйте позже."
        )


async def main():
    """Главная функция запуска бота"""
    # Регистрируем роутер
    dp.include_router(router)
    
    # Удаляем вебхуки и запускаем polling
    await bot.delete_webhook(drop_pending_updates=True)
    logger.info("Бот запущен!")
    await dp.start_polling(bot)


if __name__ == '__main__':
    import asyncio
    asyncio.run(main())