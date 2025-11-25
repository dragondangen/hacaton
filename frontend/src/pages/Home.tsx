// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">IT оптимизация с внедрением ИИ</h1>
        <p className="text-lg mb-8">
          Комплексные решения для среднего и крупного бизнеса: автоматизация процессов, интеграция систем, аналитика.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Начать бесплатно</button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg">Демоверсия</button>
          <button className="px-6 py-3 text-blue-600 underline">Войти в систему</button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Наши решения</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Внедрение ИИ</h3>
            <p>Прогнозирование, анализ данных и автоматизация принятия решений.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Автоматизация процессов</h3>
            <p>Оптимизация рутинных операций и повышение эффективности.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Интеграция систем</h3>
            <p>Синхронизация 1С, CRM, СБИС и других систем.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Разработка ПО</h3>
            <p>Индивидуальные решения под ваши задачи.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Технологии</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="text-center">1С:Предприятие</div>
          <div className="text-center">СБИС</div>
          <div className="text-center">CRM</div>
          <div className="text-center">Нейросети</div>
          <div className="text-center">Big Data</div>
          <div className="text-center">Cloud Solutions</div>
        </div>
      </section>
    </div>
  );
}
