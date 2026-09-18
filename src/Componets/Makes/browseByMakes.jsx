import React, { useMemo, useState } from "react";

import {
  Search,
  CarFront,
  ArrowUpRight,
  SlidersHorizontal,
  X,
  ChevronDown,
  Car,
  Truck,
  Bus,
  Crown,
  RotateCcw,
} from "lucide-react";

import Makes from "./makesStore";

const categories = [
  {
    name: "All",
    icon: CarFront,
  },
  {
    name: "SUV",
    icon: Car,
  },
  {
    name: "Sedan",
    icon: CarFront,
  },
  {
    name: "Hatchback",
    icon: Car,
  },
  {
    name: "Pickup",
    icon: Truck,
  },
  {
    name: "Van",
    icon: Bus,
  },
  {
    name: "Wagon",
    icon: CarFront,
  },
  {
    name: "Luxury",
    icon: Crown,
  },
];

const BrowseMakes = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [showFilters, setShowFilters] = useState(false);

  const filteredMakes = useMemo(() => {
    let results = Makes.filter((make) => {
      const matchesSearch = make.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || make.categories.includes(category);

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "name") {
      results.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "vehicles-high") {
      results.sort((a, b) => b.vehicles - a.vehicles);
    }

    if (sortBy === "vehicles-low") {
      results.sort((a, b) => a.vehicles - b.vehicles);
    }

    return results;
  }, [search, category, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSortBy("name");
  };

  const hasFilters = search !== "" || category !== "All" || sortBy !== "name";

  return (
    <section
      id="makes-directory"
      className="relative w-full overflow-x-hidden bg-gray-100 py-12 sm:py-16 lg:py-20"
    >
      <div
        className="
          pointer-events-none
          absolute
          right-[-150px]
          top-10
          h-96
          w-96
          rounded-full
          bg-orange-500/5
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[-150px]
          h-96
          w-96
          rounded-full
          bg-orange-500/5
          blur-[100px]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          px-5
          sm:px-8
          md:px:10
          lg:px-12
          xl:px-16
        "
      >
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500">
            Browse the collection
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Find a make that feels like you.
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
            Filter by vehicle type or search directly for a manufacturer. Each
            make gives you a different way into the Suna Motors collection.
          </p>
        </div>

        {/* ===================================================
            SEARCH + FILTER BAR
        =================================================== */}

        <div className="flex flex-col gap-3 lg:flex-row w-full">
          {/* =================================================
              SEARCH
          ================================================= */}

          <div
            className="
              group
              flex
              md:h-14
              h-14
              flex
              shrink-0
              items-center
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              shadow-sm
              transition-all
              md:w-3/4 w-full

              focus-within:border-orange-300
              focus-within:shadow-md
            "
          >
            <Search
              size={20}
              strokeWidth={2}
              className="
                shrink-0
                text-gray-400
                transition-colors
                group-focus-within:text-orange-500
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search vehicle make..."
              className="
                h-full
                w-full
                bg-transparent
                px-3
                text-sm
                font-medium
                text-gray-900
                outline-none
                placeholder:text-gray-400
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-100
                  text-gray-500
                  transition-all

                  hover:bg-orange-500
                  hover:text-white
                "
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* =================================================
              MOBILE FILTER BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="
              flex
              h-14
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-5
              text-sm
              font-bold
              text-gray-700
              shadow-sm
              transition-all

              hover:border-orange-300
              hover:text-orange-500

              lg:hidden
            "
          >
            <SlidersHorizontal size={18} />

            <span>Filters</span>

            <ChevronDown
              size={16}
              className={`
                transition-transform
                duration-300

                ${showFilters ? "rotate-180" : ""}
              `}
            />
          </button>

          {/* =================================================
              DESKTOP SORT
          ================================================= */}

          <div
            className="
              hidden
              h-14
              items-center
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              shadow-sm
              md:w-1/4 w-full
              lg:flex
            "
          >
            <SlidersHorizontal size={17} className="mr-2 text-gray-400" />

            <span
              className="
                mr-3
                text-xs
                font-bold
                uppercase
                tracking-wider
                text-gray-400
              "
            >
              Sort
            </span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="
                cursor-pointer
                bg-transparent
                text-sm
                font-semibold
                text-gray-800
                outline-none
                w-full
                h-full
              "
            >
              <option value="name">Alphabetical</option>

              <option value="vehicles-high">Most Vehicles</option>

              <option value="vehicles-low">Fewest Vehicles</option>
            </select>
          </div>
        </div>

        {/* ===================================================
            MOBILE FILTER PANEL
        =================================================== */}

        {showFilters && (
          <div
            className="
              mt-3
              rounded-xl
              border
              border-gray-200
              bg-white
              p-4
              shadow-sm

              lg:hidden
            "
          >
            <div className="mb-3 flex items-center gap-2">
              <SlidersHorizontal size={15} className="text-orange-500" />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-gray-400
                "
              >
                Sort By
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSortBy("name")}
                className={`
                  rounded-lg
                  px-3
                  py-2.5
                  text-xs
                  font-bold
                  transition

                  ${
                    sortBy === "name"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-50 text-gray-600"
                  }
                `}
              >
                A-Z
              </button>

              <button
                type="button"
                onClick={() => setSortBy("vehicles-high")}
                className={`
                  rounded-lg
                  px-3
                  py-2.5
                  text-xs
                  font-bold
                  transition

                  ${
                    sortBy === "vehicles-high"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-50 text-gray-600"
                  }
                `}
              >
                Most
              </button>

              <button
                type="button"
                onClick={() => setSortBy("vehicles-low")}
                className={`
                  rounded-lg
                  px-3
                  py-2.5
                  text-xs
                  font-bold
                  transition

                  ${
                    sortBy === "vehicles-low"
                      ? "bg-orange-500 text-white"
                      : "bg-gray-50 text-gray-600"
                  }
                `}
              >
                Fewest
              </button>
            </div>
          </div>
        )}

        {/* ===================================================
            CATEGORY FILTERS
        =================================================== */}

        <div className="mt-5 overflow-x-auto pb-2">
          <div className="flex min-w-max items-center gap-2">
            {categories.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setCategory(item.name)}
                  className={`
                    group
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-4
                    py-2.5
                    text-xs
                    font-bold
                    transition-all
                    duration-200

                    ${
                      category === item.name
                        ? "border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/20"
                        : "border-gray-200 bg-white text-gray-500 hover:border-orange-300 hover:text-orange-500"
                    }
                  `}
                >
                  <Icon size={14} strokeWidth={2.2} />

                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            RESULTS INFO
        =================================================== */}

        <div
          className="
            mt-8
            flex
            flex
            justify-between
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-2">
            <CarFront size={17} className="text-orange-500" />

            <p className="text-sm font-bold text-gray-900">
              {filteredMakes.length}{" "}
              {filteredMakes.length === 1 ? "make" : "makes"} found
            </p>
          </div>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="
                flex
                w-fit
                items-center
                gap-2
                text-xs
                font-bold
                text-orange-500
                transition
                group
                hover:text-orange-600
              "
            >
              <RotateCcw
                size={13}
                className="
                transition-transform
                duration-300
                group-hover:rotate-180"
              />
              Reset filters
            </button>
          )}
        </div>

        {filteredMakes.length > 0 ? (
          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2

              lg:grid-cols-3

              xl:grid-cols-4
              overflow-x-hidden
              md:py-2 md:px-2
            "
          >
            {filteredMakes.map((make) => {
              const MakeIcon = make.icon;

              return (
                <button
                  key={make.name}
                  type="button"
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-5
                    text-left
                    shadow-sm
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-orange-200
                    hover:shadow-xl
                    hover:shadow-orange-500/10
                  "
                >
                  {/* =================================================
                      BACKGROUND DECORATION
                  ================================================= */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-10
                      -top-10
                      h-28
                      w-28
                      rounded-full
                      bg-orange-500/5
                      transition-transform
                      duration-500

                      group-hover:scale-[2]
                    "
                  />

                  {/* =================================================
                      TOP
                  ================================================= */}

                  <div
                    className="
                      relative
                      flex
                      items-start
                      justify-between
                    "
                  >
                    {/* MAKE LOGO */}

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-gray-100
                        bg-white
                        p-2
                        shadow-sm
                        transition-all
                        duration-300

                        group-hover:border-orange-100
                        group-hover:shadow-md
                      "
                    >
                      <img
                        src={make.image}
                        alt={`${make.name} logo`}
                        className="
                          h-full
                          w-full
                          object-contain
                          transition-transform
                          duration-300

                          group-hover:scale-110
                        "
                      />
                    </div>

                    {/* ARROW */}

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-50
                        text-gray-400
                        transition-all
                        duration-300

                        group-hover:bg-orange-500
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight size={15} />
                    </div>
                  </div>

                  {/* =================================================
                      MAKE NAME
                  ================================================= */}

                  <h3
                    className="
                      relative
                      mt-6
                      text-lg
                      font-black
                      tracking-tight
                      text-gray-950
                    "
                  >
                    {make.name}
                  </h3>

                  {/* =================================================
                      CATEGORIES
                  ================================================= */}

                  <div
                    className="
                      relative
                      mt-3
                      flex
                      flex-wrap
                      gap-1.5
                    "
                  >
                    {make.categories.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="
                            rounded-md
                            bg-gray-50
                            px-2
                            py-1
                            text-[10px]
                            font-semibold
                            text-gray-400
                          "
                      >
                        {item}
                      </span>
                    ))}

                    {make.categories.length > 3 && (
                      <span
                        className="
                          rounded-md
                          bg-orange-50
                          px-2
                          py-1
                          text-[10px]
                          font-semibold
                          text-orange-500
                        "
                      >
                        +{make.categories.length - 3}
                      </span>
                    )}
                  </div>

                  {/* =================================================
                      VEHICLE COUNT
                  ================================================= */}

                  <div
                    className="
                      relative
                      mt-5
                      flex
                      items-center
                      justify-between
                      border-t
                      border-gray-100
                      pt-4
                    "
                  >
                    <span
                      className="
                        flex
                        items-center
                        gap-1.5
                        text-xs
                        font-medium
                        text-gray-400
                      "
                    >
                      <MakeIcon size={13} />
                      Available vehicles
                    </span>

                    <span
                      className="
                        text-sm
                        font-black
                        text-gray-900
                      "
                    >
                      {make.vehicles}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          /* =================================================
              EMPTY STATE
          ================================================= */

          <div
            className="
              mt-5
              rounded-2xl
              border
              border-dashed
              border-gray-200
              bg-white
              px-6
              py-20
              text-center
            "
          >
            <div
              className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-orange-50
                text-orange-500
              "
            >
              <Search size={24} />
            </div>

            <h3
              className="
                mt-5
                text-lg
                font-black
                text-gray-900
              "
            >
              No makes found
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-md
                text-sm
                leading-6
                text-gray-400
              "
            >
              We couldn't find a manufacturer matching your search or selected
              category.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-orange-500
                px-5
                py-2.5
                text-xs
                font-bold
                text-white
                shadow-lg
                shadow-orange-500/20
                transition

                hover:bg-orange-600
              "
            >
              <RotateCcw size={14} />
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseMakes;
