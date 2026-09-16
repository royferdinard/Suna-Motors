import React, { useRef } from "react";

import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

import categories from "./terndingCategoryStore";

const TrendingCategories = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-100 py-10 md:py-12">
      {/* Background Decorations */}

      <div className="pointer-events-none absolute -right-40 -top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -left-40 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto w-full px-4 md:px-12">
        {/* =========================================================
    PREMIUM HEADER
========================================================== */}

        <div className="mb-8 sm:mb-10">
          {/* TOP LABEL ROW */}

          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-950 text-orange-400 shadow-sm sm:h-9 sm:w-9">
                <Sparkles size={15} />
              </div>

              <span className="h-px w-6 bg-orange-500 sm:w-8" />

              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-orange-500 sm:text-[11px] sm:tracking-[0.25em]">
                Explore Our Collection
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-orange-100 bg-orange-50 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-wider text-orange-600 sm:px-3 sm:text-[9px]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
              Trending Now
            </div>
          </div>

          {/* MAIN HEADER */}

          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            {/* LEFT CONTENT */}

            <div className="max-w-3xl">
              {/* Heading */}

              <h2 className="max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-gray-950 md:text-4xl">
                Trending{" "}
                <span className="relative inline-block text-orange-500">
                  Categories
                  <span className="absolute -bottom-1 left-0 h-1 w-1/2 rounded-full bg-orange-500/30 sm:-bottom-2" />
                </span>
              </h2>

              {/* Description */}

              <p className="mt-4 max-w-2xl text-[13px] leading-6 text-gray-500 sm:mt-5 sm:text-base sm:leading-7">
                Explore popular vehicle categories designed around different
                lifestyles, journeys and driving needs. Find the body style that
                fits the way you drive.
              </p>

              {/* FEATURES */}

              <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-2.5">
                {/* Feature */}

                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <BadgeCheck size={12} />
                  </span>

                  <span className="text-[9px] font-bold text-gray-600 sm:text-[10px]">
                    Quality Vehicles
                  </span>
                </div>

                {/* Feature */}

                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                    <Sparkles size={11} />
                  </span>

                  <span className="text-[9px] font-bold text-gray-600 sm:text-[10px]">
                    Popular Categories
                  </span>
                </div>

                {/* Feature */}

                <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  </span>

                  <span className="text-[9px] font-bold text-gray-600 sm:text-[10px]">
                    Updated Collection
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}

            <div className="w-full lg:max-w-[390px]">
              {/* STATS */}

              <div className="grid grid-cols-2 gap-2.5">
                {/* Categories */}

                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3.5 py-3.5 shadow-sm sm:px-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Sparkles size={15} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-base font-black leading-none text-gray-950 sm:text-lg">
                      {categories.length}+
                    </p>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                      Categories
                    </p>
                  </div>
                </div>

                {/* Quality */}

                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3.5 py-3.5 shadow-sm sm:px-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-950 text-orange-400">
                    <BadgeCheck size={15} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-base font-black leading-none text-gray-950 sm:text-lg">
                      Quality
                    </p>

                    <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-gray-400">
                      Selection
                    </p>
                  </div>
                </div>
              </div>

              {/* ACTION ROW */}

              <div className="mt-2.5 flex items-center gap-2.5">
                {/* Live Status */}

                <div className="flex flex-1 items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-3 text-[9px] font-bold text-gray-500 shadow-sm sm:px-4 sm:text-[10px]">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>

                  <span className="whitespace-nowrap">Popular right now</span>
                </div>

                {/* View All */}

                <button
                  type="button"
                  className="group flex shrink-0 items-center gap-2 rounded-2xl bg-gray-950 px-4 py-3 text-[10px] font-black text-white shadow-lg shadow-gray-950/10 transition-all duration-300 hover:bg-orange-500 hover:shadow-orange-500/20 sm:gap-3 sm:px-5 sm:py-3.5 sm:text-xs"
                >
                  <span className="whitespace-nowrap">View All Categories</span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            CATEGORY TOOLBAR
        ========================================================== */}

        <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
          {/* Left */}

          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <div className="h-8 w-1 rounded-full bg-orange-500 sm:h-9" />

            <div className="min-w-0">
              <h3 className="truncate text-base font-black tracking-tight text-gray-950 sm:text-lg">
                Popular Vehicle Types
              </h3>

              <p className="mt-0.5 text-[10px] text-gray-400 sm:text-xs">
                Swipe to discover more
              </p>
            </div>
          </div>

          {/* Desktop Controls */}

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous categories"
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
            >
              <ChevronLeft
                size={18}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
            </button>

            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next categories"
              className="group flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-white shadow-sm transition-all duration-300 hover:bg-orange-500"
            >
              <ChevronRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

      {/**Category cards */}

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-5 scroll-smooth snap-x snap-mandatory scrollbar-none sm:gap-5 sm:pb-6"
        >
          {categories.map((category) => (
            <article
              key={category.id}
              className="group relative h-[290px] w-[calc(100vw-40px)] max-w-[365px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white bg-white p-1 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_65px_rgba(0,0,0,0.18)] sm:h-[325px] sm:rounded-[28px] lg:h-[345px]"
            >
            {/**Image */}

              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gray-900 sm:rounded-[24px]">
                {/* Image */}

                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/5" />

                {/* Soft Hover Glow */}

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-orange-500/0 transition-all duration-700 group-hover:from-orange-500/10 group-hover:to-orange-500/10" />

                {/* =================================================
            TOP BADGES
        ================================================== */}

                <div className="absolute left-3 top-3 flex items-center gap-2 sm:left-4 sm:top-4">
                  {/* Trending */}

                  <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-xl sm:px-3 sm:text-[9px]">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-white">
                      <Sparkles size={8} />
                    </span>
                    Trending
                  </div>
                </div>

                {/* =================================================
            TOP RIGHT ACTION
        ================================================== */}

                <button
                  type="button"
                  aria-label={`Explore ${category.name}`}
                  className="group/arrow absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-orange-500 hover:bg-orange-500 sm:right-4 sm:top-4"
                >
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5"
                  />
                </button>

                {/* =================================================
            CATEGORY CONTENT
        ================================================== */}

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  {/* Glass Content */}

                  <div className="rounded-2xl border border-white/15 bg-black/5 p-3.5 shadow-2xl backdrop-blur-md sm:rounded-[20px] sm:p-4">
                    {/* Top Info */}

                    <div className="mb-2 flex items-center justify-between gap-3">
                      {/* Vehicle Count */}

                      <span className="inline-flex items-center rounded-full bg-orange-500 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.1em] text-white shadow-lg shadow-orange-500/20 sm:text-[9px]">
                        {category.count} Vehicles
                      </span>

                      {/* Small Status */}

                      <span className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-wider text-white/60 sm:text-[9px]">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                        Available
                      </span>
                    </div>

                    {/* Category Name */}

                    <h4 className="text-[1.55rem] font-black leading-none tracking-[-0.04em] text-white sm:text-2xl lg:text-[1.7rem]">
                      {category.name}
                    </h4>

                    {/* Description + Explore */}

                    <div className="mt-2 flex items-end justify-between gap-3">
                      <p className="line-clamp-2 max-w-[75%] text-[10px] font-medium leading-4 text-white/60 sm:text-[11px] sm:leading-5">
                        {category.description}
                      </p>

                      <span className="flex shrink-0 items-center gap-1 text-[8px] font-black uppercase tracking-[0.12em] text-white/70 transition-all duration-300 group-hover:gap-2 group-hover:text-orange-400 sm:text-[9px]">
                        Explore
                        <ArrowUpRight size={12} />
                      </span>
                    </div>

                    {/* Progress Line */}

                    <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/3 rounded-full bg-orange-500 transition-all duration-700 group-hover:w-full" />
                    </div>
                  </div>
                </div>

                {/* =================================================
            BOTTOM ORANGE ACCENT
        ================================================== */}

                <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-500 group-hover:w-1/3" />
              </div>
            </article>
          ))}
        </div>

        {/* =========================================================
            MOBILE CONTROLS
        ========================================================== */}

        <div className="mt-1 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous categories"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all active:scale-95"
          >
            <ChevronLeft size={17} />
          </button>

          <span className="flex items-center gap-2 text-[10px] font-semibold text-gray-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
            Swipe to explore
          </span>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next categories"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-white shadow-sm transition-all active:scale-95"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingCategories;
