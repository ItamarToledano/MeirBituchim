import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUsPage";
import HealthInsurancePage from "./pages/HealthInsurancePage";
import RegisterUnionPage from "./pages/RegisterUnionPage";
import RetirementPlanningPage from "./pages/AboutPage";
import Layout from "./layout/Layout";
import "../src/sass/main.scss";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="healthInsurance" element={<HealthInsurancePage />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="retirementPlanning" element={<RetirementPlanningPage />} />
          <Route path="registerUnion" element={<RegisterUnionPage />} />
        </Route>
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
