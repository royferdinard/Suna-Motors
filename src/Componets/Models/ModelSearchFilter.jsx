import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSliders,
  faChevronDown,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const filters = [
  {
    label: "Brand",
    options: ["All Brands", "Toyota", "BMW", "Mercedes", "Audi", "Honda"],
  },
  {
    label: "Price",
    options: [
      "Any Price",
      "Under KSh 2M",
      "KSh 2M - 5M",
      "KSh 5M - 10M",
      "Above KSh 10M",
    ],
  },
  {
    label: "Year",
    options: ["Any Year", "2025", "2024", "2023", "2022", "2021"],
  },
  {
    label: "Fuel",
    options: ["Any Fuel", "Petrol", "Diesel", "Hybrid", "Electric"],
  },
  {
    label: "Transmission",
    options: ["Any Transmission", "Automatic", "Manual"],
  },
];

const ModelSearchFilter = ({
  search,
  onSearchChange,
  selectedFilters,
  onFilterChange,
  onReset,
}) => {
  return (
    <section className="bg-white py-8 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Search Header */}
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-950 dark:text-white">
              Find Your Vehicle
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Search and filter our available models.
            </p>
          </div>

          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-gray-500 transition-colors hover:text-orange-600 dark:text-gray-400"
          >
            <FontAwesomeIcon icon={faRotateLeft} />
            Reset filters
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by model, brand or keyword..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-white/[0.05]"
          />
        </div>

        {/* Filter Row */}
        <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            {/* Filter Icon */}
            <div className="hidden shrink-0 items-center gap-2 px-2 text-sm font-semibold text-gray-700 dark:text-gray-300 lg:flex">
              <FontAwesomeIcon icon={faSliders} className="text-orange-600" />
              Filters
            </div>

            {/* Filter Controls */}
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {filters.map((filter) => (
                <div key={filter.label} className="relative">
                  <select
                    value={selectedFilters[filter.label] || ""}
                    onChange={(e) =>
                      onFilterChange(filter.label, e.target.value)
                    }
                    className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2.5 pr-9 text-sm font-medium text-gray-700 outline-none transition-all duration-300 hover:border-gray-300 focus:border-orange-600 focus:ring-4 focus:ring-orange-600/10 dark:border-white/10 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-white/20"
                  >
                    <option value="">{filter.label}</option>

                    {filter.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelSearchFilter;
