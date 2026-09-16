import React, { useRef, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
  Car,
  Heart,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

import Models from "./modelStore";
import Filters from "./topModelFilter";

const BestModels = () => {
  const scrollRef = useRef(null);

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredModels =
    activeFilter === "All"
      ? Models
      : Models.filter((model) => model.make === activeFilter);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);

    setTimeout(() => {
      scrollRef.current?.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-12">
      {/* Background decorations */}

      <div className="pointer-events-none absolute -right-40 top-0 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-orange-50/60 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto w-full px-4 md:px-12">
        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="mb-8 flex flex-col gap-6 sm:mb-10 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          {/* LEFT */}

          <div className="max-w-3xl">
            {/* Eyebrow */}

            <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-950 text-orange-400 sm:h-9 sm:w-9 sm:rounded-xl">
                <Sparkles size={15} />
              </div>

              <span className="h-px w-5 bg-orange-500 sm:w-7" />

              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-orange-500 sm:text-[11px] sm:tracking-[0.24em]">
                Suna Motors Collection
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-xl text-[2.15rem] font-black leading-[1.05] tracking-[-0.04em] text-gray-950 md:text-4xl">
              Best{" "}
              <span className="relative text-orange-500">
                Models
                <span className="absolute -bottom-1 left-0 h-1 w-1/2 rounded-full bg-orange-500/30 sm:-bottom-2" />
              </span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-2xl text-[13px] leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7">
              Discover carefully selected vehicles from trusted automotive
              brands, combining refined design, dependable performance and
              exceptional value.
            </p>
          </div>

          {/* RIGHT */}

          <div className="flex w-full flex-row items-center justify-between gap-3 sm:w-auto sm:justify-start lg:flex-col lg:items-end">
            {/* Quality */}

            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-[10px] font-bold text-gray-500 shadow-sm sm:px-4 sm:text-xs">
              <BadgeCheck size={14} className="text-orange-500" />
              Quality vehicles
            </div>

            {/* View all */}

            <button
              type="button"
              className="group flex shrink-0 items-center gap-2 rounded-full bg-gray-950 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-gray-950/10 transition-all duration-300 hover:bg-orange-500 hover:shadow-orange-500/20 sm:gap-3 sm:px-5 sm:py-3 sm:text-sm"
            >
              <span className="whitespace-nowrap">View All Models</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 sm:h-7 sm:w-7">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </button>
          </div>
        </div>

        {/* =========================================================
            FILTER SECTION
        ========================================================== */}

        <div className="mb-9 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:mb-11 sm:rounded-3xl">
          {/* Filter Header */}

          <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-3 py-3 sm:px-5 sm:py-4">
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 sm:h-10 sm:w-10">
                <SlidersHorizontal size={17} />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-gray-400 sm:text-[10px] sm:tracking-[0.2em]">
                  Explore
                </p>

                <p className="truncate text-xs font-black text-gray-950 sm:text-sm">
                  Browse By Make
                </p>
              </div>
            </div>

            {/* Active Make */}

            <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-gray-50 px-2.5 py-1.5 text-[9px] font-bold text-gray-500 sm:px-3 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span className="font-bold">
                {activeFilter === "All"
                  ? "All brands"
                  : `${activeFilter} brands`}
              </span>
            </div>
          </div>

          {/* Filter Brands */}

          <div className="px-3 py-3 sm:px-5 sm:py-4">
            <div className="flex gap-2 overflow-x-auto py-2 pb-1 scrollbar-none sm:gap-3">
              {Filters.map((filter) => {
                const isActive = activeFilter === filter.name;
                const Icon = filter.icon;

                return (
                  <button
                    key={filter.name}
                    type="button"
                    onClick={() => handleFilterChange(filter.name)}
                    aria-label={`Show ${filter.name} vehicles`}
                    className={`group relative flex min-w-[112px] shrink-0 items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 sm:min-w-[135px] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 ${
                      isActive
                        ? "border-gray-950 bg-gray-950 text-white shadow-md shadow-gray-950/10"
                        : "border-gray-100 bg-gray-50 text-gray-600 hover:border-orange-200 hover:bg-orange-50"
                    }`}
                  >
                    {/* Icon */}

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-10 sm:w-10 ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "bg-white text-gray-800 shadow-sm group-hover:bg-orange-500 group-hover:text-white"
                      }`}
                    >
                      <Icon size={21} strokeWidth={2} />
                    </span>

                    {/* Text */}

                    <span className="min-w-0">
                      <span
                        className={`block whitespace-nowrap text-[10px] font-black sm:text-xs ${
                          isActive
                            ? "text-white"
                            : "text-gray-800 group-hover:text-orange-500"
                        }`}
                      >
                        {filter.name}
                      </span>

                      <span
                        className={`mt-0.5 hidden whitespace-nowrap text-[9px] font-medium sm:block ${
                          isActive ? "text-white/50" : "text-gray-400"
                        }`}
                      >
                        {filter.description}
                      </span>
                    </span>

                    {/* Active Indicator */}

                    {isActive && (
                      <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-orange-400 sm:right-2.5 sm:top-2.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            VEHICLE HEADER
        ========================================================== */}
        <div className="mb-5 flex items-end justify-between gap-4 sm:mb-6">
          {/* TITLE + DESCRIPTION */}

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <h3 className="truncate text-lg font-black tracking-tight text-gray-950 sm:text-2xl">
                {activeFilter === "All"
                  ? "Featured Vehicles"
                  : `${activeFilter} Models`}
              </h3>

              <span className="shrink-0 rounded-full bg-orange-50 px-2 py-1 text-[9px] font-black text-orange-500 sm:px-2.5 sm:text-[11px]">
                {filteredModels.length}
              </span>
            </div>

            <p className="mt-1 text-xs text-gray-400 sm:text-sm">
              {activeFilter === "All"
                ? "Our selection of standout vehicles"
                : `Available ${activeFilter} vehicles`}
            </p>
          </div>

          {/* VEHICLE COUNT */}

{filteredModels.length > 0 && (
  <div className="flex shrink-0 items-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-1.5 shadow-sm">
    
    <div className="flex items-center gap-2.5 px-2.5 py-1.5 sm:px-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
        <Car size={18} strokeWidth={2.2} />
      </span>

      <span className="hidden min-w-0 sm:block">
        <span className="block whitespace-nowrap text-xs font-black text-gray-900">
          {filteredModels.length}{" "}
          {filteredModels.length === 1 ? "Vehicle" : "Vehicles"}
        </span>
        <span className="mt-0.5 block whitespace-nowrap text-[9px] font-medium text-gray-400">
          Available now
        </span>
      </span>

      
      <span className="text-xs font-black text-gray-900 sm:hidden">
        {filteredModels.length}
      </span>
    </div>

    
    <div className="mx-1 h-8 w-px bg-gray-200" />

   
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={scrollLeft}
        aria-label="Previous vehicles"
        className="group flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-600 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-md sm:h-10 sm:w-10"
      >
        <ChevronLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
      </button>

      <button
        type="button"
        onClick={scrollRight}
        aria-label="Next vehicles"
        className="group flex h-9 w-9 items-center justify-center rounded-xl bg-gray-950 text-white transition-all duration-300 hover:bg-orange-500 hover:shadow-md sm:h-10 sm:w-10"
      >
        <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </div>
  </div>
)}
</div>


        {/* =========================================================
            VEHICLE CARDS
        ========================================================== */}

        {filteredModels.length > 0 ? (
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-5 scroll-smooth snap-x snap-mandatory scrollbar-none sm:gap-5 sm:pb-7"
          >
            {filteredModels.map((vehicle) => (
              <article
                key={vehicle.id}
                className="group relative w-[calc(100vw-32px)] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)] md:rounded-2xl"
              >
                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="relative h-[215px] overflow-hidden bg-gray-100 sm:h-[235px] lg:h-[245px]">
                  <img
                    src={vehicle.image}
                    alt={vehicle.model}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5" />

                  {/* Featured */}

                  <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                    <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/45 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-wider text-white backdrop-blur-md sm:gap-1.5 sm:px-3 sm:text-[10px]">
                      <Sparkles
                        size={9}
                        className="text-orange-400 sm:h-[11px] sm:w-[11px]"
                      />
                      Featured
                    </div>
                  </div>

                  {/* Favorite */}

                  <button
                    type="button"
                    aria-label={`Save ${vehicle.model}`}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-orange-500 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                  >
                    <Heart size={16} />
                  </button>

                  {/* Image Content */}

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <div className="mb-1.5 flex items-center gap-2 sm:mb-2">
                      <span className="rounded-full bg-orange-500 px-2 py-1 text-[8px] font-black uppercase tracking-wider text-white sm:px-2.5 sm:text-[9px]">
                        {vehicle.make}
                      </span>

                      <span className="text-[9px] font-semibold text-white/60 sm:text-[10px]">
                        Suna Motors
                      </span>
                    </div>

                    <h4 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                      {vehicle.model}
                    </h4>
                  </div>
                </div>

                {/* =================================================
                    CARD BODY
                ================================================== */}

                <div className="p-4 sm:p-5">
                  {/* Vehicle Information */}

                  <div className="mb-4 grid grid-cols-2 gap-2 sm:mb-5">
                    {/* Year */}

                    <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-2.5 py-2.5 sm:px-3">
                      <CalendarDays
                        size={14}
                        className="shrink-0 text-orange-500"
                      />

                      <div className="min-w-0">
                        <p className="text-[8px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[9px]">
                          Year
                        </p>

                        <p className="text-[11px] font-black text-gray-800 sm:text-xs">
                          {vehicle.year}
                        </p>
                      </div>
                    </div>

                    {/* Status */}

                    <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-2.5 py-2.5 sm:px-3">
                      <BadgeCheck
                        size={14}
                        className="shrink-0 text-orange-500"
                      />

                      <div className="min-w-0">
                        <p className="text-[8px] font-semibold uppercase tracking-wider text-gray-400 sm:text-[9px]">
                          Status
                        </p>

                        <p className="text-[11px] font-black text-gray-800 sm:text-xs">
                          Available
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price */}

                  <div className="mb-4 flex items-end justify-between border-b border-gray-100 pb-4 sm:mb-5 sm:pb-5">
                    <div className="min-w-0">
                      <p className="text-[8px] font-bold uppercase tracking-[0.13em] text-gray-400 sm:text-[10px] sm:tracking-[0.15em]">
                        Starting from
                      </p>

                      <p className="mt-1 text-lg font-black tracking-tight text-gray-950 sm:text-xl">
                        {vehicle.price}
                      </p>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 sm:h-9 sm:w-9">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* View Model */}

                  <button
                    type="button"
                    className="group/button flex w-full items-center justify-between rounded-xl bg-gray-950 px-3.5 py-3 text-xs font-black text-white transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-orange-500/20 sm:rounded-2xl sm:px-4 sm:py-3.5 sm:text-sm"
                  >
                    <span>View Model</span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/button:bg-white/20 sm:h-8 sm:w-8">
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                      />
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* =========================================================
             EMPTY STATE
          ========================================================== */

          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white px-5 text-center sm:min-h-[300px] sm:rounded-3xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 sm:h-16 sm:w-16">
              <SlidersHorizontal size={23} />
            </div>

            <h4 className="text-base font-black text-gray-900 sm:text-lg">
              No {activeFilter} models available
            </h4>

            <p className="mt-2 max-w-sm text-xs leading-6 text-gray-400 sm:text-sm">
              We currently don't have any vehicles from this make in our
              featured collection.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="mt-5 rounded-full bg-gray-950 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-orange-500 sm:text-sm"
            >
              View All Models
            </button>
          </div>
        )}

        {/* =========================================================
            MOBILE CONTROLS
        ========================================================== */}

        {filteredModels.length > 0 && (
          <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous vehicles"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm active:scale-95"
            >
              <ChevronLeft size={17} />
            </button>

            <span className="flex items-center gap-2 text-[10px] font-semibold text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Swipe to explore
            </span>

            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next vehicles"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-white shadow-sm active:scale-95"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestModels;
