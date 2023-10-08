import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login"
import Main from "./pages/Main"
import Credit from "./pages/Credit"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
    </Router>
  );
}

export default App;
