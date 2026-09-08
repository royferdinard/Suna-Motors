
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Web-Pages/home";


function App() {
  return (
    <BrowserRouter>

      {/* Website Pages */}
      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

