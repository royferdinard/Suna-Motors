import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Avatar from "./Avatar";
import StarRating from "./Starrating";

const FeaturedTestimonial = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-6 lg:px-10"
      >
        <div className="relative rounded-2xl border border-gray-200 bg-white px-8 py-10 dark:border-gray-800 dark:bg-gray-950 sm:px-12 sm:py-14">
          <span
            className="pointer-events-none absolute left-6 top-4 select-none font-serif text-7xl leading-none text-orange-500/15 sm:left-10 sm:text-8xl"
            aria-hidden="true"
          >
            "
          </span>

          <blockquote className="relative text-xl font-medium leading-relaxed text-gray-900 dark:text-white sm:text-2xl">
            {testimonial.testimonial}
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <Avatar name={testimonial.name} size="lg" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.vehicle} • {testimonial.location}
                </p>
              </div>
            </div>
            <StarRating rating={testimonial.rating} size="lg" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedTestimonial;
