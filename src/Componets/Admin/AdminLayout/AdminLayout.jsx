import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  const handleToggleTheme = () => {
    setIsDark((prev) => {
      const nextTheme = !prev;

      document.documentElement.classList.toggle("dark", nextTheme);

      return nextTheme;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:ml-72">
        <Topbar
          onMenuClick={() => setSidebarOpen(true)}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
