import React from "react";
import ContactHero from "../../Componets/Contact/hero";
import Header from "../../Componets/Header/header";
import Details from "../../Componets/Contact/DetailSection/details";
import Location from "../../Componets/Contact/location";
import Footer from "../../Componets/footer";

const Contact = ()=>{
    return (
        <>
        <Header/>
        <ContactHero/>
        <Details/>
        <Location/>
        <Footer/>
        
        </>
    )
}

export default Contact