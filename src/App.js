import { Route, Routes } from "react-router-dom";
import "./App.css";
import Destination from "./Components/Destination/Destination";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Page/Home.js";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
