import React from "react";
import {
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
  BsClock,
  BsArrowUpRight,
  BsWhatsapp,
} from "react-icons/bs";

const ContactDetails = () => {
  const details = [
    {
      name: "Phone",
      det: "0768 347 102 or 0728 166 487",
      icon: <BsTelephone />,
      desc: "Call us directly",
      action: "Call Now",
      href: "tel:0768347102",
      type: "phone",
    },
    {
      name: "Email",
      det: "sunamotorbazaar2026@gmail.com",
      icon: <BsEnvelope />,
      desc: "Send us an email",
      action: "Send Email",
      href: "mailto:sunamotorbazaar2026@gmail.com",
      type: "email",
    },
    {
      name: "Location",
      det: "Kenya",
      icon: <BsGeoAlt />,
      desc: "Visit Suna Motors",
      action: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=Suna+Motor+bazaar",
      type: "location",
    },
    {
      name: "Working Hours",
      det: (
        <div className="space-y-1">
          <p>Mon – Fri: 06:00 AM – 07:00 PM</p>
          <p>Sat – Sun: 07:00 AM – 06:00 PM</p>
        </div>
      ),
      icon: <BsClock />,
      desc: "We're available to assist you",
      action: "View Hours",
      href: "#working-hours",
      type: "hours",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-14 md:px-12">
      <div className="mx-auto w-full max-w-[1600px]">

        {/* ================= HEADING ================= */}
        <div className="mb-10 max-w-3xl">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-600" />

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-600">
              Contact Information
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl lg:leading-[1.08]">
            We're here to{" "}
            <span className="text-orange-600">help.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Whether you have a question about a vehicle, want to schedule a
            visit, or simply need more information, we're always ready to
            assist you.
          </p>
        </div>

        {/* ================= MAIN CARD ================= */}
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-gray-50
            shadow-sm
            shadow-gray-200/40
          "
        >

          {/* Orange Top Accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400" />

          <div className="p-5 sm:p-7 lg:p-9">

            {/* ================= CARD HEADER ================= */}
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
                    Suna Motors
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-950 sm:text-2xl">
                  Get in touch with us
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  We're ready to help you find your next vehicle.
                </p>
              </div>

              {/* Availability */}
              <div
                className="
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-green-200
                  bg-green-50
                  px-4
                  py-2
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>

                <span className="text-xs font-semibold text-green-700">
                  Available to assist
                </span>
              </div>

            </div>

            {/* ================= DETAILS ================= */}
            <div
              className="
                grid
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {details.map((item, index) => (
                <div
                  key={index}
                  className={`
                    group
                    relative
                    flex
                    min-h-[285px]
                    flex-col
                    p-5
                    sm:p-6
                    transition-all
                    duration-300
                    hover:bg-gray-50
                    ${
                      index !== 0
                        ? "border-t border-gray-200 sm:border-t-0 sm:border-l"
                        : ""
                    }
                    ${
                      index === 2
                        ? "lg:border-l"
                        : ""
                    }
                  `}
                >

                  {/* ================= ICON + NUMBER ================= */}
                  <div className="mb-5 flex items-center justify-between">

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        bg-orange-100
                        text-xl
                        text-orange-600
                        transition-all
                        duration-300
                        group-hover:bg-orange-600
                        group-hover:text-white
                        group-hover:shadow-lg
                        group-hover:shadow-orange-600/20
                      "
                    >
                      {item.icon}
                    </div>

                    <span
                      className="
                        text-[11px]
                        font-bold
                        tracking-[0.15em]
                        text-gray-300
                        transition-colors
                        group-hover:text-orange-200
                      "
                    >
                      0{index + 1}
                    </span>

                  </div>

                  {/* ================= LABEL ================= */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    {item.name}
                  </p>

                  {/* ================= MAIN DETAIL ================= */}
                  <div className="mt-2 min-h-[58px] text-sm font-semibold leading-6 text-gray-900">
                    {item.det}
                  </div>

                  {/* ================= DESCRIPTION ================= */}
                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {item.desc}
                  </p>

                  {/* ================= ACTION BUTTON ================= */}
                  <div className="mt-auto pt-6">

                    <a
                      href={item.href}
                      target={
                        item.type === "location" ? "_blank" : undefined
                      }
                      rel={
                        item.type === "location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="
                        group/button
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        px-4
                        py-3
                        text-xs
                        font-bold
                        text-gray-800
                        shadow-sm
                        transition-all
                        duration-300
                        hover:border-orange-600
                        hover:bg-orange-600
                        hover:text-white
                        hover:shadow-lg
                        hover:shadow-orange-600/20
                        active:scale-[0.98]
                      "
                    >
                      <span>{item.action}</span>

                      <span
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-lg
                          bg-gray-100
                          text-gray-600
                          transition-all
                          duration-300
                          group-hover/button:bg-white/20
                          group-hover/button:text-white
                        "
                      >
                        <BsArrowUpRight
                          className="
                            transition-transform
                            duration-300
                            group-hover/button:translate-x-0.5
                            group-hover/button:-translate-y-0.5
                          "
                        />
                      </span>
                    </a>

                  </div>

                  {/* ================= HOVER LINE ================= */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-orange-600
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </div>
              ))}

            </div>

            {/* ================= QUICK CONTACT BAR ================= */}
            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <BsWhatsapp size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold text-gray-900">
                    Prefer WhatsApp?
                  </p>

                  <p className="mt-0.5 text-[11px] text-gray-500">
                    Chat with our team instantly.
                  </p>
                </div>

              </div>

              <a
                href="https://wa.me/254768347102"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-green-600
                  px-5
                  py-3
                  text-xs
                  font-bold
                  text-white
                  shadow-lg
                  shadow-green-600/20
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-green-700
                  active:scale-[0.98]
                "
              >
                <BsWhatsapp size={15} />
                Chat on WhatsApp
                <BsArrowUpRight />
              </a>

            </div>

          </div>
        </div>

        {/* ================= BOTTOM TRUST LINE ================= */}
        <div className="mt-5 flex flex-col gap-2 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <span>
              Professional assistance from the Suna Motors team
            </span>
          </div>

          <span className="font-medium text-gray-400">
            Quality vehicles. Trusted service.
          </span>

        </div>

      </div>
    </section>
  );
};

export default ContactDetails;