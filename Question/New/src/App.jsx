import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Counters from './components/Counters';
import Input from './components/Input';
import HP from './components/HP';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/counter" element={<Counters />} />
        <Route path="/input" element={<Input />} />
        <Route path="/hp" element={<HP />} />
      </Routes>
    </div>
  );
};

export default App;
