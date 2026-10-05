import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  MoreVertical,
  Pencil,
  Trash2,
  Eye,
  Star,
} from "lucide-react";
import { getVehicles, deleteVehicle } from "../../utils/vehicleStorage";

const statusStyles = {
  Available:
    "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400",

  Reserved:
    "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400",

  Sold: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",

  Featured:
    "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400",

  New: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
};

const Vehicles = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState(() => getVehicles());
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);

  /*
   * Get the statuses that actually exist in our vehicle data.
   * This prevents us from showing fake status options.
   */
  const availableStatuses = useMemo(() => {
    const statuses = vehicles.map((vehicle) => vehicle.status).filter(Boolean);

    return ["All", ...new Set(statuses)];
  }, [vehicles]);

  /*
   * Filter vehicles by search and status.
   */
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const vehicleName = vehicle.name || "";
      const vehicleBrand = vehicle.brand || "";

      const searchValue = search.toLowerCase();

      const matchesSearch =
        vehicleName.toLowerCase().includes(searchValue) ||
        vehicleBrand.toLowerCase().includes(searchValue);

      const matchesStatus =
        statusFilter === "All" || vehicle.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [vehicles, search, statusFilter]);

  /*
   * Delete vehicle from both:
   * 1. React state
   * 2. localStorage
   */
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this vehicle?",
    );

    if (!confirmed) return;

    const updatedVehicles = deleteVehicle(id);

    setVehicles(updatedVehicles);
    setOpenMenu(null);
  };

  /*
   * Get main vehicle image safely.
   */
  const getVehicleImage = (vehicle) => {
    if (vehicle.images?.length > 0) {
      return vehicle.images[0];
    }

    return null;
  };

  /*
   * Featured logic.
   *
   * New vehicles created from the Admin form will use:
   * vehicle.featured === true
   *
   * Existing data currently uses "Featured" as a status,
   * so we support both temporarily.
   */
  const isFeatured = (vehicle) => {
    return vehicle.featured === true || vehicle.status === "Featured";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-1 text-sm font-medium text-orange-600">Inventory</p>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Vehicles
          </h1>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Manage your vehicle inventory and availability.
          </p>
        </div>

        <Link
          to="/admin/vehicles/add"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-700"
        >
          Add Vehicle
        </Link>
      </div>

      {/* Stats */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Vehicles
          </p>

          <p className="mt-2 text-2xl font-bold">{vehicles.length}</p>
        </div>

        {/* Available */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm text-gray-500 dark:text-gray-400">Available</p>

          <p className="mt-2 text-2xl font-bold text-green-600">
            {
              vehicles.filter((vehicle) => vehicle.status === "Available")
                .length
            }
          </p>
        </div>

        {/* Featured */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm text-gray-500 dark:text-gray-400">Featured</p>

          <p className="mt-2 text-2xl font-bold text-orange-600">
            {vehicles.filter(isFeatured).length}
          </p>
        </div>

        {/* New */}
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm text-gray-500 dark:text-gray-400">New</p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {vehicles.filter((vehicle) => vehicle.status === "New").length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-white/5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 dark:border-white/10 dark:bg-white/5 md:max-w-md">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search vehicles..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-gray-400" />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none dark:border-white/10 dark:bg-gray-950"
          >
            {availableStatuses.map((status) => (
              <option key={status} value={status}>
                {status === "All" ? "All Status" : status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Vehicle Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Vehicle
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Year
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Price
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Featured
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle) => {
                  const vehicleImage = getVehicleImage(vehicle);

                  return (
                    <tr
                      key={vehicle.id}
                      className="border-b border-gray-100 transition hover:bg-gray-50 dark:border-white/5 dark:hover:bg-white/[0.03]"
                    >
                      {/* Vehicle */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          {vehicleImage ? (
                            <img
                              src={vehicleImage}
                              alt={vehicle.name}
                              className="h-14 w-20 rounded-xl object-cover"
                            />
                          ) : (
                            <div className="flex h-14 w-20 items-center justify-center rounded-xl bg-gray-100 text-xs text-gray-400 dark:bg-white/10">
                              No image
                            </div>
                          )}

                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white">
                              {vehicle.name}
                            </p>

                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                              ID #{String(vehicle.id).padStart(4, "0")}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Year */}
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                        {vehicle.year}
                      </td>

                      {/* Price */}
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                        KSh {Number(vehicle.price || 0).toLocaleString()}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            statusStyles[vehicle.status] ||
                            "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-gray-300"
                          }`}
                        >
                          {vehicle.status || "Unknown"}
                        </span>
                      </td>

                      {/* Featured */}
                      <td className="px-6 py-4">
                        {isFeatured(vehicle) ? (
                          <Star
                            size={18}
                            className="fill-orange-600 text-orange-600"
                          />
                        ) : (
                          <Star
                            size={18}
                            className="text-gray-300 dark:text-gray-600"
                          />
                        )}
                      </td>

                      {/* Actions */}
                      <td className="relative px-6 py-4 text-right">
                        <button
                          onClick={() =>
                            setOpenMenu(
                              openMenu === vehicle.id ? null : vehicle.id,
                            )
                          }
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/10 dark:hover:text-white"
                        >
                          <MoreVertical size={18} />
                        </button>

                        {openMenu === vehicle.id && (
                          <div className="absolute right-6 top-14 z-20 w-40 rounded-xl border border-gray-200 bg-white p-1 text-left shadow-xl dark:border-white/10 dark:bg-gray-900">
                            <button
                              type="button"
                              onClick={() => {
                                setOpenMenu(null);
                                navigate(`/admin/vehicles/${vehicle.id}`);
                              }}
                              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                            >
                              {" "}
                              <Eye size={16} /> View{" "}
                            </button>

                            <button
                              type="button"
                              onClick={() => {
                                setOpenMenu(null);
                                navigate(`/admin/vehicles/${vehicle.id}/edit`);
                              }}
                              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
                            >
                              <Pencil size={16} />
                              Edit
                            </button>

                            <button
                              type="button"
                              onClick={() => handleDelete(vehicle.id)}
                              className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
                            >
                              <Trash2 size={16} />
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-16 text-center text-sm text-gray-500 dark:text-gray-400"
                  >
                    No vehicles found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
