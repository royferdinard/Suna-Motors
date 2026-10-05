import React, { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  CarFront,
  Clock,
  Mail,
  Phone,
  Trash2,
  User,
} from "lucide-react";

import {
  deleteAppointment,
  getAppointments,
  APPOINTMENTS_UPDATED_EVENT,
  updateAppointment,
} from "../../utils/appointmentStorage";

const Appointments = () => {
  const [appointments, setAppointments] = useState(() => getAppointments());

  useEffect(() => {
    const refreshAppointments = () => {
      setAppointments(getAppointments());
    };

    window.addEventListener(APPOINTMENTS_UPDATED_EVENT, refreshAppointments);
    window.addEventListener("storage", refreshAppointments);

    return () => {
      window.removeEventListener(
        APPOINTMENTS_UPDATED_EVENT,
        refreshAppointments,
      );

      window.removeEventListener("storage", refreshAppointments);
    };
  }, []);

  const pendingCount = useMemo(
    () =>
      appointments.filter((appointment) => appointment.status === "Pending")
        .length,
    [appointments],
  );

  const confirmedCount = useMemo(
    () =>
      appointments.filter((appointment) => appointment.status === "Confirmed")
        .length,
    [appointments],
  );

  const handleStatusChange = (id, status) => {
    const updatedAppointments = updateAppointment(id, { status });

    setAppointments(updatedAppointments);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?",
    );

    if (!confirmed) return;

    const updatedAppointments = deleteAppointment(id);

    setAppointments(updatedAppointments);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-1 text-sm font-medium text-orange-600">
          Customer Requests
        </p>

        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Appointments
        </h1>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Manage vehicle viewing requests from customers.
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Requests
          </p>

          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {appointments.length}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm text-gray-500 dark:text-gray-400">Pending</p>

          <p className="mt-2 text-3xl font-bold text-orange-600">
            {pendingCount}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm text-gray-500 dark:text-gray-400">Confirmed</p>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {confirmedCount}
          </p>
        </div>
      </div>

      {/* Empty State */}
      {appointments.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white px-6 py-20 text-center dark:border-white/10 dark:bg-white/5">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 dark:bg-white/10">
            <CalendarDays
              size={26}
              className="text-gray-500 dark:text-gray-400"
            />
          </div>

          <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            No appointments yet
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 dark:text-gray-400">
            Customer viewing requests will appear here when someone books a
            vehicle viewing.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid lg:grid-cols-[240px_1fr]">
                {/* Vehicle Image */}
                <div className="relative h-56 bg-gray-100 dark:bg-gray-900 lg:h-full lg:min-h-[250px]">
                  {appointment.vehicleImage ? (
                    <img
                      src={appointment.vehicleImage}
                      alt={appointment.vehicleName || "Vehicle"}
                      className="h-full w-full object-contain p-4"
                    />
                  ) : (
                    <div className="flex h-full min-h-[220px] items-center justify-center text-gray-400">
                      <div className="text-center">
                        <CarFront
                          size={36}
                          className="mx-auto mb-2 opacity-50"
                        />

                        <p className="text-xs">No vehicle image</p>
                      </div>
                    </div>
                  )}

                  {/* Image Label */}
                  <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    Requested Vehicle
                  </div>
                </div>

                {/* Appointment Content */}
                <div className="p-5 sm:p-6">
                  {/* Top Row */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/10">
                          <User size={20} />
                        </div>

                        <div className="min-w-0">
                          <h2 className="truncate font-semibold text-gray-900 dark:text-white">
                            {appointment.customerName || "Unknown Customer"}
                          </h2>

                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Customer
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <select
                        value={appointment.status}
                        onChange={(event) =>
                          handleStatusChange(appointment.id, event.target.value)
                        }
                        className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 outline-none transition focus:border-orange-600 dark:border-white/10 dark:bg-gray-900 dark:text-gray-300"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>

                      <button
                        type="button"
                        onClick={() => handleDelete(appointment.id)}
                        className="rounded-xl p-2.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10"
                        title="Delete appointment"
                        aria-label="Delete appointment"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Customer Contact */}
                  <div className="mt-5 grid gap-3 border-t border-gray-100 pt-5 sm:grid-cols-2 dark:border-white/10">
                    <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/5">
                      <Phone size={17} className="shrink-0 text-gray-400" />

                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wide text-gray-400">
                          Phone
                        </p>

                        <p className="mt-0.5 truncate text-sm font-medium text-gray-700 dark:text-gray-300">
                          {appointment.phone || "Not provided"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3 dark:bg-white/5">
                      <Mail size={17} className="shrink-0 text-gray-400" />

                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wide text-gray-400">
                          Email
                        </p>

                        <p className="mt-0.5 truncate text-sm font-medium text-gray-700 dark:text-gray-300">
                          {appointment.email || "Not provided"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle + Date */}
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {/* Vehicle */}
                    <div className="rounded-2xl border border-gray-100 p-4 dark:border-white/10">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-500/10">
                          <CarFront size={18} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs text-gray-400">Vehicle</p>

                          <p className="mt-1 truncate font-semibold text-gray-900 dark:text-white">
                            {appointment.vehicleName || "Unknown Vehicle"}
                          </p>

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {appointment.vehicleBrand || "—"} •{" "}
                            {appointment.vehicleYear || "—"}
                          </p>

                          {appointment.vehiclePrice && (
                            <p className="mt-1 text-sm font-semibold text-orange-600">
                              KSh{" "}
                              {Number(
                                appointment.vehiclePrice,
                              ).toLocaleString()}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Requested Date */}
                    <div className="rounded-2xl border border-gray-100 p-4 dark:border-white/10">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/10">
                          <CalendarDays
                            size={18}
                            className="text-gray-500 dark:text-gray-400"
                          />
                        </div>

                        <div>
                          <p className="text-xs text-gray-400">
                            Requested Date
                          </p>

                          <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                            {appointment.requestedDate || "Not provided"}
                          </p>

                          <p className="mt-1 flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Clock size={13} />
                            Viewing request
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
