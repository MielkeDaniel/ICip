import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DFinity from "./pages/DFinity";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dfinity" element={<DFinity />} />
    </Routes>
  );
};

export default AppRoutes;
