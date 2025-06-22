// import React from 'react'
import { useEffect } from "react";
import "./App.css";
import updateTitle from "./utils/titleUpdate";
import Navbar from "./components/Navbar.tsx";
import Titles from "./utils/titles";
import { Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import HowItWork from "./pages/HowItWork.tsx";
import About from "./pages/About.tsx";
import Footer from "./components/Footer.tsx";
import Pricing from "./pages/Pricing.tsx";
import Features from "./pages/Features.tsx";
import HelpCenter from "./pages/HelpCenter.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsService from "./pages/TermsService.tsx";
import Login from "./components/Login.tsx";

function App() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      // This is just a placeholder for any periodic action you might want to perform
      const titleKeys = Object.keys(Titles) as Array<keyof typeof Titles>;
      const randomTitleKey =
        titleKeys[Math.floor(Math.random() * titleKeys.length)];

      updateTitle(Titles[randomTitleKey]);
    }, 3000);

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, []);

  return (
    <>
      <div className="mb-15 md:mb-17 sm:mb-0">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-work" element={<HowItWork />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-Service" element={<TermsService />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
