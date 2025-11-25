import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-white shadow">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">ControlBiznes</div>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="hover:text-blue-600">
                  Решения
                </a>
              </li>
              <li>
                <a href="/technologies" className="hover:text-blue-600">
                  Технологии
                </a>
              </li>
              <li>
                <a href="/demo" className="hover:text-blue-600">
                  Демоверсия
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-blue-600">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-600">
                  Контакты
                </a>
              </li>
            </ul>
            <div className="space-x-4">
              <a href="/login" className="px-4 py-2 border rounded">
                Войти
              </a>
              <a href="/register" className="px-4 py-2 bg-blue-600 text-white rounded">
                Регистрация
              </a>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer className="bg-gray-100 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600">
            © 2025 ControlBiznes. Все права защищены.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
