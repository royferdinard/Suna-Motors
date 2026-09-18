import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  RotateCcw,
  ChevronDown,
  CarFront,
  Truck,
  Bus,
  Crown,
  ArrowRight,
} from "lucide-react";

// =====================================================
// CATEGORY IMAGES
// =====================================================

import suv from "../../assets/Images/categories/suv.png";
import sedan from "../../assets/Images/categories/sedan.jpg";
import hatchback from "../../assets/Images/categories/hatchback.jpg";
import pickup from "../../assets/Images/categories/pickup.webp";
import van from "../../assets/Images/categories/van.jpeg";
import luxury from "../../assets/Images/categories/luxury.jpg";


// =====================================================
// VEHICLE CATEGORIES
// =====================================================

const categories = [
  {
    name: "SUVs",
    description: "Versatile, spacious and ready for every journey.",
    vehicles: 12,
    image: suv,
    icon: CarFront,
  },

  {
    name: "Sedans",
    description: "Comfortable, refined and perfect for everyday driving.",
    vehicles: 8,
    image: sedan,
    icon: CarFront,
  },

  {
    name: "Hatchbacks",
    description: "Compact, practical and efficient for city driving.",
    vehicles: 7,
    image: hatchback,
    icon: CarFront,
  },

  {
    name: "Pickups",
    description: "Powerful, practical and built for demanding work.",
    vehicles: 6,
    image: pickup,
    icon: Truck,
  },

  {
    name: "Vans",
    description: "Spacious transportation for families and businesses.",
    vehicles: 4,
    image: van,
    icon: Bus,
  },

  {
    name: "Luxury",
    description: "Premium vehicles offering comfort, style and performance.",
    vehicles: 5,
    image: luxury,
    icon: Crown,
  },
];


// =====================================================
// COMPONENT
// =====================================================

const VehicleCategories = () => {

  // ===================================================
  // STATES
  // ===================================================

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("default");

  const [showFilters, setShowFilters] =
    useState(false);


  // ===================================================
  // FILTER + SEARCH + SORT
  // ===================================================

  const filteredCategories = useMemo(() => {

    let result = [...categories];


    // -------------------------------------------------
    // SEARCH
    // -------------------------------------------------

    if (search.trim() !== "") {

      const searchValue =
        search.toLowerCase().trim();

      result = result.filter((category) =>
        category.name
          .toLowerCase()
          .includes(searchValue)
      );
    }


    // -------------------------------------------------
    // CATEGORY FILTER
    // -------------------------------------------------

    if (selectedCategory !== "All") {

      result = result.filter(
        (category) =>
          category.name === selectedCategory
      );
    }


    // -------------------------------------------------
    // SORT
    // -------------------------------------------------

    if (sortBy === "vehicles-high") {

      result.sort(
        (a, b) =>
          b.vehicles - a.vehicles
      );
    }


    if (sortBy === "vehicles-low") {

      result.sort(
        (a, b) =>
          a.vehicles - b.vehicles
      );
    }


    if (sortBy === "name-az") {

      result.sort(
        (a, b) =>
          a.name.localeCompare(b.name)
      );
    }


    if (sortBy === "name-za") {

      result.sort(
        (a, b) =>
          b.name.localeCompare(a.name)
      );
    }


    return result;

  }, [
    search,
    selectedCategory,
    sortBy,
  ]);


  // ===================================================
  // RESET FILTERS
  // ===================================================

  const resetFilters = () => {

    setSearch("");

    setSelectedCategory("All");

    setSortBy("default");

  };


  // ===================================================
  // COMPONENT
  // ===================================================

  return (

    <section
      className="
        relative
        overflow-hidden
        bg-gray-50
        px-4
        py-12
        sm:px-6
        lg:px-10
        xl:px-16
      "
    >

      {/* =================================================
          BACKGROUND DECORATION
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-orange-500/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-72
          w-72
          rounded-full
          bg-orange-500/5
          blur-3xl
        "
      />


      {/* =================================================
          MAIN CONTAINER
      ================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >


        {/* =================================================
            DASHBOARD TOOLBAR
        ================================================== */}

        <div
          className="
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-4
            shadow-sm
          "
        >


          {/* =================================================
              MODERN HEADER
          ================================================== */}

          <div
            className="
              mb-5
              flex
              flex-col
              gap-5
              border-b
              border-gray-100
              pb-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >


            {/* LEFT SIDE */}

            <div
              className="
                max-w-xl
              "
            >

              {/* Eyebrow */}

              <div
                className="
                  mb-2
                  flex
                  items-center
                  gap-2
                "
              >

                <span
                  className="
                    h-[2px]
                    w-5
                    bg-orange-500
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-orange-600
                  "
                >
                  Vehicle Range
                </span>

              </div>


              {/* Heading */}

              <h2
                className="
                  text-2xl
                  font-black
                  tracking-tight
                  text-gray-900
                  sm:text-3xl
                "
              >
                Explore Vehicle
                <span
                  className="
                    ml-2
                    text-orange-500
                  "
                >
                  Categories.
                </span>
              </h2>


              {/* Description */}

              <p
                className="
                  mt-2
                  max-w-lg
                  text-xs
                  leading-6
                  text-gray-500
                  sm:text-sm
                "
              >
                Discover the different types of
                vehicles available at Suna Motors.
              </p>

            </div>


            {/* =================================================
                SEARCH + FILTERS
            ================================================== */}

            <div
              className="
                flex
                w-full
                flex-col
                gap-2
                sm:flex-row
                lg:w-auto
              "
            >


              {/* SEARCH */}

              <div
                className="
                  relative
                  w-full
                  sm:w-64
                "
              >

                <Search
                  size={15}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search categories..."
                  className="
                    h-10
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    pl-9
                    pr-3
                    text-xs
                    font-medium
                    text-gray-800
                    outline-none
                    transition-all
                    placeholder:text-gray-400
                    focus:border-orange-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-orange-500/10
                  "
                />

              </div>


              {/* CATEGORY FILTER */}

              <div
                className="
                  relative
                  min-w-[175px]
                "
              >

                <SlidersHorizontal
                  size={14}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <select
                  value={selectedCategory}
                  onChange={(e) =>
                    setSelectedCategory(
                      e.target.value
                    )
                  }
                  className="
                    h-10
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    pl-9
                    pr-9
                    text-xs
                    font-semibold
                    text-gray-700
                    outline-none
                    transition-all
                    focus:border-orange-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-orange-500/10
                  "
                >

                  <option value="All">
                    All Categories
                  </option>

                  {categories.map((category) => (

                    <option
                      key={category.name}
                      value={category.name}
                    >
                      {category.name}
                    </option>

                  ))}

                </select>


                <ChevronDown
                  size={14}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

              </div>


              {/* SORT */}

              <div
                className="
                  relative
                  min-w-[175px]
                "
              >

                <ArrowUpDown
                  size={14}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value)
                  }
                  className="
                    h-10
                    w-full
                    appearance-none
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    pl-9
                    pr-9
                    text-xs
                    font-semibold
                    text-gray-700
                    outline-none
                    transition-all
                    focus:border-orange-500
                    focus:bg-white
                    focus:ring-4
                    focus:ring-orange-500/10
                  "
                >

                  <option value="default">
                    Sort By
                  </option>

                  <option value="vehicles-high">
                    Most Vehicles
                  </option>

                  <option value="vehicles-low">
                    Least Vehicles
                  </option>

                  <option value="name-az">
                    Name A-Z
                  </option>

                  <option value="name-za">
                    Name Z-A
                  </option>

                </select>


                <ChevronDown
                  size={14}
                  className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

              </div>


              {/* RESET */}

              <button
                type="button"
                onClick={resetFilters}
                className="
                  group
                  flex
                  h-10
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  text-xs
                  font-bold
                  text-gray-600
                  transition-all
                  duration-300
                  hover:border-orange-200
                  hover:bg-orange-50
                  hover:text-orange-600
                "
              >

                <RotateCcw
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-180
                  "
                />

                Reset

              </button>

            </div>

          </div>


          {/* =================================================
              MOBILE FILTER BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() =>
              setShowFilters(!showFilters)
            }
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gray-900
              px-4
              py-2.5
              text-[11px]
              font-bold
              text-white
              transition
              hover:bg-orange-500
              lg:hidden
            "
          >

            <SlidersHorizontal size={14} />

            {showFilters
              ? "Hide Filters"
              : "More Filters"}

          </button>


          {/* =================================================
              ACTIVE FILTERS
          ================================================== */}

          {(search ||
            selectedCategory !== "All" ||
            sortBy !== "default") && (

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-2
                border-t
                border-gray-100
                pt-4
              "
            >

              <span
                className="
                  mr-1
                  text-[10px]
                  font-semibold
                  text-gray-400
                "
              >
                Active:
              </span>


              {/* SEARCH FILTER */}

              {search && (

                <span
                  className="
                    rounded-full
                    bg-orange-50
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    text-orange-600
                  "
                >
                  Search: {search}
                </span>

              )}


              {/* CATEGORY FILTER */}

              {selectedCategory !== "All" && (

                <span
                  className="
                    rounded-full
                    bg-orange-50
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    text-orange-600
                  "
                >
                  {selectedCategory}
                </span>

              )}


              {/* SORT FILTER */}

              {sortBy !== "default" && (

                <span
                  className="
                    rounded-full
                    bg-orange-50
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    text-orange-600
                  "
                >
                  Sorted
                </span>

              )}

            </div>

          )}

        </div>


        {/* =================================================
            RESULTS BAR
        ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-3
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>

            <p
              className="
                text-xs
                font-bold
                text-gray-900
              "
            >
              {filteredCategories.length}{" "}
              {filteredCategories.length === 1
                ? "Category"
                : "Categories"}
            </p>

            <p
              className="
                mt-0.5
                text-[10px]
                text-gray-400
              "
            >
              Explore available vehicle categories
            </p>

          </div>


          <div
            className="
              flex
              items-center
              gap-2
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-green-500
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                text-gray-500
              "
            >
              Updated selection
            </span>

          </div>

        </div>


        {/* =================================================
            VEHICLE CATEGORY BUTTONS
        ================================================== */}

        {filteredCategories.length > 0 ? (

          <div
            className="
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {filteredCategories.map((category) => {

              const Icon = category.icon;

              return (

                <button
                  key={category.name}
                  type="button"
                  className="
                    group
                    relative
                    flex
                    min-h-[82px]
                    w-full
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-3
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-orange-300
                    hover:bg-orange-50/30
                    hover:shadow-lg
                    hover:shadow-orange-100/50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-500/20
                  "
                >

                  {/* =========================================
                      CATEGORY IMAGE
                  ========================================== */}

                  <div
                    className="
                      relative
                      h-16
                      w-20
                      shrink-0
                      overflow-hidden
                      rounded-xl
                      bg-gray-100
                      sm:h-[68px]
                      sm:w-24
                    "
                  >

                    <img
                      src={category.image}
                      alt={`${category.name} category`}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/10
                        transition
                        group-hover:bg-orange-500/10
                      "
                    />

                  </div>


                  {/* =========================================
                      CATEGORY ICON
                  ========================================== */}

                  <div
                    className="
                      absolute
                      left-[68px]
                      top-1/2
                      flex
                      h-7
                      w-7
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-white
                      bg-white
                      text-orange-500
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:bg-orange-500
                      group-hover:text-white
                      sm:left-[84px]
                    "
                  >

                    <Icon
                      size={13}
                      strokeWidth={2.3}
                    />

                  </div>


                  {/* =========================================
                      CATEGORY CONTENT
                  ========================================== */}

                  <div
                    className="
                      min-w-0
                      flex-1
                    "
                  >

                    <h3
                      className="
                        truncate
                        text-sm
                        font-extrabold
                        text-gray-900
                        transition-colors
                        duration-300
                        group-hover:text-orange-600
                      "
                    >
                      {category.name}
                    </h3>


                    <p
                      className="
                        mt-1
                        truncate
                        text-[10px]
                        font-medium
                        text-gray-400
                      "
                    >
                      {category.description}
                    </p>


                    <div
                      className="
                        mt-1.5
                        flex
                        items-center
                        gap-1.5
                      "
                    >

                      <CarFront
                        size={11}
                        className="text-orange-500"
                      />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          text-gray-500
                        "
                      >
                        {category.vehicles} vehicles
                      </span>

                    </div>

                  </div>


                  {/* =========================================
                      ARROW
                  ========================================== */}

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gray-200
                      text-gray-400
                      transition-all
                      duration-300
                      group-hover:border-orange-500
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >

                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    />

                  </span>


                  {/* =========================================
                      BOTTOM ORANGE LINE
                  ========================================== */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-orange-500
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />

                </button>

              );

            })}

          </div>

        ) : (

          /* =================================================
              EMPTY STATE
          ================================================== */

          <div
            className="
              flex
              min-h-[260px]
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
              border-gray-300
              bg-white
              px-6
              text-center
            "
          >

            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-gray-100
                text-gray-400
              "
            >
              <Search size={22} />
            </div>


            <h3
              className="
                mt-4
                text-base
                font-black
                text-gray-900
              "
            >
              No categories found
            </h3>


            <p
              className="
                mt-1
                max-w-sm
                text-xs
                leading-5
                text-gray-500
              "
            >
              We couldn't find a vehicle category
              matching your search.
            </p>


            <button
              type="button"
              onClick={resetFilters}
              className="
                mt-4
                flex
                items-center
                gap-2
                rounded-xl
                bg-gray-900
                px-4
                py-2.5
                text-[11px]
                font-bold
                text-white
                transition-all
                hover:bg-orange-500
              "
            >

              <RotateCcw size={13} />

              Reset Filters

            </button>

          </div>

        )}


      </div>

    </section>
  );
};

export default VehicleCategories;