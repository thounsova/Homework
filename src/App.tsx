import "./App.css";
import { ThemeProvider } from "./App/Ui/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./App/Pages/Home/Home";
import About from "./App/Pages/Abouts/About";
import { Routes, Route } from "react-router-dom";

import Story from "./App/Pages/product/product";

function App() {
  return (
    <ThemeProvider>
      <Navbar />

      {/* Main content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Story />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
