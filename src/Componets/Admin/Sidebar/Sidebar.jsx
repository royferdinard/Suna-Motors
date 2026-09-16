import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CarFront,
  Users,
  MessageSquare,
  CalendarDays,
  BarChart3,
  Settings,
  LogOut,
  X,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Vehicles",
    path: "/admin/vehicles",
    icon: CarFront,
  },
  {
    name: "Customers",
    path: "/admin/customers",
    icon: Users,
  },
  {
    name: "Enquiries",
    path: "/admin/enquiries",
    icon: MessageSquare,
  },
  {
    name: "Appointments",
    path: "/admin/appointments",
    icon: CalendarDays,
  },
  {
    name: "Analytics",
    path: "/admin/analytics",
    icon: BarChart3,
  },
];

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-gray-200 bg-white transition-transform duration-300 dark:border-white/10 dark:bg-gray-950 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-gray-200 px-6 dark:border-white/10">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Suna<span className="text-orange-600">Motors</span>
            </h1>

            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
              Admin Dashboard
            </p>
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/10 dark:hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-orange-600 text-white shadow-sm shadow-orange-600/20"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                    }`
                  }
                >
                  <Icon size={19} strokeWidth={2} />

                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 p-4 dark:border-white/10">
          <NavLink
            to="/admin/settings"
            onClick={onClose}
            className={({ isActive }) =>
              `mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-gray-100 text-gray-900 dark:bg-white/10 dark:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
              }`
            }
          >
            <Settings size={19} />
            <span>Settings</span>
          </NavLink>

          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-600 transition hover:bg-red-50 hover:text-red-600 dark:text-gray-400 dark:hover:bg-red-500/10 dark:hover:text-red-400">
            <LogOut size={19} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
