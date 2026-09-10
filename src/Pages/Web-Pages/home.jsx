import React from "react";
import Header from "../../Componets/Header/header";
import Testimonials from "../../Componets/Testimonials/testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <div className="pt-18">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
