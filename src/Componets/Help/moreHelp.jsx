import React from "react";
import {
  Video,
  Mic,
  Phone,
  MessageCircle,
  Mail,
  ArrowUpRight,
  Headphones,
  Clock3,
  Sparkles,
  Play,
  CircleDot,
} from "lucide-react";
import { FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

const StillNeedHelp = () => {
  const supportOptions = [
    {
      title: "Video Call",
      description: "Speak face-to-face with our team.",
      action: "Start Call",
      icon: Video,
      type: "video",
      featured: true,
    },
    {
      title: "Voice Message",
      description: "Record and send us a voice note.",
      action: "Record",
      icon: Mic,
      type: "voice",
    },
    {
      title: "Call Us",
      description: "Speak directly with our team.",
      action: "Call Now",
      icon: Phone,
      type: "phone",
      href: "tel:0768347102",
    },
    {
      title: "Live Chat",
      description: "Chat with a Suna Motors agent.",
      action: "Start Chat",
      icon: MessageCircle,
      type: "chat",
    },
    {
      title: "Send Message",
      description: "Send us your vehicle enquiry.",
      action: "Send",
      icon: Mail,
      type: "message",
      href: "/contact",
    },
    {
      title: "WhatsApp",
      description: "Chat with us instantly.",
      action: "Open WhatsApp",
      icon: FaWhatsapp,
      type: "whatsapp",
      href: "https://wa.me/254768347102",
      brand: true,
    },
    {
      title: "Facebook",
      description: "Connect with us on Facebook.",
      action: "Visit Page",
      icon: FaFacebook,
      type: "facebook",
      href: "#",
      brand: true,
    },
     {
      title: "Tiktok",
      description: "Market us on Tiktok",
      action: "Visit Page",
      icon: FaTiktok,
      type: "tiktok",
      href: "#",
      brand: true,
    },
  ];

  const handleSupportClick = (option) => {
    if (option.type === "video") {
      alert("Video call feature coming soon.");
      return;
    }

    if (option.type === "voice") {
      alert("Voice message feature coming soon.");
      return;
    }

    if (option.type === "chat") {
      alert("Live chat feature coming soon.");
      return;
    }
  };

  return (
    <section className="w-full bg-white px-6 py-14 md:px-12">
      <div className="mx-auto w-full">

        {/* =====================================================
            MAIN SUPPORT PANEL
        ===================================================== */}

        <div className="relative overflow-hidden rounded-3xl bg-[#080b0f] text-white shadow-[0_25px_80px_rgba(0,0,0,0.18)]">

          {/* Background glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-orange-500/[0.06] blur-[100px]" />

          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Content */}
          <div className="relative p-6 sm:p-8 lg:p-10 xl:p-12">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

              {/* Header text */}
              <div className="max-w-2xl">

                {/* Label */}
                <div className="mb-5 flex items-center gap-3">

                  <span className="h-[2px] w-10 bg-orange-500" />

                  <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5">

                    <Headphones
                      size={13}
                      className="text-orange-400"
                    />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-orange-400">
                      Customer Support
                    </span>

                  </div>

                </div>

                {/* Heading */}
                <h2 className="text-3xl font-black leading-tight tracking-tight md:text-4xl">

                  Still need{" "}

                  <span className="text-orange-500">
                    help?
                  </span>

                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                  Don't worry. Choose how you'd like to
                  reach us and our team will help you with
                  your vehicle enquiry.
                </p>

              </div>


              {/* =================================================
                  AVAILABILITY
              ================================================= */}

              <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 shadow-inner">

                <div className="relative flex h-3 w-3">

                  <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-60" />

                  <span className="relative h-3 w-3 rounded-full bg-green-500" />

                </div>

                <div>

                  <p className="text-xs font-bold text-white">
                    We're available
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    Ready to assist you
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                ACTION LABEL
            ================================================= */}

            <div className="mt-10 flex items-center gap-3">

              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">

                <CircleDot size={14} />

              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
                Choose how you want to connect
              </p>

              <div className="hidden h-px flex-1 bg-white/10 sm:block" />

            </div>


            {/* =================================================
                SUPPORT ACTIONS
            ================================================= */}

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

              {supportOptions.map((option) => {

                const Icon = option.icon;

                const isSpecial =
                  option.type === "video" ||
                  option.type === "voice" ||
                  option.type === "chat";

                const isWhatsApp =
                  option.type === "whatsapp";

                const isFacebook =
                  option.type === "facebook";

                const isPhone =
                  option.type === "phone";

                const isExternal =
                  option.href?.startsWith("http");

                const commonClasses = `
                  group
                  relative
                  flex
                  min-h-[170px]
                  cursor-pointer
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  p-5
                  text-left
                  outline-none
                  transition-all
                  duration-200
                  ease-out
                  hover:-translate-y-1
                  hover:shadow-xl
                  active:translate-y-0
                  active:scale-[0.98]
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#080b0f]
                  sm:min-h-[180px]
                  sm:p-6
                `;

                const normalClasses =
                  "border-white/10 bg-[#10151b] hover:border-orange-500/30 hover:bg-[#141a21]";

                const featuredClasses =
                  "border-orange-500 bg-orange-500 shadow-lg shadow-orange-500/20 hover:bg-orange-400 hover:shadow-orange-500/30";

                const whatsappClasses =
                  "border-green-500/20 bg-green-500/[0.07] hover:border-green-500/40 hover:bg-green-500/[0.10]";

                return (
                  <React.Fragment key={option.title}>

                    {isSpecial ? (

                      <button
                        type="button"
                        onClick={() =>
                          handleSupportClick(option)
                        }
                        className={`
                          ${commonClasses}
                          ${
                            option.featured
                              ? featuredClasses
                              : normalClasses
                          }
                        `}
                      >

                        {/* Shine effect */}
                        <span className="pointer-events-none absolute -left-20 top-0 h-full w-20 -skew-x-12 bg-white/10 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                        {/* Top */}
                        <div className="relative flex items-start justify-between">

                          <div
                            className={`
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-xl
                              shadow-sm
                              transition-all
                              duration-200
                              group-hover:scale-105
                              group-active:scale-95

                              ${
                                option.featured
                                  ? "bg-white/15 text-white"
                                  : "bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white"
                              }
                            `}
                          >
                            <Icon size={21} />
                          </div>


                          <div
                            className={`
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-full
                              transition-all
                              duration-200
                              group-hover:translate-x-0.5
                              group-hover:-translate-y-0.5

                              ${
                                option.featured
                                  ? "bg-white/15 text-white"
                                  : "bg-white/5 text-gray-500 group-hover:bg-orange-500 group-hover:text-white"
                              }
                            `}
                          >
                            <ArrowUpRight size={15} />
                          </div>

                        </div>


                        {/* Content */}
                        <div className="relative mt-auto pt-7">

                          <h3
                            className={`
                              text-sm font-black

                              ${
                                option.featured
                                  ? "text-white"
                                  : "text-white"
                              }
                            `}
                          >
                            {option.title}
                          </h3>

                          <p
                            className={`
                              mt-1.5
                              max-w-[220px]
                              text-[11px]
                              leading-5

                              ${
                                option.featured
                                  ? "text-white/70"
                                  : "text-gray-500"
                              }
                            `}
                          >
                            {option.description}
                          </p>

                        </div>


                        {/* Action */}
                        <div
                          className={`
                            relative
                            mt-4
                            flex
                            items-center
                            gap-2
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.15em]

                            ${
                              option.featured
                                ? "text-white/80"
                                : "text-orange-500"
                            }
                          `}
                        >

                          {option.type === "video" && (
                            <Play size={11} fill="currentColor" />
                          )}

                          {option.type === "voice" && (
                            <Mic size={11} />
                          )}

                          {option.type === "chat" && (
                            <MessageCircle size={11} />
                          )}

                          <span>
                            {option.action}
                          </span>

                        </div>

                      </button>

                    ) : (

                      <a
                        href={option.href}
                        target={
                          isExternal
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          isExternal
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`
                          ${commonClasses}

                          ${
                            isWhatsApp
                              ? whatsappClasses
                              : normalClasses
                          }
                        `}
                      >

                        {/* Shine */}
                        <span className="pointer-events-none absolute -left-20 top-0 h-full w-20 -skew-x-12 bg-white/10 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />


                        {/* Top */}
                        <div className="relative flex items-start justify-between">

                          <div
                            className={`
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-xl
                              transition-all
                              duration-200
                              group-hover:scale-105
                              group-active:scale-95

                              ${
                                isWhatsApp
                                  ? "bg-green-500/15 text-green-400 group-hover:bg-green-500 group-hover:text-white"
                                  : isFacebook
                                  ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white"
                                  : isPhone
                                  ? "bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white"
                                  : "bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white"
                              }
                            `}
                          >
                            <Icon size={21} />
                          </div>


                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-orange-500 group-hover:text-white">

                            <ArrowUpRight size={15} />

                          </div>

                        </div>


                        {/* Content */}
                        <div className="relative mt-auto pt-7">

                          <h3 className="text-sm font-black text-white">
                            {option.title}
                          </h3>

                          <p className="mt-1.5 max-w-[220px] text-[11px] leading-5 text-gray-500">
                            {option.description}
                          </p>

                        </div>


                        {/* Action */}
                        <div
                          className={`
                            relative
                            mt-4
                            flex
                            items-center
                            gap-2
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.15em]

                            ${
                              isWhatsApp
                                ? "text-green-400"
                                : isFacebook
                                ? "text-blue-400"
                                : "text-orange-500"
                            }
                          `}
                        >

                          {isWhatsApp ? (
                            <FaWhatsapp size={12} />
                          ) : isFacebook ? (
                            <FaFacebook size={12} />
                          ) : isPhone ? (
                            <Phone size={11} />
                          ) : (
                            <Mail size={11} />
                          )}

                          <span>
                            {option.action}
                          </span>

                        </div>

                      </a>

                    )}

                  </React.Fragment>
                );
              })}

            </div>


            {/* =================================================
                QUICK CONTACT BAR
            ================================================= */}

            <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-3">

              {/* Phone */}
              <a
                href="tel:0768347102"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:border-orange-500/30 hover:bg-white/[0.06] active:scale-[0.98]"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition group-hover:bg-green-500 group-hover:text-white">
                  <Phone size={17} />
                </div>

                <div className="min-w-0">

                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                    Call us directly
                  </p>

                  <p className="mt-1 truncate text-xs font-bold text-gray-200">
                    0768 347 102
                  </p>

                </div>

                <ArrowUpRight
                  size={15}
                  className="ml-auto text-gray-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-500"
                />

              </a>


              {/* WhatsApp */}
              <a
                href="https://wa.me/254768347102"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-200 hover:border-green-500/30 hover:bg-white/[0.06] active:scale-[0.98]"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400 transition group-hover:bg-green-500 group-hover:text-white">
                  <FaWhatsapp size={19} />
                </div>

                <div className="min-w-0">

                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-xs font-bold text-gray-200">
                    Chat with our team
                  </p>

                </div>

                <ArrowUpRight
                  size={15}
                  className="ml-auto text-gray-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green-400"
                />

              </a>


              {/* Working Hours */}
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-gray-400">
                  <Clock3 size={17} />
                </div>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                    Support Hours
                  </p>

                  <p className="mt-1 text-xs font-bold text-gray-200">
                    Mon–Fri · 06:00 AM – 07:00 PM
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                FOOTER MESSAGE
            ================================================= */}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-2">

                <Sparkles
                  size={14}
                  className="shrink-0 text-orange-500"
                />

                <p className="text-[10px] text-gray-500">
                  Choose your preferred way to connect.
                </p>

              </div>

              <p className="text-[10px] font-semibold text-gray-600">
                Suna Motors Customer Care
              </p>

            </div>

          </div>


          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

        </div>

      </div>
    </section>
  );
};

export default StillNeedHelp;