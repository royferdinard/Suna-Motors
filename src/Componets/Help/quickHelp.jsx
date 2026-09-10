import React from "react";
import {
  CarFront,
  Gauge,
  SearchCheck,
  CreditCard,
  Repeat2,
  Headphones,
  ArrowUpRight,
  Car,
  MessageCircle,
} from "lucide-react";

const QuickHelp = () => {
  const categories = [
    {
      icon: CarFront,
      title: "Buying a Vehicle",
      description: "Choose, reserve and purchase your next car.",
      questions: "6 Articles",
    },
    {
      icon: Gauge,
      title: "Test Drives",
      description: "Book and prepare for your vehicle test drive.",
      questions: "4 Articles",
    },
    {
      icon: SearchCheck,
      title: "Vehicle Inspection",
      description: "Learn about inspection, history and condition.",
      questions: "5 Articles",
    },
    {
      icon: CreditCard,
      title: "Financing",
      description: "Explore financing options and requirements.",
      questions: "7 Articles",
    },
    {
      icon: Repeat2,
      title: "Trade-In",
      description: "Find out how to value your current vehicle.",
      questions: "4 Articles",
    },
    {
      icon: Headphones,
      title: "After-Sales Support",
      description: "Get support after purchasing your vehicle.",
      questions: "5 Articles",
    },
  ];

  return (
    <section
      className="
        w-full overflow-hidden bg-white px-6 py-14 md:px-12 md:py-16
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">

       {/**Header */}
        <div className="mb-10">

          {/* Small Label */}
          <div className="flex items-center justify-center md:justify-start gap-3">

            <span
              className="
                h-[2px] w-8 rounded-full bg-orange-600 sm:w-14
              "
            />

            <div
              className="
                inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3.5 py-2
              "
            >
              <Car
                size={14}
                strokeWidth={2}
                className="text-orange-600"
              />

              <span
                className="
                  text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600
                "
              >
                Quick Help
              </span>
            </div>

            <span
              className="
                h-px w-16 bg-gradient-to-r from-orange-200 to-transparent sm:w-28
              "
            />

          </div>


          {/* Heading */}
          <div className="mt-6 max-w-3xl">

            <h2
              className="
                text-3xl font-bold leading-[1.1] tracking-tight text-gray-950 text-center md:text-start
              "
            >
              What can we{" "}
              <span className="text-orange-600">
                help you with?
              </span>
            </h2>

            <p
              className="
                mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base text-center md:text-start
              "
            >
              Find quick answers and useful information about
              buying, financing, test drives, inspections and
              vehicle ownership.
            </p>

          </div>


          {/* Header Bottom Row */}
          <div
            className="
              mt-7 flex flex-col gap-4 sm:flex-row items-center justify-center sm:justify-between
            "
          >

            {/* Decorative Line */}
            <div className="flex items-center gap-3">

              <div
                className="
                  h-px w-12 bg-gray-200 sm:w-20
                "
              />

              <div
                className="
                  flex h-7 w-7 items-center justify-center rounded-full border border-orange-200 bg-white
                  text-orange-600
                "
              >
                <Car
                  size={13}
                  strokeWidth={1.8}
                />
              </div>

              <div
                className="
                  h-px w-12 bg-gray-200 sm:w-20
                "
              />

            </div>


            {/* Support Status */}
            <div
              className="
                inline-flex w-fit items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50
                px-3.5 py-2
              "
            >

              {/* Online Indicator */}
              <span className="relative flex h-2 w-2">

                <span
                  className="
                    absolute inset-0 animate-ping rounded-full bg-green-400 opacity-70
                  "
                />

                <span
                  className="
                    relative block h-2 w-2 rounded-full bg-green-500
                  "
                />

              </span>

              <span
                className="
                  text-[10px] font-bold uppercase tracking-wider text-gray-600
                "
              >
                Suna Motors Support
              </span>

              <span className="h-3 w-px bg-gray-300" />

              <span
                className="
                  text-[10px] font-medium text-gray-400
                "
              >
                Here to assist
              </span>

            </div>

          </div>

        </div>


        {/* =====================================================
            CATEGORY CARDS
        ====================================================== */}
        <div
          className="
            grid gap-4 sm:grid-cols-2 lg:grid-cols-3
          "
        >

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <button
                key={category.title}
                type="button"
                className="
                  group relative min-h-[165px] overflow-hidden rounded-2xl border border-gray-200 bg-gray-50
                  p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200
                  hover:bg-white hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:p-6
                "
              >

                {/* Background Number */}
                <span
                  className="
                    pointer-events-none absolute -right-2 -top-6 select-none text-[88px] font-black leading-none
                    text-gray-100 transition-all duration-500 group-hover:text-orange-50
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* Soft Glow */}
                <span
                  className="
                    pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-orange-500/0
                    blur-3xl transition-all duration-500 group-hover:bg-orange-500/10
                  "
                />


                {/* Top Row */}
                <div
                  className="
                    relative z-10 flex  items-start  justify-between
                  "
                >

                  {/* Icon */}
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600
                      transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-lg
                      group-hover:shadow-orange-600/20
                    "
                  >
                    <Icon
                      size={20}
                      strokeWidth={2}
                    />
                  </div>


                  {/* Arrow */}
                  <span
                    className="
                      flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white
                      text-gray-400 transition-all duration-300 group-hover:border-orange-600 group-hover:bg-orange-600
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                      "
                    />
                  </span>

                </div>


                {/* Card Content */}
                <div className="relative z-10 mt-4">

                  <h3
                    className="
                      text-base font-bold text-gray-900 transition-colors duration-300 group-hover:text-orange-600
                    "
                  >
                    {category.title}
                  </h3>

                  <p
                    className="
                      mt-1 max-w-[290px] text-xs leading-5 text-gray-500
                    "
                  >
                    {category.description}
                  </p>

                </div>


                {/* Card Footer */}
                <div
                  className="
                    relative z-10 mt-4 flex items-center justify-between border-t border-gray-200/80 pt-3
                  "
                >

                  <span
                    className="
                      text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400
                    "
                  >
                    {category.questions}
                  </span>

                  <span
                    className="
                      inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-orange-600
                      opacity-0 transition-all duration-300 group-hover:opacity-100
                    "
                  >
                    Explore
                    <ArrowUpRight size={12} />
                  </span>

                </div>


                {/* Bottom Orange Accent */}
                <span
                  className="
                    absolute bottom-0 left-0 h-[3px]
                    w-0 bg-orange-600 transition-all duration-500 group-hover:w-full
                  "
                />

              </button>
            );
          })}

        </div>


        {/* =====================================================
            BOTTOM CONTACT PROMPT
        ====================================================== */}
        <div className="mt-8">

          <div
            className="
              flex flex-col gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between
              sm:px-5
            "
          >

            {/* Left */}
            <div className="flex items-center gap-3">

              <div
                className="
                  flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600
                "
              >
                <MessageCircle
                  size={18}
                  strokeWidth={2}
                />
              </div>

              <div>

                <p
                  className="
                    text-sm font-semibold text-gray-900
                  "
                >
                  Still need help?
                </p>

                <p
                  className="
                    mt-0.5 text-xs text-gray-500
                  "
                >
                  Our team is ready to answer your questions.
                </p>

              </div>

            </div>


            {/* Contact Button */}
            <button
              type="button"
              className="
                inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-xs
                font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-orange-600
                hover:shadow-lg hover:shadow-orange-600/20 group
              "
            >
              Contact Support
              <ArrowUpRight size={14} 
              className="group-hover:translate-x-1 duration-300 transition-all"
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default QuickHelp;