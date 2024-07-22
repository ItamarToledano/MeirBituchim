import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUsPage";
import Layout from "./layout/Layout";
// import "./App.css";
import "../src/sass/main.scss";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contactUs" element={<ContactUs />} />
        </Route>
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
