import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import {GetInvolved} from "./components/GetInvolved";
import {Donate} from "./components/Donate";
// import {Contact} from "./components/Contact";


function App() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/get-involved' element={<GetInvolved />} />
            <Route path='/donate' element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
