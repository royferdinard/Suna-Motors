import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Settings,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

import logo from "../../assets/Logos/logo.png";

const Header = () => {
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [mobileMenu, setMobileMenu] = useState(false);

  const navs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "Categories", path: "/categories" },
    { name: "Makes", path: "/makes" },
    { name: "Models", path: "/models" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Help", path: "/help" },
  ];

  // Dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="fixed top-0 z-50 w-full  border-b border-gray-200 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/95 font-semibold">

      <div className="mx-auto flex h-18 max-w-[1600px] items-center justify-between px-6 lg:px-10">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex shrink-0 items-center h-16 w-25 rounded-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 overflow-hidden" 
        >
          <img
            src={logo}
            alt="Suna Motors"
            className="h-full w-full object-cover"
          />
        </Link>


        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-1 xl:flex">

          {navs.map((nav) => {
            const active = location.pathname === nav.path;

            return (
              <Link
                key={nav.name}
                to={nav.path}
                className={`
                  relative px-3 py-2 text-sm font-medium
                  transition-all duration-300
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:origin-left after:scale-x-0 after:bg-orange-600 after:opacity-0 after:transition-all after:duration-300 hover:after:w-full hover:after:scale-x-100 hover:after:opacity-100
                  ${
                    active
                      ? "text-orange-600 after:w-full after:scale-x-100 after:opacity-100 dark:text-orange-400"
                      : "text-gray-700 hover:text-orange-700 dark:text-gray-300 dark:hover:text-orange-400"
                  }
                `}
              >
                {nav.name}
              </Link>
            );
          })}

        </nav>


        {/* ================= RIGHT ACTIONS ================= */}
        <div className="hidden items-center gap-2 xl:flex">

          {/* Settings */}
          <button
            type="button"
            title="Settings"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              text-gray-600
              transition-all duration-300
              hover:bg-gray-100
              hover:text-orange-700
              dark:text-gray-300
              dark:hover:bg-gray-800
              dark:hover:text-orange-400
            "
          >
            <Settings size={19} />
          </button>


          {/* Dark Mode */}
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? "Light mode" : "Dark mode"}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              text-gray-600
              transition-all duration-300
              hover:bg-gray-100
              hover:text-orange-700
              dark:text-gray-300
              dark:hover:bg-gray-800
              dark:hover:text-orange-400
            "
          >
            {darkMode ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>


          {/* Login */}
          <Link
            to="/login"
            className="
              ml-2 rounded-xl
              border border-orange-600
              px-5 py-2
              text-sm font-semibold
              text-orange-600
              transition-all duration-300
              hover:bg-orange-600
              hover:text-white
              dark:border-orange-500
              dark:text-orange-500
              dark:hover:bg-orange-500
              dark:hover:text-gray-950
              shadow-sm
              hover:shadow-md
            "
          >
            Login
          </Link>


          {/* Sell Vehicle */}
          <Link
            to="/sell"
            className="
              rounded-xl
              bg-orange-600
              px-5 py-2
              text-sm font-semibold
              text-white
              shadow-sm
              transition-all duration-300
              hover:bg-orange-700
              hover:shadow-md
              dark:bg-orange-500
              dark:hover:bg-orange-600
              shadow-sm
              hover:shadow-md
            "
          >
            Sell Vehicle
          </Link>

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-lg
            text-gray-700
            hover:bg-gray-100
            dark:text-gray-300
            dark:hover:bg-gray-800
            xl:hidden
          "
        >
          {mobileMenu ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* ================= MOBILE NAV ================= */}
      {mobileMenu && (
        <div
          className="
            border-t border-gray-200
            bg-white
            px-6 py-5
            shadow-lg
            dark:border-gray-800
            dark:bg-gray-950
            xl:hidden
          "
        >

          <nav className="flex flex-col gap-1">

            {navs.map((nav) => {
              const active = location.pathname === nav.path;

              return (
                <Link
                  key={nav.name}
                  to={nav.path}
                  onClick={() => setMobileMenu(false)}
                  className={`
                    rounded-lg px-4 py-3
                    text-sm font-medium
                    transition-all duration-200
                    ${
                      active
                        ? "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-400"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  {nav.name}
                </Link>
              );
            })}

          </nav>


          {/* Mobile actions */}
          <div className="mt-4 flex items-center gap-2 border-t border-gray-200 pt-4 dark:border-gray-800">

            {/* Settings */}
            <button
              type="button"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-lg
                text-gray-600
                hover:bg-gray-100
                dark:text-gray-300
                dark:hover:bg-gray-800
              "
            >
              <Settings size={19} />
            </button>


            {/* Theme */}
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-lg
                text-gray-600
                hover:bg-gray-100
                dark:text-gray-300
                dark:hover:bg-gray-800
              "
            >
              {darkMode ? (
                <Sun size={19} />
              ) : (
                <Moon size={19} />
              )}
            </button>


            <Link
              to="/login"
              onClick={() => setMobileMenu(false)}
              className="
                ml-auto rounded-lg
                border border-orange-600
                px-4 py-2
                text-sm font-semibold
                text-orange-600
                dark:border-orange-500
                dark:text-orange-500
              "
            >
              Login
            </Link>

            <Link
              to="/sell"
              onClick={() => setMobileMenu(false)}
              className="
                rounded-lg
                bg-orange-600
                px-4 py-2
                text-sm font-semibold
                text-white
              "
            >
              Sell Vehicle
            </Link>

          </div>

        </div>
      )}

    </header>
  );
};

export default Header;