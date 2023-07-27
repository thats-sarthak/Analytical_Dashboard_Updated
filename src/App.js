import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import StaffDetails from './components/StaffDetails';
import Logout from './components/Logout';
import { Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';
import { useData } from './utility/useData';

function App() {
  const data = useData();

  return (
    <div className="App">
      <Heading />
      <Navbar />

      <Routes>
        <Route path="/dashboard" element={<Dashboard data={data} />} />
        <Route path="/staffdetails" element={<StaffDetails />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
