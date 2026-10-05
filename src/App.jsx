import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import Home from "./Pages/Web-Pages/home";
import Contact from "./Pages/Web-Pages/contact";
import Help from "./Pages/Web-Pages/help";
import About from "./Pages/Web-Pages/About";
import Testimonials from "./Componets/Testimonials/Testimonials";

// Models
import Models from "./Pages/Web-Pages/Models";
import ModelDetails from "./Pages/Web-Pages/ModelDetails";
import CompareModels from "./Pages/Web-Pages/CompareModels";

// Main pages
import Makes from "./Pages/Web-Pages/makes";
import Categories from "./Pages/Web-Pages/categories";

// Admin
import Dashboard from "./Pages/Admin/Dashboard";
import Vehicles from "./Pages/Admin/Vehicles";
import AdminLayout from "./Componets/Admin/AdminLayout/AdminLayout";
import AddVehicle from "./Pages/Admin/AddVehicle";
import EditVehicle from "./Pages/Admin/EditVehicle";
import ViewVehicle from "./Pages/Admin/ViewVehicle";
import Appointments from "./Pages/Admin/Appointments";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        {/* Website Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/Testimonials" element={<Testimonials />} />

        {/* Models */}
        <Route path="/models" element={<Models />} />
        <Route path="/models/:id" element={<ModelDetails />} />
        <Route path="/compare" element={<CompareModels />} />

        {/* Main Pages */}
        <Route path="/makes" element={<Makes />} />
        <Route path="/categories" element={<Categories />} />

        {/* Admin */}
        <Route
          path="/admin"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/vehicles"
          element={
            <AdminLayout>
              <Vehicles />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/vehicles/add"
          element={
            <AdminLayout>
              <AddVehicle />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/vehicles/:id"
          element={
            <AdminLayout>
              <ViewVehicle />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/vehicles/:id/edit"
          element={
            <AdminLayout>
              <EditVehicle />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/appointments"
          element={
            <AdminLayout>
              <Appointments />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
