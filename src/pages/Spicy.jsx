import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Spicy from "./components/Spicy";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spicy" element={<Spicy />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
