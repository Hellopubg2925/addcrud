import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import About from './Component/About';
import Home from './Component/Home';
import Signup from './Auth/Signup';
import Login from './Auth/Login';
import Header from './Component/Header';
import React, { useState } from 'react';
import Dashboard from './Component/Dashboard';
import Edituser from './Component/Edit';
import View from './Component/View';


function App() {
 
 
  return (
   <>
<Router>
<Header  />
<Routes>
<Route path="" element={<Home />}></Route>
<Route path="About" element={<About />}></Route>
<Route path="Login" element={<Login  />}></Route>
<Route path="Signup" element={<Signup />}></Route>
<Route path="Dashboard" element={<Dashboard  />}></Route>
<Route path="Edituser/:id" element={<Edituser   />}></Route>
<Route path="View/:id" element={<View  />}></Route>

</Routes>

</Router>
   </>
  );
}


export default App;
