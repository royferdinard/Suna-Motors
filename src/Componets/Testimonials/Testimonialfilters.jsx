import React from "react";

const TestimonialFilters = ({ categories, activeFilter, onChange }) => {
  return (
    <div
      className="flex flex-wrap justify-center gap-3"
      role="group"
      aria-label="Filter testimonials by vehicle category"
    >
      {categories.map((category) => {
        const isActive = category === activeFilter;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={`
              relative overflow-hidden rounded-full
              border px-5 py-2
              text-sm font-semibold
              transition-all duration-300
              focus:outline-none focus:ring-2
              focus:ring-orange-600/50

              ${
                isActive
                  ? `
                    border-orange-600
                    bg-orange-600
                    text-white
                    shadow-lg shadow-orange-600/20
                    dark:border-orange-600
                    dark:bg-orange-600
                    dark:text-white
                    dark:shadow-orange-600/20
                  `
                  : `
                    border-gray-200
                    bg-white
                    text-gray-600
                    shadow-sm
                    hover:border-orange-600
                    hover:bg-orange-50
                    hover:text-orange-600

                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:text-gray-400
                    dark:hover:border-orange-600/40
                    dark:hover:bg-orange-600/10
                    dark:hover:text-orange-400
                  `
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default TestimonialFilters;
