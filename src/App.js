import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Destination from "./Components/Destination/Destination";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Tour from "./Components/TourLists/Tour";
import Destinations from "./Page/Destinations";
import Home from "./Page/Home.js";
import Hotels from "./Page/Hotels";
import Tours from "./Page/Tours";

const App = () => {
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
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:tourId" element={<Tour />} />
        <Route path="hotels" element={<Hotels />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
