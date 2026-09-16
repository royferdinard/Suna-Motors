import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowRight,
  faGaugeHigh,
  faGasPump,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const ModelCard = ({ vehicle, isSelected, onCompareChange }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-gray-900"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={vehicle.images?.[0]}
          alt={vehicle.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Status */}
        <span className="absolute left-4 top-4 rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">
          {vehicle.status}
        </span>

        {/* Wishlist */}
        <button
          type="button"
          aria-label={`Add ${vehicle.name} to wishlist`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-orange-600 hover:text-white dark:bg-gray-900/90 dark:text-gray-300"
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
            {vehicle.brand}
          </p>

          <h3 className="mt-1 text-xl font-bold text-gray-950 dark:text-white">
            {vehicle.name}
          </h3>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 border-y border-gray-100 py-4 dark:border-white/10">
          <div className="flex flex-col items-center gap-1 text-center">
            <FontAwesomeIcon
              icon={faGaugeHigh}
              className="text-sm text-orange-600"
            />

            <span className="text-xs text-gray-500 dark:text-gray-400">
              {vehicle.mileage}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <FontAwesomeIcon
              icon={faGasPump}
              className="text-sm text-orange-600"
            />

            <span className="text-xs text-gray-500 dark:text-gray-400">
              {vehicle.fuel}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            <FontAwesomeIcon
              icon={faGear}
              className="text-sm text-orange-600"
            />

            <span className="text-xs text-gray-500 dark:text-gray-400">
              {vehicle.transmission}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-5">
          <p className="text-xs text-gray-500 dark:text-gray-400">Price</p>

          <p className="mt-1 text-lg font-bold text-gray-950 dark:text-white">
            KSh {vehicle.price.toLocaleString()}
          </p>
        </div>

        {/* Compare + Details */}
        <div className="mt-4 flex items-center justify-between gap-3">
          {/* Compare */}
          <label
            className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-all duration-300 ${
              isSelected
                ? "border-orange-600 bg-orange-600 text-white"
                : "border-gray-200 bg-white text-gray-600 hover:border-orange-600 hover:text-orange-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-orange-600 dark:hover:text-orange-600"
            }`}
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => onCompareChange(vehicle)}
              className="h-4 w-4 cursor-pointer accent-orange-600"
            />

            <span>{isSelected ? "Compared" : "Compare"}</span>
          </label>

          {/* Details */}
          <Link
            to={`/models/${vehicle.id}`}
            className="group/btn inline-flex items-center gap-2 rounded-lg bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 dark:bg-white dark:text-gray-950 dark:hover:bg-orange-600 dark:hover:text-white"
          >
            Details
            <FontAwesomeIcon
              icon={faArrowRight}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ModelCard;
