import React from "react";
import { ArrowRight, Car } from "lucide-react";
import { Link } from "react-router-dom";

import ReusedCard from "./Cards/carCards";
import TopCarsStore from "./topCarsStore";

const TopCars = () => {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="w-full px-6 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            {/* Heading */}
            <div className=" text-start flex flex-col md:items-start md:justify-start items-center justify-center">
              {/* Heading */}
              <h1
                className=" text-3xl font-bold  text-gray-900 md:text-4xl text-gray-950/95"
              >
                Our Top Cars
              </h1>

                {/* Decorative Divider */}
              <div className="mt-3 md:flex hidden items-center justify-center gap-4">
                {/* Left Line */}
                <div
                  className=" h-[2px] w-25 bg-gradient-to-r from-transparent to-orange-600 
      "
                />
                {/* Right Line */}
                <div
                  className=" h-[2px] w-25 bg-gradient-to-l from-transparent to-orange-600  "
                />
              </div>

              {/* Decorative Divider */}
              <div className="mt-3 flex md:hidden items-center justify-center gap-4">
                {/* Left Line */}
                <div
                  className=" h-px w-16 bg-gradient-to-r from-transparent to-orange-600 sm:w-24
      "
                />

                {/* Car Icon */}
                <span
                  className=" flex h-11 w-11 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-600 shadow-sm"
                >
                  <Car size={21} strokeWidth={1.8} />
                </span>

                {/* Right Line */}
                <div
                  className=" h-px w-16 bg-gradient-to-l from-transparent to-orange-600 sm:w-24 "
                />
              </div>
            </div>
            {/* Description */}
            <p className="mt-3 max-w-xl text-base leading-7 text-center md:text-start text-gray-600">
              Discover quality pre-owned vehicles selected for comfort,
              reliability, and style.
            </p>
          </div>

         <div className="flex flex-col items-center w-full md:w-auto justify-center">
             {/* View All */}
          <Link
            to="/vehicles"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-xl
              text-sm
              font-bold
              text-gray-900
              transition-all
              duration-300
              hover:border-orange-600
              hover:text-orange-600
              text-gray-950/95
            "
          >
            View All Vehicles
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
         </div>
        </div>

        {/* ================= CARS ================= */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {TopCarsStore.map((car) => (
            <ReusedCard key={car.id} car={car} />
          ))}
        </div>

        {/* ================= BOTTOM TEXT ================= */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Looking for something specific?
          </p>

          <Link
            to="/vehicles"
            className="
              mt-2
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-orange-600
              transition-colors
              hover:text-orange-700
            "
          >
            Explore our complete vehicle collection
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCars;
