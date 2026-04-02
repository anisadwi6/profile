import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Nasywa from "./pages/Nasywa";
import LatishaSyifaPratiwi from "./pages/LatishaSyifaPratiwi";
import AnisaDwiAriyanti from "./pages/AnisaDwiAriyanti";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Utama untuk Profil Latisha sesuai instruksi [cite: 83-85] */}
        <Route path="/nasywa" element={<Nasywa />} />
        <Route path="/anisa" element={<AnisaDwiAriyanti />} />
        <Route path="/latisha" element={<LatishaSyifaPratiwi />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;