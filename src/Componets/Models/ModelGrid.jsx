import React from "react";
import { motion } from "framer-motion";
import ModelCard from "./ModelCard";

const ModelGrid = ({ vehicles, compareVehicles, onCompareChange }) => {
  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-950 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Our Collection
            </p>

            <h2 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white sm:text-3xl">
              Available Vehicles
            </h2>
          </div>

          <p className="hidden text-sm text-gray-500 dark:text-gray-400 sm:block">
            {vehicles.length} {vehicles.length === 1 ? "vehicle" : "vehicles"}{" "}
            found
          </p>
        </div>

        {/* Empty State */}
        {vehicles.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
              No vehicles found
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Try adjusting your search or filters to find a vehicle.
            </p>
          </div>
        ) : (
          /* Vehicle grid */
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {vehicles.map((vehicle) => (
              <ModelCard
                key={vehicle.id}
                vehicle={vehicle}
                isSelected={compareVehicles.some(
                  (item) => item.id === vehicle.id,
                )}
                onCompareChange={onCompareChange}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ModelGrid;
