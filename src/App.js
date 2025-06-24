
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './components/AuthPage';


function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path ="/login" element={<AuthPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
