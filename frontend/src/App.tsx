import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Planner from "./containers/Home/Planner";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<Planner />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
