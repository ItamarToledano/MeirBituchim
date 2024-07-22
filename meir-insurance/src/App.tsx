import HomePage from "./components/HomePage";
import RegisterUnionPage from "./components/RegisterUnionPage";
import RetirementPlanningPage from "./components/RetirementPlanningPage";
import ContactUs from "./components/ContactUs";
import HealthInsurancePage from "./components/HealthInsurancePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="healthInsurance" element={<HealthInsurancePage />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="retirementPlanning" element={<RetirementPlanningPage />} />
        <Route path="registerUnion" element={<RegisterUnionPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
