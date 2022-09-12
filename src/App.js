import { Route, Routes } from "react-router-dom";
import "./App.css";
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
        <Route path="/" element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:destinationId" element={<Destination />} />
        <Route path="tours" element={<TourLists />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
