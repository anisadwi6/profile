import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LatishaSyifaPratiwi from "./pages/LatishaSyifaPratiwi";

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute Utama untuk Profil Latisha sesuai instruksi [cite: 83-85] */}
        <Route path="/latisha" element={<LatishaSyifaPratiwi />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;