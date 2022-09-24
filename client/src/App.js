import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blogs/Blog";
import Destination from "./Components/Destination/Destination";
import Hotel from "./Components/hotels/Hotel";
import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Tour from "./Components/TourLists/Tour";
import useAuthCheck from "./hooks/useAuthCheck";
import Login from "./Page/auth/Login";
import Register from "./Page/auth/Register";
import Blogs from "./Page/Blogs";
import Destinations from "./Page/Destinations";
import Home from "./Page/Home.js";
import Hotels from "./Page/Hotels";
import Tours from "./Page/Tours";

const App = () => {
  const authLoading = useAuthCheck();

  return authLoading ? (
    <div>Checking Authentication ...</div>
  ) : (
    <main>
      <Navbar />
      <Routes>
        {/* auth page */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* Public Page */}
        <Route path="/" element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="tours" element={<Tours />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:blogsId" element={<Blog />} />

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
