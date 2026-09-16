import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CarFront, Plus } from "lucide-react";
import { getVehicles } from "../../utils/vehicleStorage";

const Dashboard = () => {
  const vehicles = useMemo(() => getVehicles(), []);

  const totalVehicles = vehicles.length;

  const availableVehicles = vehicles.filter(
    (vehicle) => vehicle.status === "Available",
  ).length;

  const featuredVehicles = vehicles.filter(
    (vehicle) => vehicle.featured === true || vehicle.status === "Featured",
  ).length;

  const newVehicles = vehicles.filter(
    (vehicle) => vehicle.status === "New",
  ).length;

  const stats = [
    {
      label: "Total Vehicles",
      value: totalVehicles,
    },
    {
      label: "Available",
      value: availableVehicles,
    },
    {
      label: "Featured",
      value: featuredVehicles,
    },
    {
      label: "New",
      value: newVehicles,
    },
  ];

  const recentVehicles = [...vehicles].reverse().slice(0, 5);

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-orange-600">Overview</p>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Dashboard
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Welcome back. Here's what's happening with Suna Motors today.
          </p>
        </div>

        <Link
          to="/admin/vehicles/add"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          <Plus size={18} />
          Add Vehicle
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-gray-200 bg-white p-6 transition-colors dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Recent Vehicles */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-white/10 sm:px-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Vehicles
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Recently added vehicles in your inventory.
            </p>
          </div>

          <Link
            to="/admin/vehicles"
            className="hidden items-center gap-1 text-sm font-medium text-orange-600 transition hover:text-orange-700 sm:flex"
          >
            View all
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Vehicles */}
        {recentVehicles.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 dark:bg-white/10">
              <CarFront
                size={26}
                className="text-gray-500 dark:text-gray-400"
              />
            </div>

            <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
              No vehicles yet
            </h3>

            <p className="mt-1 max-w-sm text-sm text-gray-500 dark:text-gray-400">
              Add your first vehicle to start building your inventory.
            </p>

            <Link
              to="/admin/vehicles/add"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              <Plus size={17} />
              Add Vehicle
            </Link>
          </div>
        ) : (
          <>
            <div className="divide-y divide-gray-100 dark:divide-white/10">
              {recentVehicles.map((vehicle) => {
                const image = vehicle.images?.[0];

                return (
                  <div
                    key={vehicle.id}
                    className="flex items-center gap-4 px-5 py-4 transition hover:bg-gray-50 dark:hover:bg-white/[0.03] sm:px-6"
                  >
                    {/* Image */}
                    <div className="h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                      {image ? (
                        <img
                          src={image}
                          alt={vehicle.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <CarFront size={22} className="text-gray-400" />
                        </div>
                      )}
                    </div>

                    {/* Vehicle Info */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                        {vehicle.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {vehicle.brand} • {vehicle.year}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="hidden text-right sm:block">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        KSh {Number(vehicle.price || 0).toLocaleString()}
                      </p>

                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        {vehicle.mileage || "—"}
                      </p>
                    </div>

                    {/* Status */}
                    <div className="hidden sm:block">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          vehicle.status === "Available"
                            ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400"
                            : vehicle.status === "Featured"
                              ? "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400"
                              : vehicle.status === "New"
                                ? "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                                : "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300"
                        }`}
                      >
                        {vehicle.status || "Unknown"}
                      </span>
                    </div>

                    {/* View */}
                    <Link
                      to={`/admin/vehicles/${vehicle.id}`}
                      className="hidden rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-orange-600 dark:hover:bg-white/10 sm:block"
                      title="View vehicle"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Mobile View All */}
            <div className="border-t border-gray-200 p-4 dark:border-white/10 sm:hidden">
              <Link
                to="/admin/vehicles"
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
              >
                View all vehicles
                <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
