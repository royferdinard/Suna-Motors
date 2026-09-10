import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHeart,
  faShieldHalved,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    value: "500+",
    label: "Vehicles sold",
    icon: faCar,
  },
  {
    value: "98%",
    label: "Happy customers",
    icon: faHeart,
  },
  {
    value: "10+",
    label: "Years of trust",
    icon: faShieldHalved,
  },
  {
    value: "4.9/5",
    label: "Customer rating",
    icon: faStar,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TrustStats = () => {
  return (
    <section className="relative overflow-hidden border-y border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      {/* Subtle Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-orange-500/5 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-6xl
          grid-cols-2
          sm:grid-cols-4
        "
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={item}
            className={`
              group
              relative
              flex
              flex-col
              items-center
              justify-center
              px-5
              py-10
              text-center
              transition-all
              duration-300
              hover:bg-orange-500/[0.03]

              ${index !== 1 ? "border-gray-200 dark:border-gray-800" : ""}

              ${index % 2 === 0 ? "border-r" : ""}

              ${index < 2 ? "border-b sm:border-b-0" : ""}

              sm:border-r

              sm:last:border-r-0
            `}
          >
            {/* Icon */}
            <div
              className="
                mb-4
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-orange-500/10
                text-orange-500
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:bg-orange-500
                group-hover:text-white
              "
            >
              <FontAwesomeIcon icon={stat.icon} className="h-5 w-5" />
            </div>

            {/* Number */}
            <span
              className="
                text-3xl
                font-extrabold
                tracking-tight
                text-gray-950
                sm:text-4xl
                dark:text-white
              "
            >
              {stat.value}
            </span>

            {/* Label */}
            <span
              className="
                mt-1
                text-xs
                font-medium
                uppercase
                tracking-wide
                text-gray-500
                sm:text-sm
                dark:text-gray-400
              "
            >
              {stat.label}
            </span>

            {/* Bottom Accent */}
            <div
              className="
                mt-4
                h-0.5
                w-0
                rounded-full
                bg-orange-500
                transition-all
                duration-300
                group-hover:w-8
              "
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TrustStats;
