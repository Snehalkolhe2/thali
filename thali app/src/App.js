import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Menu from './components/Menu';
import Card from './components/Card';
import Product from './components/Product';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/Menu" element={<Menu />} />
        <Route path='/Product' element={<Product/>}/>
        <Route path="/Card" element={<Card />} />
       </Routes>
       <Footer/>
     </Router>
    </div>
  );
}

export default App;
