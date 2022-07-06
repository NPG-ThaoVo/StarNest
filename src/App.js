import { Routes, Route } from "react-router-dom";
import Home from "./pages";
import Kebo from "./pages/kebo";
import Content from "./components/home/privatepolicy";
import Termsofuse from "./components/home/termsofuse";
import Calendar from "./pages/calendar";
import CalendarTermofuse from "./components/calendar/termofuse";
import CalendarPrivatepolicy from "./components/calendar/privatePolicy";
import CalendarAndroidPrivatepolicy from "./components/calendar/androidprivatepolicy";
import CalendarAndroidTermofuse from "./components/calendar/androidtermsofuse";

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
      <Route
        path="/calendar/androidprivatepolicy"
        element={<CalendarAndroidPrivatepolicy />}
      />
      <Route
        path="/calendar/androidtermsofuse"
        element={<CalendarAndroidTermofuse />}
      />
    </Routes>
  );
}

export default App;
