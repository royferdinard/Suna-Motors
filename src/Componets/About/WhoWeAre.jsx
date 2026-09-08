import React from "react";
import { motion } from "framer-motion";
import lotImage from "../../assets/Images/Backgrounds/Hero-Bg/bg3.jpg";

const WhoWeAre = () => {
  return (
    <section className="w-full bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 overflow-hidden rounded-2xl shadow-sm lg:order-1"
        >
          <img
            src={lotImage}
            alt="The Suna Motors vehicle lot and entrance"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Who We Are
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Suna Motors is a vehicle dealership focused on helping customers
            find a car that genuinely suits their needs. We know that buying a
            vehicle is a big decision, so we take the time to understand what
            you're looking for and guide you toward options that fit your budget
            and lifestyle.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Our goal is simple: make the vehicle-buying process clear,
            straightforward, and stress-free, from your first visit to the day
            you drive off in your next car.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
