import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import JoinUs from './pages/JoinUs';
import Web from "./pages/SubServices/Web";
import Maketing from "./pages/SubServices/Maketing";
import Seo from "./pages/SubServices/Seo";
import Gst from "./pages/SubServices/Gst";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/web" element={<Web />} />
          <Route path="/marketing" element={<Maketing />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/gst" element={<Gst />} />
        </Routes>
        <Footer />
      </Router>

      
    </div>
  );
}

export default App;
