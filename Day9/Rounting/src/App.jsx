import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
const App = () => {
  return (
   
      <div>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
   
  );
}

export default App;
