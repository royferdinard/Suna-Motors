import React from "react";
import { Award, Car, CircleCheck, ShieldCheck, Users } from "lucide-react";

import car from "../assets/Images/Vehicles/noah.jpg";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Quality You Can Trust",
      description:
        "Every vehicle is carefully selected and inspected for quality and reliability.",
    },
    {
      icon: Award,
      title: "Exceptional Value",
      description:
        "We offer quality pre-owned vehicles at competitive and transparent prices.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "Our team is committed to providing a smooth and professional experience.",
    },
    {
      icon: CircleCheck,
      title: "Reliable Vehicles",
      description:
        "Choose from dependable vehicles selected to meet different driving needs.",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-6 px-6 md:px-12 md:py-10">
      <div className="mx-auto grid w-full overflow-hidden rounded-xl border border-gray-50 bg-blue-50 shadow-lg lg:grid-cols-2">
        {/* ================= CONTENT ================= */}
        <div
          className="
            relative
            z-10
            px-6
            py-16
            sm:px-10
            lg:px-14
            lg:py-20
            xl:px-20
            xl:py-24
            bg-[#0b0f14]
            lg:[clip-path:polygon(0_0,92%_0,100%_50%,92%_100%,0_100%)]
            [clip-path:polygon(0_0,100%_0,100%_92%,50%_100%,0_92%)]
          "
        >
          <div className="mb-10">
            {/* Decorative Divider */}
            <div className="mt-0 flex md:hidden items-center justify-center gap-4">
              {/* Left Line */}
              <div
                className=" h-px w-16 bg-gradient-to-r from-transparent to-orange-600 sm:w-24
                 "
              />

              {/* Car Icon */}
              <span className=" flex h-11 w-11 items-center justify-center rounded-full border border-orange-600 bg-orange-600 text-white shadow-sm">
                <Car size={21} strokeWidth={1.8} />
              </span>

              {/* Right Line */}
              <div className=" h-px w-16 bg-gradient-to-l from-transparent to-orange-600 sm:w-24 " />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white text-center md:text-start sm:text-4xl">
              Why Choose Us?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-300 sm:text-base text-center md:text-start">
              We are committed to making your vehicle experience simple,
              reliable, and trustworthy from the first click to the final
              handover.
            </p>
          </div>

          <div className="space-y-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-orange-500/50 hover:bg-white/8 hover:shadow-[0_12px_30px_-20px_rgba(249,115,22,0.8)]"
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-orange-50
                      text-orange-600
                      ring-1 ring-orange-100
                      transition-all
                      duration-300
                      group-hover:bg-orange-600
                      group-hover:text-white
                      group-hover:ring-orange-200
                    "
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {reason.title}
                    </h3>

                    <p className="mt-1 max-w-md text-sm leading-6 text-gray-300">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div
          className="relative min-h-[500px] lg:min-h-full
        lg:[clip-path:none]
        [clip-path:polygon(0_0,50%_12%,100%_0,100%_100%,0_100%)]
        lg:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,9%_50%)]
        -mt-13 md:-mt-0 md:-ml-12
        "
        >
          <img
            src={car}
            alt="Suna Motors vehicle"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/10 to-black/30" />

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-32
              bg-gradient-to-t
              from-black/70
              to-transparent
            "
          />

          <div className="absolute bottom-8 right-8 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-sm shadow-lg">
            <Car size={20} className="text-orange-400" />

            <span className="text-sm font-medium tracking-wide">
              Drive With Confidence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
