import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faMagnifyingGlass,
  faHandshake,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

// Reusable data array — add or edit services here without touching the JSX below
const services = [
  {
    icon: faCar,
    title: "Vehicle Sales",
    description:
      "A curated selection of vehicles to browse, compare, and choose from.",
  },
  {
    icon: faMagnifyingGlass,
    title: "Vehicle Sourcing",
    description:
      "Can't find the right fit? We help track down a vehicle that matches what you need.",
  },
  {
    icon: faHandshake,
    title: "Customer Guidance",
    description:
      "Straightforward advice at every step, so you can make an informed decision.",
  },
  {
    icon: faClipboardCheck,
    title: "Vehicle Selection Assistance",
    description:
      "Hands-on support narrowing down options based on your budget and needs.",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Practical support at every stage of finding and buying your vehicle.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                <FontAwesomeIcon icon={service.icon} className="h-5 w-5" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
