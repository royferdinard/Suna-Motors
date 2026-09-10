import React from "react";
import image from "../../assets/Images/Vehicles/probox2.jpg";
import { ArrowDown, CarFront } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#080b0f]">

      {/* Hero */}
      <div className="relative h-[60vh]">

        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt="Suna Motors vehicle"
            className="h-full w-full object-cover object-center"
          />

          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Left gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080b0f] via-[#080b0f]/75 to-transparent" />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080b0f] to-transparent" />
        </div>

        {/* Decorative glow */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-600/10 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex  max-w-7xl items-center px-6 py-30 ">

          <div className="">

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl ">
              Let’s Talk About
              <span className="block text-orange-500">
                Your Next Car.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
              Have a question about one of our vehicles, need help finding
              the right car, or want to visit us? Our team is ready to help
              you make the right choice.
            </p>


          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 text-gray-400 sm:flex lg:right-14 xl:right-20">
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
            Get in touch
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
            <ArrowDown size={15} />
          </div>
        </div>

      </div>

      {/* Orange accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-600 to-transparent" />

    </section>
  );
};

export default ContactHero;