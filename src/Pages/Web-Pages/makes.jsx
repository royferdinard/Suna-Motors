import React from "react";
import Header from "../../Componets/Header/header";
import MakesHero from "../../Componets/Makes/makesHero";
import BrowseMakes from "../../Componets/Makes/browseByMakes";
import MakeHighlights from "../../Componets/Makes/makeHighlights";
import Footer from "../../Componets/footer";
import Cta from "../../Componets/cta";

const Makes = ()=>{
    return (
        <>
        <Header/>
        <MakesHero/>
        <MakeHighlights/>
        <BrowseMakes/>
        <Cta/>
        <Footer/>
        </>
    )
}
export default Makes