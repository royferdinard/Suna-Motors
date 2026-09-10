import { Car, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import FeaturedMakeStore from "./makesStore";

const FeaturedMakes = () => {
  const cardsRef = useRef(null);

  const scrollLeft = () => {
    cardsRef.current?.scrollBy({
      left: -360,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardsRef.current?.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gray-100 px-6 py-8 md:px-12 ">
      {/* ================= HEADER ================= */}
      <div className="w-full">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          {/* Heading */}
          <div className="max-w-2xl">
            {/* Title */}
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl text-center md:text-start">
              Featured <span className="text-orange-600">Makes</span>
            </h2>

            {/* Decorative Divider */}
            <div className="mt-3 md:flex hidden items-center justify-start gap-4">
              {/* Left Line */}
              <div
                className=" h-[2px] w-25 bg-gradient-to-r from-transparent to-orange-600 
                  "
              />
              {/* Right Line */}
              <div className=" h-[2px] w-25 bg-gradient-to-l from-transparent to-orange-600  " />
            </div>

            {/* Decorative Divider */}
            <div className="mt-0.5 flex md:hidden items-center justify-center gap-4">
              {/* Left Line */}
              <div
                className=" h-px w-16 bg-gradient-to-r from-transparent to-orange-600 sm:w-24
                  "
              />

              {/* Car Icon */}
              <span className=" flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-600 shadow-sm">
                <Car size={21} strokeWidth={1.8} />
              </span>

              {/* Right Line */}
              <div className=" h-px w-16 bg-gradient-to-l from-transparent to-orange-600 sm:w-24 " />
            </div>

            {/* Description */}
            <p className="mt-3 max-w-xl text-sm text-gray-600  text-center md:text-start">
              Discover quality vehicles from some of the most trusted and
              sought-after automotive brands in our collection.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-5 md:justify-end">
            {/* View All */}
            <Link
              to="/vehicles"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-gray-900
                transition-all
                duration-300
                hover:text-orange-600
              "
            >
              View All Vehicles
              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                aria-label="Previous makes"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  text-gray-900
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-orange-600
                  hover:bg-orange-600
                  hover:text-white
                  active:scale-95
                "
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={scrollRight}
                aria-label="Next makes"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  text-gray-900
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-orange-600
                  hover:bg-orange-600
                  hover:text-white
                  active:scale-95
                "
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>


        {/* ================= CARDS ================= */}
        <div className="relative mt-8">
          {/* Left Fade */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-10
              h-full
              w-8
              bg-gradient-to-r
              from-gray-100
              to-gray-50/0
            "
          />

          {/* Right Fade */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-10
              h-full
              w-8
              bg-gradient-to-l
              from-gray-100
              to-gray-50/0
            "
          />

          <div
            ref={cardsRef}
            className="
              flex
              gap-5
              overflow-x-auto
              overflow-y-hidden
              px-2
              pb-5
              scroll-smooth
              snap-x
              snap-mandatory
              scrollbar-none
            "
          >
            {FeaturedMakeStore.map((make, index) => (
              <article
                key={index}
                className="
                  group
                  relative
                  md:w-[25%]
                  w-[97%]
                  snap-start
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-xl
                  shrink-0
                "
              >
                {/* ================= IMAGE ================= */}
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <img
                    src={make.image}
                    alt={make.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Image Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/75
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* Top Badge */}
                  <div
                    className="
                      absolute
                      left-4
                      top-4
                      rounded-full
                      border
                      border-white/20
                      bg-black/50
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-white
                      backdrop-blur-md
                    "
                  >
                    Featured
                  </div>

                  {/* Make Name on Image */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/70">
                          Browse
                        </p>

                        <h3 className="text-2xl font-bold text-white">
                          {make.name}
                        </h3>
                      </div>

                      {/* Vehicle Count */}
                      <span
                        className="
                          rounded-full
                          bg-orange-600
                          px-3
                          py-1.5
                          text-xs
                          font-bold
                          text-white
                          shadow-lg
                        "
                      >
                        {make.vehicles}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="p-5">
                  {/* Description */}
                  <p className="min-h-[48px] text-sm leading-6 text-gray-600">
                    {make.desc}
                  </p>

                  {/* Models */}
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                      Popular Models
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {make.models?.slice(0, 4).map((model, modelIndex) => (
                        <span
                          key={modelIndex}
                          className="
                            rounded-lg
                            bg-gray-100
                            px-2.5
                            py-1.5
                            text-xs
                            font-medium
                            text-gray-700
                            transition-colors
                            duration-300
                            group-hover:bg-orange-50
                            group-hover:text-orange-600
                          "
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px bg-gray-100"></div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400">
                      Quality inspected vehicles
                    </span>

                    <Link
                      to="/vehicles"
                      className="
                        group/button
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-950
                        text-white
                        transition-all
                        duration-300
                        hover:bg-orange-600
                      "
                    >
                      <ArrowUpRight
                        size={18}
                        className="
                          transition-transform
                          duration-300
                          group-hover/button:translate-x-0.5
                          group-hover/button:-translate-y-0.5
                        "
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM INDICATOR ================= */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="h-1.5 w-8 rounded-full bg-orange-600"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMakes;
