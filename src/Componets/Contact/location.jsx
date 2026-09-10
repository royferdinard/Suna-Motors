import React from "react";
import {
  MapPin,
  Navigation,
  Phone,
  Clock3,
  ArrowRight,
} from "lucide-react";
import image from "../../assets/Images/Backgrounds/Hero-Bg/bg3.jpg";

const Location = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.845998819653!2d34.46616840723688!3d-1.0738430996187658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d353f8008b9c87%3A0xce432c1d2bccd63!2sSuna%20Motor%20bazaar!5e1!3m2!1sen!2ske!4v1788937212537!5m2!1sen!2ske";

  return (
    <section className="w-full overflow-hidden bg-[#080b0f] px-6 py-16 md:px-12">
      <div className=" w-full">

        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl ">
              Visit Us{" "}
              <span className="text-orange-500">in person.</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              Visit Suna Motors and explore our collection of quality
              pre-owned vehicles. Our team will be happy to assist you.
            </p>
          </div>

          {/* Directions */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Suna+Motor+bazaar"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-orange-500/40
              hover:bg-orange-600
            "
          >
            <Navigation size={17} />

            Get Directions

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>
        </div>

        {/* Main Location Card */}
        <div
          className="
            grid
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#10151b]
            shadow-2xl
            lg:grid-cols-2
          "
        >

          {/* Showroom Image */}
          <div className="relative min-h-[400px] overflow-hidden lg:min-h-[550px]">

            <img
              src={image}
              alt="Suna Motors dealership"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/30
                to-transparent
              "
            />

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

              <div
                className="
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-orange-600
                  text-white
                  shadow-lg
                "
              >
                <MapPin size={21} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Suna Motors
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Our Showroom
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-300">
                Visit us to view our available vehicles and speak with our
                sales team.
              </p>

            </div>
          </div>

          {/* REAL GOOGLE MAP */}
          <div className="relative min-h-[400px] overflow-hidden lg:min-h-[550px]">

            <iframe
              src={mapUrl}
              title="Suna Motor Bazaar Location"
              className="
                absolute
                inset-0
                h-full
                w-full
                border-0
              "
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Map Label */}
            <div
              className="
                absolute
                right-4
                top-4
                rounded-lg
                border
                border-white/50
                bg-white/90
                px-3
                py-2
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-gray-600
                shadow-md
                backdrop-blur
              "
            >
              Suna Motors
            </div>

            {/* Location Information */}
            <div
              className="
                absolute
                bottom-6
                left-6
                right-6
                rounded-2xl
                border
                border-white/60
                bg-white/95
                p-5
                shadow-2xl
                backdrop-blur-md
                sm:left-auto
                sm:w-[320px]
              "
            >

              <div className="flex gap-4">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-orange-100
                    text-orange-600
                  "
                >
                  <MapPin size={18} />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-orange-600
                    "
                  >
                    Suna Motors
                  </p>

                  <h4 className="mt-1 text-sm font-bold text-gray-900">
                    Suna Motor Bazaar
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Quality pre-owned vehicles & trusted service.
                  </p>
                </div>

              </div>

              {/* Contact Details */}
              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-2
                  border-t
                  border-gray-200
                  pt-4
                "
              >

                <div className="flex items-center gap-2">
                  <Phone
                    size={13}
                    className="shrink-0 text-orange-600"
                  />

                  <span className="text-[11px] text-gray-600">
                    0768 347 102
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3
                    size={13}
                    className="shrink-0 text-orange-600"
                  />

                  <span className="text-[11px] text-gray-600">
                    06:00 – 19:00
                  </span>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Location;