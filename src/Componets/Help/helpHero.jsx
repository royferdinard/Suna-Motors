import React from "react";
import {
  Search,
  MessageCircle,
  ArrowRight,
  CircleHelp,
} from "lucide-react";
import image from "../../assets/Images/Vehicles/v2.jpg";

const HelpHero = () => {

    const popular = [
              "Buying a car",
              "Test drive",
              "Financing",
              "Vehicle inspection",
            ]
  return (
    <section className="relative w-full overflow-hidden bg-[#080b0f] h-[76vh]">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Suna Motors support"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Left gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-transparent to-transparent" />

        {/* Orange glow */}
        <div
          className="
            absolute
            hidden md:block
            -right-32
            top-1/2
            h-96
            w-96
            -translate-y-1/2
            rounded-full
            bg-orange-600/20
            blur-[120px]
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[600px]
          w-full
          max-w-[1600px]
          items-center
          px-6
          py-20
          md:px-20
          md:py-25
        "
      >

        <div className="max-w-3xl">

          {/* Label */}
          <div className="mb-6 flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-500">
              <CircleHelp size={20} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-500">
                Suna Motors
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Help & Support
              </p>
            </div>

          </div>

          {/* Heading */}
          <h1
            className="
              text-4xl
              font-bold
              leading-[1.05]
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            How can we{" "}
            <span className="text-orange-500">
              help you?
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-gray-300
              sm:text-base
              lg:text-lg
            "
          >
            Find answers about buying a vehicle, test drives,
            financing, inspections, trade-ins and everything
            you need to know about your next car.
          </p>

          {/* Search */}
          <div
            className="
              mt-8
              flex
              w-full
              max-w-2xl
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/10
              p-2
              backdrop-blur-xl
              shadow-2xl
            "
          >

            <Search
              size={20}
              className="ml-3 shrink-0 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search for a question..."
              className="
                min-w-0
                flex-1
                bg-transparent
                px-2
                py-3
                text-sm
                text-white
                outline-none
                placeholder:text-gray-500
                sm:text-base
              "
            />

            <button
              type="button"
              className="
                hidden
                items-center
                gap-2
                rounded-xl
                bg-orange-600
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-orange-500
                sm:flex
              "
            >
              Search
              <ArrowRight size={16} />
            </button>

          </div>

          {/* Popular searches */}
          <div className="mt-5 flex flex-wrap items-center gap-2">

            <span className="mr-1 text-xs text-gray-500">
              Popular:
            </span>

            {popular.map((item) => (
              <button
                key={item}
                type="button"
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-2.5
                  py-1.5
                  text-xs
                  text-gray-400
                  transition-all
                  duration-300
                  hover:border-orange-500/40
                  hover:bg-orange-500/10
                  hover:text-orange-400
                "
              >
                {item}
              </button>
            ))}

          </div>

          {/* Contact support */}
          <div className="mt-8 flex flex-wrap items-center gap-4">

            <button
              type="button"
              className="
                group
                flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-white
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-green-500/10
                  text-green-500
                  transition-all
                  duration-300
                  group-hover:bg-green-500
                  group-hover:text-white
                "
              >
                <MessageCircle size={18} />
              </span>

              Talk to our team

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>

        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

    </section>
  );
};

export default HelpHero;