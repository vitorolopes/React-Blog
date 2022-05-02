import React, { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Post from './pages/Post'

import './App.css';

function App() {
  return (
    <Router>
       <Navbar/>
       
       <Routes>

          <Route exact path='/' element= { <Home/>} />

          <Route exact path='/posts/:postId' element= { <Post/>} />

       </Routes>

    </Router>
  );
}

export default App;
