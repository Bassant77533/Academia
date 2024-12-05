
import style from './App.css'; 
import React from 'react';
import Header from './components/heading/Header';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/about/About';
import CourseHome from './components/AllCourses/CourseHome';
import Team from './components/team/Team';
import Pricing from './components/pricing/Pricing'; 
import Blog from './components/blog/Blog';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/AllCourses" element={<CourseHome/>} />
        <Route  path="/team" element={<Team/>} />
        <Route  path="/pricing" element={<Pricing/>} />
        <Route  path="/blog" element={<Blog/>} />
        <Route  path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
