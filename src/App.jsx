import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Web-Pages/home";
import Contact from "./Pages/Web-Pages/contact";
import Help from "./Pages/Web-Pages/help";
import About from "./Pages/Web-Pages/About";
import Testimonials from "./Componets/Testimonials/Testimonials";
import Makes from "./Pages/Web-Pages/makes";
import Categories from "./Pages/Web-Pages/categories";

function App() {
  return (
    <BrowserRouter>
      {/* Website Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/makes" element={<Makes />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;