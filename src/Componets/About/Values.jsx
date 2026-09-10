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
  { icon: faHandshake, title: "Trust" },
  { icon: faEye, title: "Transparency" },
  { icon: faGem, title: "Quality" },
  { icon: faUserGroup, title: "Customer Focus" },
];

const Values = () => {
  return (
    <section className="w-full bg-gray-950 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Our Values
        </motion.h2>

        {/* Horizontal, divider-based layout — deliberately distinct from the card grids above */}
        <div className="mt-14 grid grid-cols-1 divide-y divide-gray-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="flex flex-col items-center gap-3 px-6 py-8 text-center"
            >
              <FontAwesomeIcon
                icon={value.icon}
                className="h-6 w-6 text-orange-500"
              />
              <span className="text-base font-semibold tracking-wide text-white">
                {value.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
