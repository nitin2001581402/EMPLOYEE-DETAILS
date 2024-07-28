import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';          
import View from './components/View';          
import Insert from './components/Insert';     
import EmpEdit from './components/EmpEdit';    

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/employee/edit/:id" element={<EmpEdit />} />
      </Routes>
    </Router>
  );
}

export default App;
