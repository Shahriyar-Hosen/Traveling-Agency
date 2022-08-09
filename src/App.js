import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={""} />
      </Routes>
      <h1 className="text-7xl bg-violet-700 text-white p-10">
        Traveling Agency App
      </h1>
      <button class="btn btn-primary">Button</button>
    </section>
  );
}

export default App;
