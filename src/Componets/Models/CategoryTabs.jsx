import React from "react";
import { motion } from "framer-motion";

const categories = [
  "All Vehicles",
  "SUVs",
  "Sedans",
  "Hatchbacks",
  "Pickups",
  "Luxury",
  "Tractor",
];

const CategoryTabs = ({ activeCategory, onCategoryChange }) => {
  return (
    <section className="border-b border-gray-200 bg-white dark:border-white/10 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="overflow-x-auto">
          <div className="flex min-w-max items-center gap-2 py-5">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={`relative rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-950 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 -z-0 rounded-lg bg-orange-600"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryTabs;
