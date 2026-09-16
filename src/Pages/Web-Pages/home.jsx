import React from "react";

import Header from "../../Componets/Header/header";
import Hero from "../../Componets/Hero/Home-Hero/hero";
import PaymentOption from "../../Componets/paymentOtion";
import TopCars from "../../Componets/topCars";
import WhyChooseUs from "../../Componets/whyChooseUs";
import FeaturedMakes from "../../Componets/featuredMakes";
import BestModels from "../../Componets/topModels";
import TrendingCategories from "../../Componets/trendingCategory";
import Testimonials from "../../Componets/Testimonials/Testimonials";
import Cta from "../../Componets/cta";
import Footer from "../../Componets/footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="">
        <Header />
        <Hero />
        <PaymentOption />
        <TopCars />
        <WhyChooseUs />
        <FeaturedMakes />
        <BestModels />
        <TrendingCategories />
        <Testimonials />
        <Cta />
        <Footer />
      </div>
    </>
  );
};

export default Home;