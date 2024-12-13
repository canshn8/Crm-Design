import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import CalendarComponent from './components/Calender';
import GraphComponent from './components/Graph';
import Login from './components/Login';
import Notifi from './components/Notifi';
import StudentFom from './components/StudentFom';
import Students from './components/Students';
import Register from './components/Register';
import Layout from './pages/Layout';


function App() {

  
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change




  return (
     <Layout>
     <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route  path="/calendar" element={<CalendarComponent />} />
        <Route  path="/register" element={<Register />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/not" element={< Notifi/>} />
        <Route  path="/addStudent" element={<StudentFom />} />
        <Route  path="/students" element={<Students />} />
        <Route  path="/graph" element={<GraphComponent />} />
      </Routes>
     </Layout>
  );
}

export default App;
