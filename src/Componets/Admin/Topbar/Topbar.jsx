import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  Bell,
  Sun,
  Moon,
  ChevronDown,
  CalendarDays,
} from "lucide-react";

import {
  getAppointments,
  APPOINTMENTS_UPDATED_EVENT,
} from "../../../utils/appointmentStorage";

const Topbar = ({ onMenuClick, isDark, onToggleTheme }) => {
  const [appointments, setAppointments] = useState([]);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const notificationRef = useRef(null);

  // Load appointments
  useEffect(() => {
    const loadAppointments = () => {
      setAppointments(getAppointments());
    };

    loadAppointments();

    window.addEventListener(APPOINTMENTS_UPDATED_EVENT, loadAppointments);

    window.addEventListener("storage", loadAppointments);

    return () => {
      window.removeEventListener(APPOINTMENTS_UPDATED_EVENT, loadAppointments);

      window.removeEventListener("storage", loadAppointments);
    };
  }, []);

  // Close notification dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Only pending appointments are notifications
  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "Pending",
  );

  const notificationCount = pendingAppointments.length;

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white/95 px-4 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-gray-950/95 sm:px-6 lg:px-8">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white lg:hidden"
          aria-label="Open sidebar"
        >
          <Menu size={21} />
        </button>

        {/* Search */}
        <div className="hidden w-64 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 md:flex lg:w-80 dark:border-white/10 dark:bg-white/5">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
          />

          <span className="hidden rounded-md border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-400 lg:inline-block dark:border-white/10 dark:bg-white/5">
            ⌘ K
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Mobile Search */}
        <button
          type="button"
          className="rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 md:hidden dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Search"
        >
          <Search size={20} />
        </button>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={onToggleTheme}
          className="rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <div ref={notificationRef} className="relative">
          <button
            type="button"
            onClick={() => setNotificationOpen((prev) => !prev)}
            className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Notifications"
            aria-expanded={notificationOpen}
          >
            <Bell size={20} />

            {/* Notification Badge */}
            {notificationCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-[10px] font-bold text-white ring-2 ring-white dark:ring-gray-950">
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {notificationOpen && (
            <div className="absolute right-0 top-full mt-3 w-[min(360px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-white/10 dark:bg-gray-900">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 dark:border-white/10">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Notifications
                  </h3>

                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                    {notificationCount === 0
                      ? "You're all caught up"
                      : `${notificationCount} pending ${
                          notificationCount === 1 ? "request" : "requests"
                        }`}
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-950/40">
                  <Bell size={18} />
                </div>
              </div>

              {/* Notifications List */}
              <div className="max-h-96 overflow-y-auto">
                {pendingAppointments.length === 0 ? (
                  <div className="px-5 py-10 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-400 dark:bg-white/5">
                      <Bell size={20} />
                    </div>

                    <p className="mt-4 text-sm font-medium text-gray-900 dark:text-white">
                      No new requests
                    </p>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      New viewing requests will appear here.
                    </p>
                  </div>
                ) : (
                  pendingAppointments.slice(0, 5).map((appointment) => (
                    <Link
                      key={appointment.id}
                      to="/admin/appointments"
                      onClick={() => setNotificationOpen(false)}
                      className="block border-b border-gray-100 px-5 py-4 transition hover:bg-gray-50 dark:border-white/5 dark:hover:bg-white/5"
                    >
                      <div className="flex gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-950/40">
                          <CalendarDays size={17} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                              {appointment.customerName || "New Customer"}
                            </p>

                            <span className="h-2 w-2 shrink-0 rounded-full bg-orange-600" />
                          </div>

                          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                            Requested a viewing for
                          </p>

                          <p className="mt-0.5 truncate text-sm font-medium text-gray-700 dark:text-gray-300">
                            {appointment.vehicleName || "Vehicle"}
                          </p>

                          {appointment.requestedDate && (
                            <p className="mt-1 text-xs text-gray-400">
                              Date: {appointment.requestedDate}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>

              {/* Footer */}
              {notificationCount > 0 && (
                <div className="border-t border-gray-100 p-3 dark:border-white/10">
                  <Link
                    to="/admin/appointments"
                    onClick={() => setNotificationOpen(false)}
                    className="flex w-full items-center justify-center rounded-xl bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-orange-50 hover:text-orange-600 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-orange-950/30 dark:hover:text-orange-500"
                  >
                    View all appointments
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="mx-1 hidden h-8 w-px bg-gray-200 sm:block dark:bg-white/10" />

        {/* Admin Profile */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-gray-100 dark:hover:bg-white/5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-sm font-semibold text-white">
            A
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Admin
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Administrator
            </p>
          </div>

          <ChevronDown size={16} className="hidden text-gray-400 sm:block" />
        </button>
      </div>
    </header>
  );
};

export default Topbar;
