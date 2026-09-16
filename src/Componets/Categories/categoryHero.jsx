import React from "react";
import {
  CarFront,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";

import image from "../../assets/Images/catBg.png";

const CategoriesHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      {/* Large orange glow */}
      <div
        className="
          pointer-events-none absolute
          -right-40 -top-32
          h-[550px] w-[550px]
          rounded-full
          bg-orange-500/[0.07]
          blur-[110px]
        "
      />

      {/* Bottom orange glow */}
      <div
        className="
          pointer-events-none absolute
          -left-40 -bottom-40
          h-[420px] w-[420px]
          rounded-full
          bg-orange-500/[0.045]
          blur-[100px]
        "
      />

      {/* Fine grid */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div
        className="
          relative z-10
          mx-auto grid
          min-h-[580px]
          max-w-[1500px]
          grid-cols-1
          items-center
          gap-4
          px-6 py-25

          sm:px-8 sm:py-12
          md:px-10

          lg:grid-cols-[0.8fr_1.2fr]
          lg:min-h-[620px]
          lg:px-12
          lg:py-8

          xl:px-16
        "
      >

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div
          className="
            relative z-20
            flex items-center
            lg:max-w-[540px]
            lg:justify-self-start
            lg:order-1
            lg:rounded-3xl
            lg:bg-white/85
            lg:p-8
            lg:shadow-sm
            lg:backdrop-blur-md
          "
        >
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div
              className="
                mb-6
                flex items-center gap-3
              "
            >

              {/* Icon */}
              <div
                className="
                  relative
                  flex h-11 w-11
                  shrink-0
                  items-center justify-center
                  rounded-xl
                  bg-gray-950
                  shadow-xl
                  shadow-gray-900/10
                "
              >
                <CarFront
                  size={19}
                  strokeWidth={2}
                  className="text-orange-500"
                />

                {/* Small accent */}
                <span
                  className="
                    absolute -right-1 -top-1
                    h-2.5 w-2.5
                    rounded-full
                    bg-orange-500
                    ring-4 ring-white
                  "
                />
              </div>

              <div>
                <div
                  className="
                    flex items-center gap-2
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.28em]
                    text-orange-600
                  "
                >
                  <span>Explore Suna Motors</span>

                  <Sparkles
                    size={12}
                    strokeWidth={2.5}
                  />
                </div>

                <p
                  className="
                    mt-1
                    text-xs
                    font-medium
                    text-gray-400
                  "
                >
                  Vehicle Categories
                </p>
              </div>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-4xl
                font-black
                leading-[0.92]
                tracking-[-0.055em]
                text-gray-950
                sm:text-5xl
              "
            >
            Our <span
                className="
                  relative inline-block
                  text-orange-600
                "
              >
                Categories.

                {/* Orange underline */}
                <span
                  className="
                    absolute
                    -bottom-2
                    left-1
                    h-1
                    w-16
                    rounded-full
                    bg-orange-500

                    sm:w-20
                  "
                />
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-xl
                text-[15px]
                font-medium
                leading-7
                text-gray-500

                sm:text-base
                sm:leading-8
              "
            >
              Discover the range of vehicles available at Suna Motors,
              from versatile SUVs and comfortable sedans to practical
              hatchbacks, powerful pickups, spacious vans and premium
              vehicles.
            </p>

            {/* Category highlights */}
            <div
              className="
                mt-8
                flex flex-wrap
                items-center
                gap-x-5
                gap-y-3
              "
            >

              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-orange-500
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-gray-500
                  "
                >
                  SUVs
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-orange-500
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-gray-500
                  "
                >
                  Sedans
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-orange-500
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-gray-500
                  "
                >
                  Hatchbacks
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5 w-1.5
                    rounded-full
                    bg-orange-500
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-gray-500
                  "
                >
                  Pickups
                </span>
              </div>

            </div>

            {/* Bottom information */}
            <div
              className="
                mt-7
                flex items-center gap-4
              "
            >

              <div
                className="
                  h-px w-12
                  bg-orange-500

                  sm:w-16
                "
              />

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                "
              >
                Find the right category
              </p>

              <ArrowDownRight
                size={16}
                className="text-orange-500"
              />

            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#vehicle-categories"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Browse categories
                <ArrowDownRight size={16} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-gray-700 transition-colors hover:border-orange-300 hover:text-orange-500"
              >
                Ask our team
              </a>
            </div>

          </div>
        </div>


        {/* =================================================
            RIGHT VEHICLE / CATEGORY VISUAL
        ================================================= */}

        <div
          className="
            relative
            flex
            min-h-[26rem]
            w-full
            items-center
            justify-center

            sm:min-h-[500px]

            lg:min-h-[620px]
            lg:order-2
            lg:-ml-20
            lg:-mr-24
          "
        >

          {/* =================================================
              LARGE ORBIT
          ================================================= */}

          <div
            className="
              absolute
              h-[25rem] w-full
              rounded-full
              border border-orange-500/[0.12]
              sm:h-[380px]
              sm:w-[380px]
              lg:h-[520px]
              lg:w-[520px]
              xl:h-[570px]
              xl:w-[570px]
              mt-8
            "
          />

          {/* Second orbit */}
          <div
            className="
              absolute
              h-[20rem] w-[90%]
              rounded-full
              border border-orange-500/[0.10]

              sm:h-[300px]
              sm:w-[300px]

              lg:h-[410px]
              lg:w-[410px]

              xl:h-[450px]
              xl:w-[450px]
               mt-8
            "
          />

          {/* Third orbit */}
          <div
            className="
              absolute
              h-[155px] w-[155px]
              rounded-full
              border border-dashed
              border-orange-500/[0.14]

              sm:h-[220px]
              sm:w-[220px]

              lg:h-[310px]
              lg:w-[310px]

              xl:h-[340px]
              xl:w-[340px]
            "
          />

          {/* Central orange glow */}
          <div
            className="
              absolute
              h-[200px] w-[200px]
              rounded-full
              bg-orange-500/[0.14]
              blur-[80px]

              sm:h-[280px]
              sm:w-[280px]

              lg:h-[370px]
              lg:w-[370px]

              xl:h-[420px]
              xl:w-[420px]
            "
          />

          {/* =================================================
              ROTATED OVAL RING
          ================================================= */}

          <div
            className="
              absolute
              h-[160px]
              w-[370px]
              rotate-[-14deg]
              rounded-[50%]
              border
              border-orange-500/[0.18]

              sm:h-[220px]
              sm:w-[500px]

              lg:h-[300px]
              lg:w-[660px]

              xl:h-[330px]
              xl:w-[730px]
            "
          />

          {/* Second subtle ring */}
          <div
            className="
              absolute
              h-[115px]
              w-[330px]
              rotate-[8deg]
              rounded-[50%]
              border
              border-orange-500/[0.08]

              sm:h-[170px]
              sm:w-[450px]

              lg:h-[230px]
              lg:w-[590px]

              xl:h-[250px]
              xl:w-[650px]
            "
          />


          {/* =================================================
              ORBIT DOTS
          ================================================= */}

          <span
            className="
              absolute
              left-[13%]
              top-[17%]
              h-3 w-3
              rounded-full
              bg-orange-500
              shadow-[0_0_25px_rgba(249,115,22,0.7)]
            "
          />

          <span
            className="
              absolute
              right-[14%]
              top-[28%]
              h-1.5 w-1.5
              rounded-full
              bg-orange-400
            "
          />

          <span
            className="
              absolute
              bottom-[18%]
              left-[20%]
              h-1.5 w-1.5
              rounded-full
              bg-orange-500
            "
          />

          <span
            className="
              absolute
              bottom-[23%]
              right-[18%]
              h-2 w-2
              rounded-full
              bg-orange-400
              shadow-[0_0_18px_rgba(249,115,22,0.6)]
            "
          />


          {/* =================================================
              CAR SHADOW
          ================================================= */}

          <div
            className="
              absolute
              bottom-[45px]
              h-8
              w-[260px]
              rounded-[50%]
              bg-black/[0.16]
              blur-2xl

              sm:bottom-[55px]
              sm:w-[390px]

              lg:bottom-[75px]
              lg:w-[620px]

              xl:w-[700px]
            "
          />


          {/* =================================================
              LARGE CATEGORY IMAGE
          ================================================= */}

          <div
            className="
              car-floating
              relative
              z-10
              aspect-[1090/452]
              w-[190%]
              max-w-none
              sm:w-[165%]
              lg:w-[145%]
              flex flex-col items-center justify-center

             
            "
          >
            <img
              src={image}
              alt="Suna Motors vehicle collection"
              className="
                relative
                z-10
                h-full
                w-full
                object-contain

                drop-shadow-[0_35px_35px_rgba(0,0,0,0.22)]

                transition-all
                duration-700

                hover:scale-[1.025]
                hover:drop-shadow-[0_45px_45px_rgba(0,0,0,0.26)]
              "
            />
          </div>


          {/* =================================================
              SMALL FLOATING LABEL
          ================================================= */}

          <div
            className="
              absolute
              bottom-[15%]
              md:left-2/3 left-1/2
              z-20
              items-center
              gap-2
              rounded-full
              border
              border-gray-200/80
              bg-white/90
              px-3
              py-2
              shadow-lg
              shadow-gray-900/5
              backdrop-blur-md

              -translate-x-1/2
              md:ml-8
              whitespace-nowrap

              flex

              md:bottom-[15%]
              md:left-[4%]
              md:translate-x-0
              lg:left-[5%]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-orange-500
              "
            />

            <span
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.2em]
                text-gray-500
              "
            >
              Our Vehicle Range
            </span>
          </div>

        </div>
      </div>


      {/* =====================================================
          BOTTOM EDGE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-orange-500/20
          to-transparent
        "
      />


      {/* =====================================================
          CAR ENTRANCE ANIMATION
      ===================================================== */}

      <style>
        {`
          @keyframes carFloat {

            0% {
              opacity: 0;

              transform:
                translate3d(520px, 80px, -500px)
                rotateY(-28deg)
                rotateZ(5deg)
                scale(0.42);
            }

            35% {
              opacity: 1;
            }

            68% {
              transform:
                translate3d(-28px, -8px, 0)
                rotateY(7deg)
                rotateZ(-1deg)
                scale(1.04);
            }

            84% {
              transform:
                translate3d(8px, 0, 0)
                rotateY(-2deg)
                rotateZ(0deg)
                scale(0.985);
            }

            100% {
              opacity: 1;

              transform:
                translate3d(0, 0, 0)
                rotateY(0deg)
                rotateZ(0deg)
                scale(1);
            }
          }

          .car-floating {
            animation:
              carFloat
              1.8s
              cubic-bezier(0.16, 1, 0.3, 1)
              forwards;

            transform-style: preserve-3d;
            perspective: 1000px;
          }

          @media (prefers-reduced-motion: reduce) {
            .car-floating {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}
      </style>

    </section>
  );
};

export default CategoriesHero;