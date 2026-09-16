import React from "react";
import Header from "../../Componets/Header/header";
import AboutHero from "../../Componets/About/AboutHero";
import WhoWeAre from "../../Componets/About/WhoWeAre";
import Services from "../../Componets/About/Services";
import WhyChooseUs from "../../Componets/About/WhyChooseUs";
import Values from "../../Componets/About/Values";
import BuyingProcess from "../../Componets/About/BuyingProcess";
import Testimonials from "../../Componets/About/Testimonials";
import Cta from "../../Componets/cta";
import Footer from "../../Componets/footer";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <WhoWeAre />
        <Services />
        <WhyChooseUs />
        <Values />
        <BuyingProcess />
        <Testimonials />
        <Cta />
        <Footer />
      </main>
    </>
  );
};

export default About;
