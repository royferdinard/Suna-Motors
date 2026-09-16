import React from "react";
import Header from "../../Componets/Header/header";
import CategoriesHero from "../../Componets/Categories/categoryHero";
import VehicleCategories from "../../Componets/Categories/categories";
import VehicleNeeds from "../../Componets/Categories/vehicleNeeds";
import Cta from "../../Componets/cta";
import Footer from "../../Componets/footer";
import CategoryHelp from "../../Componets/Categories/categoryHelp";

const Categories = ()=>{
    return (
        <>
        <Header/>
        <CategoriesHero/>
        <VehicleCategories/>
        <VehicleNeeds/>
        <CategoryHelp/>
        <Cta/>
        <Footer/>
        </>
    )
}

export default Categories