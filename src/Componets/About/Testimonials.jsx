import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Sample testimonial data for development.
// Replace each entry with real, permission-given customer feedback before launch.
// Shape: { name, role, quote, rating (1-5) }
const testimonialsData = [
  {
    name: "James K.",
    role: "Nairobi",
    quote:
      "The team took the time to understand what I needed instead of just pushing a sale. Made the whole process easy.",
    rating: 5,
  },
  {
    name: "Amina W.",
    role: "Nairobi",
    quote:
      "Straightforward and honest from start to finish. I knew exactly what I was getting into at every step.",
    rating: 5,
  },
  {
    name: "David M.",
    role: "Kiambu",
    quote:
      "Good guidance on choosing between a couple of options. Didn't feel rushed into a decision.",
    rating: 4,
  },
];

const Testimonials = () => {
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
            What Customers Say
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              {/* Star rating, built from the numeric rating with .map() */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, starIndex) => (
                  <FontAwesomeIcon
                    key={starIndex}
                    icon={faStar}
                    className={`h-4 w-4 ${
                      starIndex < testimonial.rating
                        ? "text-orange-500"
                        : "text-gray-200 dark:text-gray-700"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                "{testimonial.quote}"
              </p>

              <div className="mt-5">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                {testimonial.role && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
