import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faGem,
  faUserGroup,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const benefits = [
  {
    icon: faShieldHalved,
    title: "Trusted Experience",
    description:
      "A dealership built on honest dealings and dependable service.",
  },
  {
    icon: faGem,
    title: "Quality-Focused Selection",
    description: "Vehicles are chosen with care, not just added to a list.",
  },
  {
    icon: faUserGroup,
    title: "Customer-Centered Service",
    description: "Your needs guide every recommendation we make.",
  },
  {
    icon: faEye,
    title: "Transparent Process",
    description: "Clear information from your first inquiry to the final sale.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Why Choose Suna Motors
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 text-center transition-shadow duration-300 hover:shadow-md dark:bg-gray-900"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white">
                <FontAwesomeIcon icon={benefit.icon} className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                {benefit.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
