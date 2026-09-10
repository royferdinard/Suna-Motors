import React from "react";
import Header from "../../Componets/Header/header";
import Hero from "../../Componets/Hero/Home-Hero/hero";
import PaymentOption from "../../Componets/paymentOtion";
import TopCars from "../../Componets/topCars";
import WhyChooseUs from "../../Componets/whyChooseUs";
import FeaturedMakes from "../../Componets/featuredMakes";
import Cta from "../../Componets/cta";
import Footer from "../../Componets/footer";
import Testimonials from "../../Componets/Testimonials/testimonials";

const Home = () => {
  return (
    <>
      <Header />
    <div className="">
      <Header/>
    <Hero/>
    <PaymentOption/>
    <TopCars/>
    <WhyChooseUs/>
    <FeaturedMakes/>
    <Cta/>
    <Footer/>
    </div>
    </>
  );
};

export default Home;
