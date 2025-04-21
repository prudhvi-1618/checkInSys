import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import GatePassCard from './pages/GatePassCard';
// import {Router, Routes, Route } from "react-router-dom";
import GatePassList from "./pages/GatePassList.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/gatepass" element={<GatePassCard />} />
        <Route path="/" element={<GatePassList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;