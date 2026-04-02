import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AnisaDwiAriyanti from "./pages/AnisaDwiAriyanti";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/anisa-dwi-ariyanti" replace />} />
        {/* Route utama */}
        <Route path="/anisa-dwi-ariyanti" element={<AnisaDwiAriyanti />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;