import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import harrierImage from "../../assets/Images/Vehicles/blackHarrier.jpg";

const ModelsHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50 pt-5 dark:border-white/10 dark:bg-gray-950 sm:pt-7 lg:pt-9">
      {/* Decorative orange glow */}
      <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[390px] max-w-7xl items-center gap-10 px-6 py-14 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-16">
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
          >
            <FontAwesomeIcon icon={faHouse} className="text-orange-600" />

            <span>Home</span>

            <FontAwesomeIcon icon={faChevronRight} className="text-xs" />

            <span className="font-medium text-gray-900 dark:text-white">
              Models
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl"
          >
            Explore Our <span className="text-orange-600">Models</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg"
          >
            Discover our collection of quality vehicles and find the perfect
            model that matches your lifestyle, needs, and budget.
          </motion.p>

          {/* Accent */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 70 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 h-1 rounded-full bg-orange-600"
          />
        </div>

        {/* RIGHT VEHICLE SHOWCASE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex min-h-[250px] items-center justify-center lg:min-h-[330px]"
        >
          {/* Orange glow behind vehicle */}
          <div className="absolute h-56 w-56 rounded-full bg-orange-600/15 blur-3xl sm:h-72 sm:w-72" />
          {/* Image container */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[540px]"
          >
            {/* Vehicle Frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/70 p-3 shadow-xl shadow-gray-200/40 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/30 sm:p-4">
              {/* Inner border */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-orange-600/10 bg-gray-100 dark:bg-gray-900">
                {/* Orange corner accent */}
                <div className="absolute left-0 top-0 z-20 h-16 w-16 rounded-br-[2rem] border-b-2 border-r-2 border-orange-600/70" />

                <div className="absolute bottom-0 right-0 z-20 h-16 w-16 rounded-tl-[2rem] border-l-2 border-t-2 border-orange-600/70" />

                {/* Vehicle image */}
                <img
                  src={harrierImage}
                  alt="Black Toyota Harrier"
                  className="relative z-10 h-[250px] w-full object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[290px]"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Vehicle shadow */}
            <div className="absolute bottom-0 left-1/2 h-8 w-4/5 -translate-x-1/2 rounded-full bg-black/30 blur-xl" />
          </motion.div>

          {/* Small floating label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-2 right-2 z-20 rounded-xl border border-gray-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-gray-900/90 sm:bottom-5 sm:right-5"
          >
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
              Featured Vehicle
            </p>

            <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
              Toyota Harrier
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelsHero;
