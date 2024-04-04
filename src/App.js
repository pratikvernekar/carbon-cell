import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import History from './components/History/History';
import Header from './components/Header/Header';
import Organisation from './components/Organisation/Organisation';


const App = () => {
  return (
      <div>
        <Header/>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organization" element={<Organisation />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
  );
};

export default App;

