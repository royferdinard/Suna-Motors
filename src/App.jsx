import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import Home from "./Pages/Web-Pages/home";
import Contact from "./Pages/Web-Pages/contact";
import Help from "./Pages/Web-Pages/help";

import About from "./Pages/Web-Pages/About";
import Testimonials from "./Componets/Testimonials/testimonials";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
