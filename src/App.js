import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import {Home} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
