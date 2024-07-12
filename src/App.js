import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
const Navbar = React.lazy(()=> import( './components/Navbar' ));
const RoutesConfig = React.lazy(()=>import('./Routes/RoutesConfig'));


function App() {
  return (
    <BrowserRouter>
    {/* exist in all routes */}
      <Navbar />                    
      <RoutesConfig />
    </BrowserRouter>
  );
}

export default App;
