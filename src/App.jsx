import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactusPage";
import LoginPage from "./pages/LoginPage";
import VerificationPage from "./pages/VerificationPage";

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Jobs In Saudi | Home";
        break;
      case "/explore":
        document.title = "Jobs In Saudi | Explore";
        break;
      case "/aboutus":
        document.title = "Jobs In Saudi | About Us";
        break;
      case "/contactus":
        document.title = "Jobs In Saudi | Contact Us";
        break;
      case "/login":
        document.title = "Jobs In Saudi | Login";
        break;
      case "/verification":
        document.title = "Jobs In Saudi | Verification";
        break;
      default:
        document.title = "Jobs In Saudi";
    }
  }, [location]);

  return null; 
};

const App = () => {
  return (
    <Router>
      <TitleUpdater />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/verification" element={<VerificationPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
