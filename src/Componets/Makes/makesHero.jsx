import React from "react";
import {
  ArrowRight,
  CarFront,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import image from "../../assets/Images/Vehicles/noBg.png";
import { Link } from "react-router-dom";

const MakesHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Orange Glow */}
      <div
        className="
          pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[100px]
        "
      ></div>

      {/* Small Orange Glow */}
      <div
        className="
          pointer-events-none absolute left-[-120px] bottom-[-100px] h-[350px] w-[350px] rounded-full bg-orange-500/5 blur-[90px]
        "
      ></div>

      <div
        className="
          relative  mx-auto  grid min-h-[78vh] max-w-[1500px] grid-cols-1 items-center gap-8 px-5 py-25 md:px-20 md:py-20 lg:grid-cols-[0.9fr_1.1fr]
          
        "
      >
        <div className="relative z-20">
          <div className="max-w-2xl">
            {/* Brand Label */}
            <div className="mb-7 flex items-center gap-3">
              <div
                className="
                  flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 shadow-lg shadow-orange-500/25
                "
              >
                <CarFront size={20} className="text-white" />
              </div>

              <div>
                <p
                  className="
                    text-xs font-bold uppercase tracking-[0.3em] text-orange-600
                  "
                >
                  Suna Motors
                </p>

                <p
                  className="
                    mt-1 text-xs font-medium text-gray-400
                  "
                >
                  Trusted Vehicle Collection
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="
                max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-gray-950 md:text-5xl
              "
            >
              Find Your Car
              <span className="block text-orange-600">By Make.</span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7 max-w-xl text-base font-medium leading-7 text-gray-500 sm:text-lg sm:leading-8
              "
            >
              Explore quality pre-owned vehicles from trusted automotive
              manufacturers. Discover the makes we offer and find a vehicle that
              fits your lifestyle, needs, and budget.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#makes-directory"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/30 group"
              >
                Browse all makes
                <ArrowRight size={17}
                className="group-hover:translate-x-1 duration-300 transition-all"
                />
              </a>

              <Link
              to={'/contact'}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition-all hover:border-orange-500 hover:text-orange-600"
              >
                <Search size={16} />
                Talk to a specialist
              </Link>
            </div>

            {/* Collection Snapshot */}
            <div className="mt-10 grid max-w-md grid-cols-3 border-t border-gray-200 pt-5">
              <div>
                <p className="text-2xl font-black text-gray-950">16+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Makes</p>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <p className="text-2xl font-black text-gray-950">96</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Vehicles</p>
              </div>
              <div className="border-l border-gray-200 pl-4">
                <p className="text-2xl font-black text-gray-950">1</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-gray-400">Easy search</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            relative flex min-h-[420px] items-center justify-center sm:min-h-[500px] lg:min-h-[620px]
          "
        >
          <div
            className="
              absolute h-[290px] w-[290px] rounded-full border-[1px] border-orange-500/20 sm:h-[380px]
              sm:w-[380px] lg:h-[500px] lg:w-[500px]
            "
          ></div>

          <div
            className="
              absolute h-[230px] w-[230px] rounded-full border-[1px] border-orange-500/10 sm:h-[310px]
              sm:w-[310px] lg:h-[410px] lg:w-[410px]
            "
          ></div>

          {/* Orange Glow Behind Car */}
          <div
            className="
              absolute h-[230px] w-[230px] rounded-full bg-orange-500/15
              blur-[70px] sm:h-[300px]
              sm:w-[300px] lg:h-[380px] lg:w-[380px]
            "
          ></div>

          <div
            className="
              absolute h-[190px] w-[390px] rotate-[-12deg] rounded-[50%] border-[2px]
              border-orange-500/20 sm:h-[240px]
              sm:w-[500px] lg:h-[300px] lg:w-[620px]
            "
          ></div>

          <div
            className="
              absolute bottom-[70px]
              h-8 w-[270px] rounded-[50%] bg-black/20 blur-2xl sm:bottom-[80px] sm:w-[380px] lg:bottom-[105px]
              lg:w-[520px]
            "
          ></div>

          <div
            className="
              car-floating relative z-10 w-[108%] max-w-[720px] transform-gpu sm:w-[115%] lg:w-[120%] xl:max-w-[820px]
            "
          >
            <img
              src={image}
              alt="Premium vehicle at Suna Motors"
              className="
                relative z-10 w-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all
                duration-700 hover:scale-[1.03] hover:drop-shadow-[0_45px_45px_rgba(0,0,0,0.3)]
              "
            />
          </div>

          <div
            className="
              absolute right-[5%] top-[8%] z-20 hidden items-center gap-2 rounded-2xl
              border border-white/70 bg-white/80 px-4 py-3 shadow-xl shadow-gray-200/50 backdrop-blur-xl sm:right-[7%] sm:top-[5%] lg:right-[2%] lg:top-[7%]
              sm:flex
            "
          >
            <div
              className="
                flex h-8 w-8 items-center justify-center rounded-full bg-orange-500
              "
            >
              <Sparkles size={15} className="text-white" />
            </div>

            <div>
              <p
                className="
                  text-[9px] font-bold uppercase tracking-[0.15em] text-gray-400
                "
              >
                Premium
              </p>

              <p
                className="
                  text-xs font-bold text-gray-900
                "
              >
                Vehicle Collection
              </p>
            </div>
          </div>

          <div
            className="
              absolute bottom-[8%] left-[2%] z-20 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85
              px-4 py-3 shadow-xl
              shadow-gray-200/50 backdrop-blur-xl sm:bottom-[10%] sm:left-[4%] lg:bottom-[12%] lg:left-[-3%]
            "
          >
            <div
              className="
                flex h-9 w-9 items-center justify-center rounded-full bg-gray-950
              "
            >
              <ShieldCheck size={17} className="text-orange-500" />
            </div>

            <div>
              <p
                className="
                  text-xs font-bold text-gray-900
                "
              >
                Trusted Vehicles
              </p>

              <p
                className="
                  text-[10px] text-gray-400
                "
              >
                Quality you can depend on
              </p>
            </div>
          </div>

          <div
            className="
              absolute left-[12%] top-[18%] h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.7)]
            "
          ></div>

          <div
            className="
              absolute right-[15%] bottom-[22%] h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.7)]
            "
          ></div>
        </div>
      </div>

      <style>
        {`
         @keyframes carFloat {
  0% {
    opacity: 0;
    transform:
      translate3d(500px, 80px, -500px)
      rotateY(-25deg)
      rotateZ(4deg)
      scale(0.45);
  }

  40% {
    opacity: 1;
  }

  70% {
    transform:
      translate3d(-30px, -10px, 0)
      rotateY(8deg)
      rotateZ(-1deg)
      scale(1.05);
  }

  85% {
    transform:
      translate3d(10px, 0, 0)
      rotateY(-2deg)
      rotateZ(0deg)
      scale(0.98);
  }

  100% {
    transform:
      translate3d(0, 0, 0)
      rotateY(0deg)
      rotateZ(0deg)
      scale(1);
  }
}
          .car-floating {
            animation: carFloat 2s ease-in-out forwards;
            transform-style: preserve-3d;
            perspective: 1000px;
          }
        `}
      </style>
    </section>
  );
};

export default MakesHero;
