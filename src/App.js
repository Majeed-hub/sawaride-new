import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FAQ from "./pages/FAQ";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
