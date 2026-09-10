import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/Images/Backgrounds/Hero-Bg/bg1.jpeg";

const AboutHero = () => {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden pt-18">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Suna Motors showroom with a lineup of quality used vehicles"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gray-950/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          Driven by Trust. Built for Your Journey.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-base text-gray-200 sm:text-lg"
        >
          At Suna Motors, we help you find the right vehicle with honest
          guidance and a straightforward buying experience, from the first
          search to the day you drive away.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
