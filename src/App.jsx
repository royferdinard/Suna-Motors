import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import Home from "./Pages/Web-Pages/home";
import About from "./Pages/Web-Pages/About";
import Testimonials from "./Componets/Testimonials/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
