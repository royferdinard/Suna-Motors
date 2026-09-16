import React from "react";
import { ArrowRight, Phone, CarFront, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import image from "../assets/Images/Vehicles/v.jpg";

const Cta = () => {
  return (
    <section className="">
      <div className="w-full">
        <div
          className="
            relative
            min-h-[40vh]
            overflow-hidden
            bg-gray-950
            shadow-2xl
          "
        >
          {/* ================= BACKGROUND IMAGE ================= */}
          <div className="absolute inset-0">
            <img
              src={image}
              alt="Featured vehicle at Suna Motors"
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-1000
                hover:scale-105
              "
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-gray-950
                via-gray-950/85
                to-gray-950/20
              "
            />

            {/* Mobile Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gray-950/50
                md:hidden
              "
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[460px]
              items-center
              px-6
              py-12
              px-12
            "
          >
            <div className="max-w-2xl">
              {/* Small Label
              <div className="mb-5 flex items-center gap-3">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-600
                    text-white
                    shadow-lg
                  "
                >
                  <CarFront size={19} />
                </span>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                    Suna Motors
                  </p>

                  <p className="text-xs text-white/60">
                    Quality vehicles. Trusted service.
                  </p>
                </div>

              </div> */}

              {/* Heading */}
              <h1
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  md:text-5xl
                "
              >
                Find the car that
                <span className="block text-orange-500">
                  fits your journey.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  leading-7
                  text-white/90
                  sm:text-base
                "
              >
                Explore our carefully selected collection of quality pre-owned
                vehicles. From reliable family cars to powerful SUVs, find your
                next vehicle at Suna Motors.
              </p>

              {/* Trust Points */}
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <ShieldCheck size={17} className="text-orange-500" />
                  Quality Checked
                </div>

                <div className="flex items-center gap-2 text-sm text-white/80">
                  <CarFront size={17} className="text-orange-500" />
                  Wide Selection
                </div>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* View Vehicles */}
                <Link
                  to="/vehicles"
                  className="
                    group
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-orange-600
                    px-6
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-orange-600/20
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    hover:shadow-orange-600/30
                    active:scale-[0.98]
                  "
                >
                  View Vehicles
                  <ArrowRight
                    size={18}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  className="
                    inline-flex
                    h-12
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-white/20
                    bg-white/10
                    px-6
                    text-sm
                    font-bold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-white/40
                    hover:bg-white/20
                    active:scale-[0.98]
                  "
                >
                  <Phone size={17} />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* ================= ORANGE DECORATION ================= */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-1
              w-1/3
              bg-orange-600
            "
          />

          {/* Decorative Circle */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -right-32
              h-72
              w-72
              rounded-full
              border
              border-orange-500/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -right-20
              h-48
              w-48
              rounded-full
              border
              border-orange-500/20
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
