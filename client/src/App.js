import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import Destination from "./Components/Destination/Destination";
import Hotel from "./Components/hotels/Hotel";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Tour from "./Components/TourLists/Tour";
import Blogs from "./Page/Blogs";
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
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="tours" element={<Tours />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="blogs" element={<Blogs />} />

        {/* Privet Page */}
        <Route path="destinations/:destinationId" element={<Destination />} />
        <Route path="tours/:tourId" element={<Tour />} />
        <Route path="hotels/:hotelId" element={<Hotel />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
