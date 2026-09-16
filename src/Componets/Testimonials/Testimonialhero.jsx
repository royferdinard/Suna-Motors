import React from "react";
import { motion } from "framer-motion";

const TestimonialHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-950">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -right-32 top-32 h-72 w-72 rounded-full bg-orange-400/5 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      {/* Decorative Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]
        [background-image:linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)]
        [background-size:60px_60px]
        dark:opacity-[0.05]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-600 dark:border-orange-400/20 dark:bg-orange-400/10 dark:text-orange-400">
            <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
            Customer Stories
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl dark:text-white"
        >
          What our customers are{" "}
          <span className="relative whitespace-nowrap text-orange-500">
            driving home
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg dark:text-gray-300"
        >
          Real experiences from people who found their next vehicle with{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Suna Motors
          </span>
          <br /> from the first showroom visit to the moment they drove away
          with the keys.
        </motion.p>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="mx-auto mt-10 h-1 w-16 origin-center rounded-full bg-orange-500"
        />
      </div>

      {/* Decorative Rings */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-64 w-64 rounded-full border border-orange-500/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-64 w-64 rounded-full border border-orange-500/10"
        aria-hidden="true"
      />
    </section>
  );
};

export default TestimonialHero;
