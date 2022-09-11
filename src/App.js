import { Route, Routes } from "react-router-dom";
import "./App.css";
import Destination from "./Components/Destination/Destination";
import Destinations from "./Components/Destination/Destinations";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Page/Home.js";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="destinations/:destinationId" element={<Destination />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
