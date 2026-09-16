import React, { useMemo, useState } from "react";
import {
  Users,
  BriefcaseBusiness,
  Map,
  Building2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Search,
  SlidersHorizontal,
  RotateCcw,
} from "lucide-react";

const vehicleNeeds = [
  {
    title: "Family & Comfort",
    description: "Spacious and comfortable vehicles for family journeys.",
    categories: "SUVs • Vans",
    type: "Family",
    icon: Users,
  },
  {
    title: "City Driving",
    description: "Practical vehicles for everyday city driving.",
    categories: "Hatchbacks • Sedans",
    type: "City",
    icon: Building2,
  },
  {
    title: "Business & Transport",
    description: "Flexible vehicles for business and transportation.",
    categories: "Vans • Pickups",
    type: "Business",
    icon: BriefcaseBusiness,
  },
  {
    title: "Adventure & Travel",
    description: "Capable vehicles for travel and outdoor journeys.",
    categories: "SUVs • Pickups",
    type: "Adventure",
    icon: Map,
  },
  {
    title: "Everyday Reliability",
    description: "Dependable vehicles for everyday use.",
    categories: "Sedans • Hatchbacks",
    type: "Everyday",
    icon: ShieldCheck,
  },
  {
    title: "Premium Experience",
    description: "Premium vehicles focused on comfort and style.",
    categories: "Luxury • SUVs",
    type: "Premium",
    icon: Sparkles,
  },
];

const VehicleNeeds = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredNeeds = useMemo(() => {
    let result = [...vehicleNeeds];

    if (search.trim()) {
      result = result.filter(
        (need) =>
          need.title.toLowerCase().includes(search.toLowerCase()) ||
          need.categories.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter !== "All") {
      result = result.filter((need) => need.type === filter);
    }

    return result;
  }, [search, filter]);

  const resetFilters = () => {
    setSearch("");
    setFilter("All");
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        px-4
        py-16
        sm:px-6
        lg:px-10
        xl:px-16
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

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

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            MODERN HEADER
        ====================================================== */}

        <div
          className="
            mb-7
            flex
            flex-col
            gap-6
            border-b
            border-gray-100
            pb-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          {/* LEFT SIDE */}

          <div className="max-w-xl">

            <div className="mb-2 flex items-center gap-2">

              <span className="h-[2px] w-5 bg-orange-500" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-orange-600
                "
              >
                Find Your Fit
              </span>

            </div>

            <h2
              className="
                text-2xl
                font-black
                tracking-tight
                text-gray-900
                sm:text-3xl
              "
            >
              Different Vehicles.
              <span className="ml-2 text-orange-500">
                Different Needs.
              </span>
            </h2>

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
              Explore vehicle options based on your lifestyle,
              journey and everyday needs.
            </p>

          </div>


          {/* =================================================
              SEARCH + FILTER
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
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search needs..."
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
                  focus:border-orange-400
                  focus:bg-white
                  focus:ring-2
                  focus:ring-orange-500/10
                "
              />

            </div>


            {/* FILTER */}

            <div className="relative">

              <SlidersHorizontal
                size={14}
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  z-10
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
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
                  focus:border-orange-400
                  focus:bg-white
                  focus:ring-2
                  focus:ring-orange-500/10
                  sm:w-40
                "
              >
                <option value="All">All Needs</option>
                <option value="Family">Family</option>
                <option value="City">City</option>
                <option value="Business">Business</option>
                <option value="Adventure">Adventure</option>
                <option value="Everyday">Everyday</option>
                <option value="Premium">Premium</option>
              </select>

            </div>


            {/* RESET */}

            {(search || filter !== "All") && (
              <button
                type="button"
                onClick={resetFilters}
                className="
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
                  px-3
                  text-[11px]
                  font-bold
                  text-gray-500
                  transition-all
                  duration-300
                  hover:border-orange-300
                  hover:bg-orange-50
                  hover:text-orange-600
                "
              >
                <RotateCcw
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    hover:rotate-180
                  "
                />

                Reset
              </button>
            )}

          </div>

        </div>


        {/* =====================================================
            RESULTS BAR
        ====================================================== */}

        <div
          className="
            mb-4
            flex
            items-center
            justify-between
          "
        >

          <p className="text-[11px] font-medium text-gray-400">
            Showing{" "}
            <span className="font-bold text-gray-700">
              {filteredNeeds.length}
            </span>{" "}
            {filteredNeeds.length === 1 ? "need" : "needs"}
          </p>

          <span
            className="
              hidden
              rounded-full
              bg-gray-50
              px-3
              py-1
              text-[9px]
              font-bold
              uppercase
              tracking-wider
              text-gray-400
              sm:block
            "
          >
            Vehicle Guidance
          </span>

        </div>


        {/* =====================================================
            NEED BUTTONS
        ====================================================== */}

        {filteredNeeds.length > 0 ? (
          <div
            className="
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {filteredNeeds.map((need) => {

              const Icon = need.icon;

              return (
                <button
                  key={need.title}
                  type="button"
                  className="
                    group
                    relative
                    flex
                    min-h-[72px]
                    w-full
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-orange-300
                    hover:bg-orange-50/30
                    hover:shadow-md
                    hover:shadow-orange-100/50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-500/20
                  "
                >

                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-gray-50
                      text-gray-500
                      transition-all
                      duration-300
                      group-hover:bg-orange-500
                      group-hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </div>


                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">

                    <h3
                      className="
                        truncate
                        text-xs
                        font-extrabold
                        text-gray-900
                        transition-colors
                        duration-300
                        group-hover:text-orange-600
                        sm:text-sm
                      "
                    >
                      {need.title}
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
                      {need.categories}
                    </p>

                  </div>


                  {/* ARROW */}

                  <span
                    className="
                      flex
                      h-7
                      w-7
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
                      size={13}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>


                  {/* HOVER ACCENT */}

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
              min-h-[160px]
              flex-col
              items-center
              justify-center
              rounded-2xl
              border
              border-dashed
              border-gray-200
              bg-gray-50
              px-6
              text-center
            "
          >

            <Search
              size={22}
              className="mb-3 text-gray-300"
            />

            <h3
              className="
                text-sm
                font-black
                text-gray-800
              "
            >
              No matching needs
            </h3>

            <p
              className="
                mt-1
                text-xs
                text-gray-400
              "
            >
              Try another search or reset your filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="
                mt-4
                flex
                items-center
                gap-2
                rounded-lg
                bg-gray-900
                px-4
                py-2
                text-[10px]
                font-bold
                text-white
                transition-colors
                hover:bg-orange-500
              "
            >
              <RotateCcw size={12} />
              Reset Filters
            </button>

          </div>

        )}


        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <div
          className="
            mt-6
            flex
            flex-col
            gap-3
            rounded-2xl
            border
            border-orange-100
            bg-orange-50/60
            px-4
            py-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <div>

            <p
              className="
                text-xs
                font-black
                text-gray-900
              "
            >
              Not sure which category suits you?
            </p>

            <p
              className="
                mt-1
                text-[11px]
                text-gray-500
              "
            >
              Explore our vehicle range or contact Suna Motors
              for guidance.
            </p>

          </div>


          <button
            type="button"
            className="
              flex
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gray-900
              px-4
              py-2.5
              text-[10px]
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-orange-500
              hover:shadow-lg
              hover:shadow-orange-500/20
            "
          >
            Explore Vehicles

            <ArrowRight size={13} />

          </button>

        </div>

      </div>
    </section>
  );
};

export default VehicleNeeds;