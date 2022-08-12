import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./Components/Shared/Footer";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Page/Home.jsx";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <h1 className="text-7xl bg-violet-700 text-white p-10">
        Traveling Agency App
      </h1>
      {/* <Footer /> */}
    </section>
  );
}

export default App;
