
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path ="/login" element={<AuthPage/>}/>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

