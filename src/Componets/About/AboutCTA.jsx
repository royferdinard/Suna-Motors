import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutCTA = () => {
  return (
    <section className="w-full bg-gray-950 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6 text-center lg:px-10"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to Find Your Next Vehicle?
        </h2>
        <p className="mt-4 text-base text-gray-300">
          Explore what's available or get in touch with our team for guidance on
          the right fit for you.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/vehicles"
            className="rounded-xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-700 hover:shadow-md"
          >
            View Available Vehicles
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-gray-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-orange-600 hover:text-orange-500"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
