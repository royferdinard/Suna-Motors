import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import ModelsHero from "../../Componets/Models/ModelsHero";
import CategoryTabs from "../../Componets/Models/CategoryTabs";
import ModelSearchFilter from "../../Componets/Models/ModelSearchFilter";
import ModelGrid from "../../Componets/Models/ModelGrid";

import vehicles from "../../Data/vehicles";
import Header from "../../Componets/Header/header";
import Footer from "../../Componets/footer";
import Cta from "../../Componets/cta";

const Models = () => {
  const [activeCategory, setActiveCategory] = useState("All Vehicles");

  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [compareVehicles, setCompareVehicles] = useState([]);

  const handleCompareChange = (vehicle) => {
    setCompareVehicles((prev) => {
      const alreadySelected = prev.some((item) => item.id === vehicle.id);

      if (alreadySelected) {
        return prev.filter((item) => item.id !== vehicle.id);
      }

      if (prev.length >= 3) {
        return prev;
      }

      return [...prev, vehicle];
    });
  };

  const [selectedFilters, setSelectedFilters] = useState({
    Brand: "",
    Price: "",
    Year: "",
    Fuel: "",
    Transmission: "",
  });

  const handleFilterChange = (label, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [label]: value,
    }));
  };

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All Vehicles");

    setSelectedFilters({
      Brand: "",
      Price: "",
      Year: "",
      Fuel: "",
      Transmission: "",
    });
  };

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      // Category
      const matchesCategory =
        activeCategory === "All Vehicles" ||
        vehicle.category === activeCategory;

      // Search
      const searchTerm = search.toLowerCase().trim();

      const matchesSearch =
        !searchTerm ||
        vehicle.name?.toLowerCase().includes(searchTerm) ||
        vehicle.brand?.toLowerCase().includes(searchTerm) ||
        vehicle.category?.toLowerCase().includes(searchTerm);

      // Brand
      const matchesBrand =
        !selectedFilters.Brand ||
        selectedFilters.Brand === "All Brands" ||
        vehicle.brand === selectedFilters.Brand;

      // Price
      let matchesPrice = true;

      if (selectedFilters.Price === "Under KSh 2M") {
        matchesPrice = vehicle.price < 2000000;
      }

      if (selectedFilters.Price === "KSh 2M - 5M") {
        matchesPrice = vehicle.price >= 2000000 && vehicle.price <= 5000000;
      }

      if (selectedFilters.Price === "KSh 5M - 10M") {
        matchesPrice = vehicle.price > 5000000 && vehicle.price <= 10000000;
      }

      if (selectedFilters.Price === "Above KSh 10M") {
        matchesPrice = vehicle.price > 10000000;
      }

      // Year
      const matchesYear =
        !selectedFilters.Year ||
        selectedFilters.Year === "Any Year" ||
        vehicle.year === Number(selectedFilters.Year);

      // Fuel
      const matchesFuel =
        !selectedFilters.Fuel ||
        selectedFilters.Fuel === "Any Fuel" ||
        vehicle.fuel === selectedFilters.Fuel;

      // Transmission
      const matchesTransmission =
        !selectedFilters.Transmission ||
        selectedFilters.Transmission === "Any Transmission" ||
        vehicle.transmission === selectedFilters.Transmission;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesBrand &&
        matchesPrice &&
        matchesYear &&
        matchesFuel &&
        matchesTransmission
      );
    });
  }, [activeCategory, search, selectedFilters]);

  return (
    <main>
      <Header />
      <ModelsHero />

      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <ModelSearchFilter
        search={search}
        onSearchChange={setSearch}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onReset={resetFilters}
      />

      <ModelGrid
        vehicles={filteredVehicles}
        compareVehicles={compareVehicles}
        onCompareChange={handleCompareChange}
      />

      {compareVehicles.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5">
          <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-gray-900 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Selected vehicles */}
              <div className="min-w-0">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                    {compareVehicles.length}
                  </span>

                  <div className="min-w-0">
                    <p className="text-sm font-bold text-gray-950 dark:text-white">
                      {compareVehicles.length}{" "}
                      {compareVehicles.length === 1 ? "Vehicle" : "Vehicles"}{" "}
                      Selected
                    </p>

                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {compareVehicles.map((vehicle) => (
                        <span
                          key={vehicle.id}
                          className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300"
                        >
                          {vehicle.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex w-full gap-2 sm:w-auto">
                <button
                  type="button"
                  onClick={() => setCompareVehicles([])}
                  className="flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white sm:flex-none"
                >
                  Clear
                </button>

                <button
                  type="button"
                  disabled={compareVehicles.length < 2}
                  onClick={() => {
                    const ids = compareVehicles
                      .map((vehicle) => vehicle.id)
                      .join(",");

                    navigate(`/compare?vehicles=${ids}`);
                  }}
                  className="flex-1 rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-40 sm:flex-none"
                >
                  Compare Selected
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Cta />
      <Footer />
    </main>
  );
};

export default Models;
