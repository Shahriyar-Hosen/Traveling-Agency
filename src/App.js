import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Destination from "./Components/Destination/Destination";
import Destinations from "./Components/Destination/Destinations";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import TourLists from "./Components/TourLists/TourLists";
import Home from "./Page/Home.js";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        {/* Public Page */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Privet Page */}
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:destinationId" element={<Destination />} />
        <Route path="tours" element={<TourLists />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
