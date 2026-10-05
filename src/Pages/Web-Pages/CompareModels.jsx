import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCheckCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  getVehicles,
  VEHICLES_UPDATED_EVENT,
} from "../../utils/vehicleStorage";

const CompareModels = () => {
  const [searchParams] = useSearchParams();

  const [vehicles, setVehicles] = useState(() => getVehicles());

  useEffect(() => {
    const refreshVehicles = () => {
      setVehicles(getVehicles());
    };

    window.addEventListener(VEHICLES_UPDATED_EVENT, refreshVehicles);
    window.addEventListener("storage", refreshVehicles);

    return () => {
      window.removeEventListener(VEHICLES_UPDATED_EVENT, refreshVehicles);
      window.removeEventListener("storage", refreshVehicles);
    };
  }, []);

  const ids = searchParams.get("vehicles")?.split(",") || [];

  const compareVehicles = vehicles.filter((vehicle) =>
    ids.includes(String(vehicle.id)),
  );

  const comparisonFeatures = [
    {
      label: "Year",
      key: "year",
    },
    {
      label: "Price",
      key: "price",
      format: (value) => `KSh ${Number(value || 0).toLocaleString()}`,
    },
    {
      label: "Mileage",
      key: "mileage",
    },
    {
      label: "Fuel",
      key: "fuel",
    },
    {
      label: "Transmission",
      key: "transmission",
    },
    {
      label: "Seats",
      key: "seats",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white py-12 dark:border-white/10 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <Link
            to="/models"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-orange-600 dark:text-gray-400"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Models
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-orange-600">
            Vehicle Comparison
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-950 dark:text-white sm:text-4xl">
            Compare Models
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
            Compare your selected vehicles side by side and find the one that
            best matches your needs.
          </p>
        </div>
      </section>

      {/* No vehicles */}
      {compareVehicles.length < 2 ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white px-6 py-16 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-600/10 text-orange-600">
              <FontAwesomeIcon icon={faXmark} className="text-xl" />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-950 dark:text-white">
              Not Enough Vehicles
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Please select at least two vehicles to compare.
            </p>

            <Link
              to="/models"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700"
            >
              Browse Models
            </Link>
          </div>
        </section>
      ) : (
        /* Comparison */
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-gray-900">
              <table className="w-full min-w-[700px] border-collapse text-left">
                {/* Vehicle Header */}
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10">
                    <th className="w-40 p-5 text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Feature
                    </th>

                    {compareVehicles.map((vehicle) => (
                      <th key={vehicle.id} className="min-w-[220px] p-5">
                        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">
                          <div className="aspect-[16/10] overflow-hidden">
                            {vehicle.images?.[0] ? (
                              <img
                                src={vehicle.images[0]}
                                alt={vehicle.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center bg-gray-100 text-sm text-gray-400 dark:bg-gray-800">
                                No Image
                              </div>
                            )}
                          </div>

                          <div className="p-4">
                            <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                              {vehicle.brand}
                            </p>

                            <h2 className="mt-1 text-lg font-bold text-gray-950 dark:text-white">
                              {vehicle.name}
                            </h2>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Features */}
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr
                      key={feature.key}
                      className={
                        index % 2 === 0 ? "bg-gray-50 dark:bg-white/[0.02]" : ""
                      }
                    >
                      <td className="p-5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {feature.label}
                      </td>

                      {compareVehicles.map((vehicle) => {
                        const value = vehicle[feature.key];

                        return (
                          <td
                            key={vehicle.id}
                            className="p-5 text-sm text-gray-600 dark:text-gray-400"
                          >
                            {feature.format
                              ? feature.format(value)
                              : value || "—"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}

                  {/* Highlights */}
                  <tr>
                    <td className="p-5 align-top text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Highlights
                    </td>

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id} className="p-5">
                        <div className="space-y-2">
                          {vehicle.features
                            ?.slice(0, 5)
                            .map((feature, index) => (
                              <div
                                key={`${feature}-${index}`}
                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <FontAwesomeIcon
                                  icon={faCheckCircle}
                                  className="text-orange-600"
                                />

                                <span>{feature}</span>
                              </div>
                            ))}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Actions */}
                  <tr className="border-t border-gray-200 dark:border-white/10">
                    <td className="p-5" />

                    {compareVehicles.map((vehicle) => (
                      <td key={vehicle.id} className="p-5">
                        <Link
                          to={`/models/${vehicle.id}`}
                          className="inline-flex items-center justify-center rounded-lg bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600 dark:bg-white dark:text-gray-950 dark:hover:bg-orange-600 dark:hover:text-white"
                        >
                          View Details
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default CompareModels;
