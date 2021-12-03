import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import Kedo from './pages/kedo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kedo" element={<Kedo />} />
    </Routes>
  );
}

export default App;
