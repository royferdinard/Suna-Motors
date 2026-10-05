import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Pencil, ArrowLeft, Star } from "lucide-react";
import { getVehicles } from "../../utils/vehicleStorage";

const ViewVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const vehicles = getVehicles();

    const foundVehicle = vehicles.find(
      (item) => Number(item.id) === Number(id),
    );

    if (!foundVehicle) {
      navigate("/admin/vehicles");
      return;
    }

    setVehicle(foundVehicle);
  }, [id, navigate]);

  if (!vehicle) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Loading vehicle...
        </p>
      </div>
    );
  }

  const mainImage = vehicle.images?.[0];

  const specifications = [
    ["Brand", vehicle.brand],
    ["Category", vehicle.category],
    ["Year", vehicle.year],
    ["Mileage", vehicle.mileage],
    ["Condition", vehicle.condition],
    ["Fuel", vehicle.fuel],
    ["Transmission", vehicle.transmission],
    ["Drive Type", vehicle.driveType],
    ["Body Type", vehicle.bodyType],
    ["Color", vehicle.color],
    ["Engine", vehicle.engine],
    ["Seats", vehicle.seats],
    ["Stock Number", vehicle.stockNumber],
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <button
              type="button"
              onClick={() => navigate("/admin/vehicles")}
              className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700"
            >
              <ArrowLeft size={16} />
              Back to Vehicles
            </button>

            <p className="mb-1 text-sm font-medium text-orange-600">
              Vehicle Details
            </p>

            <h1 className="text-2xl font-bold sm:text-3xl">{vehicle.name}</h1>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Vehicle ID #{String(vehicle.id).padStart(4, "0")}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(`/admin/vehicles/${vehicle.id}/edit`)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
          >
            <Pencil size={17} />
            Edit Vehicle
          </button>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Images */}
          <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="overflow-hidden rounded-xl">
              {mainImage ? (
                <img
                  src={mainImage}
                  alt={vehicle.name}
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                />
              ) : (
                <div className="flex h-[320px] items-center justify-center bg-gray-100 text-gray-400 dark:bg-white/10 sm:h-[420px]">
                  No image available
                </div>
              )}
            </div>

            {vehicle.images?.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
                {vehicle.images.map((image, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-lg border ${
                      index === 0
                        ? "border-orange-600"
                        : "border-gray-200 dark:border-white/10"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${vehicle.name} ${index + 1}`}
                      className="h-20 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Summary */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {vehicle.brand}
                </p>

                <h2 className="mt-1 text-2xl font-bold">{vehicle.name}</h2>
              </div>

              {vehicle.featured === true || vehicle.status === "Featured" ? (
                <div className="flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-600 dark:bg-orange-500/10">
                  <Star size={14} className="fill-orange-600" />
                  Featured
                </div>
              ) : null}
            </div>

            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>

              <p className="mt-1 text-3xl font-bold text-orange-600">
                KSh {Number(vehicle.price || 0).toLocaleString()}
              </p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700 dark:bg-green-500/10 dark:text-green-400">
                {vehicle.status || "Unknown"}
              </span>

              {vehicle.year && (
                <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 dark:bg-white/10 dark:text-gray-300">
                  {vehicle.year}
                </span>
              )}
            </div>

            <div className="border-t border-gray-200 pt-5 dark:border-white/10">
              <h3 className="mb-3 text-sm font-semibold">Description</h3>

              <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                {vehicle.description || "No description available."}
              </p>
            </div>
          </section>
        </div>

        {/* Specifications */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="mb-6 text-lg font-semibold">Vehicle Specifications</h2>

          <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {specifications.map(([label, value]) => (
              <div
                key={label}
                className="border-b border-gray-100 pb-4 dark:border-white/5"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  {label}
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {value || "—"}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <h2 className="mb-5 text-lg font-semibold">Features</h2>

          {Array.isArray(vehicle.features) && vehicle.features.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {vehicle.features.map((feature, index) => (
                <span
                  key={index}
                  className="rounded-xl bg-gray-100 px-4 py-2 text-sm text-gray-700 dark:bg-white/10 dark:text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No features listed.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ViewVehicle;
