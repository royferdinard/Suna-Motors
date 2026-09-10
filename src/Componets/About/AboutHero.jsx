import React from "react";
import heroBg from "../../assets/Images/Backgrounds/Hero-Bg/bg1.jpeg";

const AboutHero = () => {
  return (
    <section className="relative flex min-h-[55vh] w-full items-center overflow-hidden pt-18">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Suna Motors showroom with a lineup of quality used vehicles"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-gray-950/20" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/30 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-16">
        <div className="max-w-2xl text-left">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            About Suna Motors
          </span>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Driven by Trust.{" "}
            <span className="text-orange-600">Built for Your Journey.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-200 sm:text-lg">
            At Suna Motors, we help you find the right vehicle with honest
            guidance and a straightforward buying experience, from the first
            search to the day you drive away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
