// import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Redirect from "./components/Redirect";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth" element={<Redirect />} />
      </Routes>
    </>
  );
}

export default App;
