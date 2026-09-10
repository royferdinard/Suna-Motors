
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Web-Pages/home";
import Contact from "./Pages/Web-Pages/contact";
import Help from "./Pages/Web-Pages/help";


function App() {
  return (
    <BrowserRouter>

      {/* Website Pages */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

