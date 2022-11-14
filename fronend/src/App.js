import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceForm from "./components/ServiceForm";
import ServiceEdit from "./components/ServiceEdit";
import ContactUs from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
function App() {
  return (
    <>
      <Router>
        <div className="containerhome">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/add" element={<ServiceForm />} />
            <Route path="/edit/:id" element={<ServiceEdit />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
