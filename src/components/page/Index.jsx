import React from "react";
import "..//../App.css";
import Header from "../header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Qualification from "../qualification/Qualification";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import ScrollUp from "../scrollup/ScrollUp";

const App = () => {
    return(
        <>
        <Header />

        <main className="main">
            <Home />
            <About />
            <Qualification />            
            <Contact />
        </main>
            <Footer />
            <ScrollUp />
        </>
    )
}    

export default App;