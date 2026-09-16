import React from "react";
import { Menu, Search, Bell, Sun, Moon, ChevronDown } from "lucide-react";

const Topbar = ({ onMenuClick, isDark, onToggleTheme }) => {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white/95 px-4 backdrop-blur-md transition-colors duration-300 dark:border-white/10 dark:bg-gray-950/95 sm:px-6 lg:px-8">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}
        <button
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
          className="rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 md:hidden dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Search"
        >
          <Search size={20} />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notifications */}
        <button
          className="relative rounded-xl p-2.5 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label="Notifications"
        >
          <Bell size={20} />

          {/* Notification Badge */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-orange-600 ring-2 ring-white dark:ring-gray-950" />
        </button>

        {/* Divider */}
        <div className="mx-1 hidden h-8 w-px bg-gray-200 sm:block dark:bg-white/10" />

        {/* Admin Profile */}
        <button className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-gray-100 dark:hover:bg-white/5">
          {/* Avatar */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 text-sm font-semibold text-white">
            A
          </div>

          {/* Name */}
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
