import { useState } from 'react';
import './index.css';
import Employee from './components/Employee';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';

function App() {
  return (

    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/dictionary' element={<Dictionary/>} />
          <Route path='/definition/:search' element={<Definition/>} />
          <Route path='/customers' element={<Customers />} />
        </Routes>
      </Header>
    </BrowserRouter>
  )
}

export default App;
