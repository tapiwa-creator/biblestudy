import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './Pages/Auth'; 
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import Lessons from './Pages/Lessons';
import Profile from './Pages/Profile';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth is the root landing page */}
      <Route path="/" element={<Auth />} /> 
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}