import React from 'react';
import './App.css';
import Front from './components/front';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';

function App() {
    return ( 
      <BrowserRouter>
        <switch >
        <Route path = { '/' } exact component = { Front}/> 
        <Route path = { '/login' } component = { Login }/> 
        <Route path = { '/register' } component = {Register}/>
         </switch>
      </BrowserRouter> 
    );
}

export default App;