import React from "react";
import Header from "../../Componets/Header/header";
import HelpHero from "../../Componets/Help/helpHero";
import QuickHelp from "../../Componets/Help/quickHelp";
import FAQ from "../../Componets/Help/faq";
import StillNeedHelp from "../../Componets/Help/moreHelp";
import Footer from "../../Componets/footer";

const Help = ()=>{
    return (
        <>
        <Header/>
        <HelpHero/>
        <QuickHelp/>
        <FAQ/>
        <StillNeedHelp/>
        <Footer/>
        </>
    )
}

export default Help