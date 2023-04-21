import React from 'react';
import "react-router-dom";
import About from "./About";
import Home from "./Home";
import _404 from './_404';
import Contact from './Contact';

import { BrowserRouter,Route,Routes} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<_404/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;