import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
