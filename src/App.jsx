import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import About from './pages/About';
import Team from './pages/Team';
import Films from './pages/Films';
import Soon from './components/Soon';

export default function App() {
  
  return (
<BrowserRouter basename='/'>
<Navbar />
<main>

<Routes>
  {/* <Route path="/" element={<Home />} /> */}
<Route path='/' element={<Soon />} />
<Route  path="*" element={<Soon />} />

    
  {/* <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path="/team" element={<Team />} />
  <Route path="/films" element={<Films />} /> */}
  
</Routes>
</main>
<Footer />

</BrowserRouter>
  )
}


    // <>
    //   <Navbar setToggle={setToggle} />
  
    //   <main className={`main ${theme} background`}>
    //     <Home />
    //     <div className='container text'>
    //       <About /> 
    //       <Skills />
    //       <Works />
    //       <Contact />
    //     </div>
    //   </main>
    //   <Footer />
    // </>