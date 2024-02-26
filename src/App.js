import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import '../node_modules/bootstrap/dist/css/bootstrap.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'; 
import '../node_modules/font-awesome/css/font-awesome.min.css'; 


import './assets/css/style.css'; 
import './assets/css/mobile.css'; 
import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Course from "./pages/Course"; 
import Blog from "./pages/Blog"; 
import Contact from "./pages/Contact"; 
import Faq from "./pages/Faq"; 
import Privacy from "./pages/PrivacyPolicy"; 
import TermsConditions from "./pages/TermsConditions"; 
import Profile from "./pages/Profile"; 
import Signup from "./pages/Signup"; 
import CourseDetail from "./pages/CourseDetail"; 

import Header from "./components/Header"; 
import Footer from "./components/Footer";

import Login from "./components/Login"; 
import Blogdetail from "./pages/BlogDetail.jsx";


function App() {
  return (
    <div className={'website'}> 
      <Router> 
        <Header /> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about-us" element={<About />} /> 
          <Route path="/course" element={<Course />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact-us" element={<Contact />} /> 
          <Route path="/faq" element={<Faq />} /> 
          <Route path="/privacy-policy" element={<Privacy />} /> 
          <Route path="/terms-conditions" element={<TermsConditions />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/sign-up" element={<Signup />} /> 
          <Route path="/course-detail" element={<CourseDetail />} /> 
          <Route path="/login" className="login-header" element={<Login />} />
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/blog-detail" element={<Blogdetail />} /> 
        </Routes> 
        <Footer />   
      </Router> 
      
    </div> 
  );
}

export default App;
