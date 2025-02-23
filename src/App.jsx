import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { app } from "./firebase/config";
import { getAuth } from "firebase/auth";
import HomePage from "./pages/HomePage";

import Components from "./pages/Components";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Navigation from "./components/Universal/Navigation";
import { FooterSection } from "./components/Universal/FooterSection";

function App() {
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const isDarkMode =
      localStorage.getItem("darkMode") === "true" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  useEffect(() => {
    console.log("Firebase Admin UID:", import.meta.env.VITE_FIREBASE_ADMIN_UID);
  }, []);
  useEffect(() => {
    console.log("Firebase connected:", getAuth(app));
  }, []);

  return (
    <div className="relative bg-primary dark:bg-secondary text-secondary dark:text-primary transition-colors duration-1000">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<Components />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
