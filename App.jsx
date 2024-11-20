import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Komponen Header
import Lamanspbe from './Lamanspbe'; // Halaman baru

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Lamanspbe" element={<Lamanspbe />} /> {/* Rute ke halaman Lamanspbe */}
        {/* Tambahkan rute lain sesuai kebutuhan */}
      </Routes>
    </Router>
  );
}

export default App;