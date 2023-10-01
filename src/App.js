import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Home from './components/home';
import Services from './components/services';
import About from './components/about';
import Gallery from './components/gallery';
import Contact from './components/contact';

function App() {
  return (
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='services' element={<Services/>}/>
<Route path='contact' element={<Contact/>}/>

<Route path='gallery' element={<Gallery/>}/>

<Route path='about' element={<About/>}/>


</Routes>
  );
}

export default App;
