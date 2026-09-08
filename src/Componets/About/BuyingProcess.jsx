import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faCarSide,
  faHandshake,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    icon: faCompass,
    title: "Explore",
    description: "Browse available vehicles at your own pace.",
  },
  {
    icon: faCarSide,
    title: "Choose",
    description: "Narrow it down to the vehicle that fits you best.",
  },
  {
    icon: faHandshake,
    title: "Get Guidance",
    description: "Get clear, honest input before you decide.",
  },
  {
    icon: faKey,
    title: "Drive Away",
    description: "Complete the purchase and hit the road.",
  },
];

const BuyingProcess = () => {
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
            How the Buying Process Works
          </h2>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connecting line — desktop only */}
          <div className="pointer-events-none absolute top-6 left-0 hidden h-px w-full bg-gray-200 lg:block dark:bg-gray-800" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                {index + 1}
              </div>

              <FontAwesomeIcon
                icon={step.icon}
                className="mt-4 h-5 w-5 text-orange-600 dark:text-orange-400"
              />

              <h3 className="mt-3 text-base font-semibold text-gray-900 dark:text-white">
                {step.title}
              </h3>

              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyingProcess;
