import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Kebo from "./pages/kebo";
import Content from "./components/home/privatepolicy";
import Termsofuse from "./components/home/termsofuse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kebo" element={<Kebo />} />
      <Route path="kebo/privatepolicy" element={<Content />} />
      <Route path="kebo/termsofuse" element={<Termsofuse />} />
    </Routes>
  );
}

export default App;
