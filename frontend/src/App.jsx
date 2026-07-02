import { useEffect } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage.jsx';
import AOS from 'aos';
import ContactPage from './Pages/ContactPage.jsx';
import About from './Pages/About.jsx';
import Layout from "./Layout.jsx";
import ScrollToHashElement from './Components/Animations/ScrollToHashElement.jsx';
import "aos/dist/aos.css";
import ScrollToTop from './Components/LandingPage/ScrollToTop.jsx';




function App() {

  useEffect(() => {
    document.title = "Hydro Canopy Analyst";
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );

}

export default App;

