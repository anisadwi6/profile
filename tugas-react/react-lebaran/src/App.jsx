import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnisaDwiAriyanti from "./pages/AnisaDwiAriyanti";
import LatishaSyifaPratiwi from "./pages/LatishaSyifaPratiwi.jsx";
import NasywaPutriRachmitha from "./pages/NasywaProfile.jsx"
import Home from './pages/home.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute Utama untuk Profil Anisa sesuai instruksi [cite: 83-85] */}
        <Route path="/anisa-dwi-ariyanti" element={<AnisaDwiAriyanti />} />
        <Route path="/latisha" element={<LatishaSyifaPratiwi />}/>
        <Route path="/nasywa-putri-rachmitha" element={<NasywaPutriRachmitha/>}/>
        
        <Route path="/" element={<Home />} />
        {/* Halaman Landing agar tidak blank saat pertama buka localhost:5173 */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
