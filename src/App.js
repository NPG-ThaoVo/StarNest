import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import Kebo from './pages/kebo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kebo" element={<Kebo />} />
    </Routes>
  );
}

export default App;
