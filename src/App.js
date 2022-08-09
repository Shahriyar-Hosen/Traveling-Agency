import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Page/Home";

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
      <button class="btn btn-primary">Button</button>
    </section>
  );
}

export default App;
