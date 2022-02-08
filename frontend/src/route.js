import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/login";

function RouteFile() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default RouteFile;
