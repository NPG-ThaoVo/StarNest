import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import Kebo from './pages/kebo';
import Content from './components/home/privatepolicy';
import Termsofuse from './components/home/termsofuse';
import Calendar from './pages/calendar';
import CalendarTermofuse from './components/calendar/termofuse';
import CalendarPrivatepolicy from './components/calendar/privatePolicy';
import DirectStore from './components/directstore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kebo" element={<Kebo />} />
      <Route path="kebo/privatepolicy" element={<Content />} />
      <Route path="kebo/termsofuse" element={<Termsofuse />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/calendar/termsofuse" element={<CalendarTermofuse />} />
      <Route
        path="/calendar/privatepolicy"
        element={<CalendarPrivatepolicy />}
      />
      <Route path="/learnkanji" element={<DirectStore />} />
      <Route path="/jlpttest" element={<DirectStore />} />
      <Route path="/goethetest" element={<DirectStore />} />

    </Routes>
  );
}

export default App;
