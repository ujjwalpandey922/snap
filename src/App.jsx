import "./App.css";
import Home from "./Pages/Home";
import Babylon from "./Pages/babylon";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Side from "./Component/Side";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-map">
          <Side />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/babylon" element={<Babylon />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
