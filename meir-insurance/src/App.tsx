import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
// import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contactUs" element={<ContactUs />} />

        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
