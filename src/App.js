import React from 'react';
import './App.css';
import Profile from './Profile';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Profile />}/>
        </Routes>
      </Router>
  );
}

export default App;
