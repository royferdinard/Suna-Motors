import React from "react";
import lotImage from "../../assets/Images/Backgrounds/Hero-Bg/bg3.jpg";

const stats = [
  { value: "500+", label: "Vehicles Sold" },
  { value: "10+", label: "Years of Trust" },
  { value: "98%", label: "Happy Customers" },
];

const WhoWeAre = () => {
  return (
    <section className="w-full bg-white py-16 dark:bg-gray-950 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* Image */}
        <div className="relative order-2 lg:order-1">
          {/* Orange accent frame */}
          <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-2xl border-2 border-orange-600/50 sm:block" />

          <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-gray-900/10">
            <img
              src={lotImage}
              alt="The Suna Motors vehicle lot and entrance"
              className="h-full w-full object-cover"
            />

            {/* Subtle bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-transparent" />
          </div>

          {/* Business badge */}
          <div className="absolute -bottom-5 left-5 rounded-xl bg-gray-950 px-5 py-3 shadow-lg sm:left-7">
            <p className="text-2xl font-bold text-orange-600">10+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-300">
              Years in Business
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
            Who We Are
          </span>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
            A dealership built on{" "}
            <span className="text-orange-600">honesty and fit</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Suna Motors is a vehicle dealership focused on helping customers
            find a car that genuinely suits their needs. We know that buying a
            vehicle is a big decision, so we take the time to understand what
            you're looking for and guide you toward options that fit your budget
            and lifestyle.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Our goal is simple: make the vehicle-buying process clear,
            straightforward, and stress-free, from your first visit to the day
            you drive off in your next car.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6 dark:border-gray-800">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
