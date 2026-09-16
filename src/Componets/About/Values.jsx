import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faEye,
  faGem,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const values = [
  {
    icon: faHandshake,
    title: "Trust",
    description:
      "Every recommendation we make is grounded in what's genuinely best for you.",
  },
  {
    icon: faEye,
    title: "Transparency",
    description:
      "Clear pricing and honest information, with nothing hidden in the fine print.",
  },
  {
    icon: faGem,
    title: "Quality",
    description:
      "Every vehicle is checked and vetted before it ever reaches our lot.",
  },
  {
    icon: faUserGroup,
    title: "Customer Focus",
    description:
      "We listen first, so the car you choose actually fits your life.",
  },
];

const Values = () => {
  return (
    <section className="w-full bg-gray-950 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            What Drives Us
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Values
          </h2>
        </motion.div>

        {/* Card grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-gray-900"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-colors duration-300 group-hover:bg-orange-500/20">
                <FontAwesomeIcon
                  icon={value.icon}
                  className="h-6 w-6 text-orange-500"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-wide text-white">
                {value.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
