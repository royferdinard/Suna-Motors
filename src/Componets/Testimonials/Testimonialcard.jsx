import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faQuoteLeft,
  faCarSide,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Avatar from "./Avatar";
import StarRating from "./Starrating";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TestimonialCard = ({ testimonial }) => {
  const { name, location, vehicle, rating, testimonial: quote } = testimonial;

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
          ease: "easeOut",
        },
      }}
      className="
        group
        relative
        flex
        min-h-[350px]
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-white/[0.08]
        bg-[#0d0d0d]
        p-7
        shadow-2xl
        shadow-black/20
        transition-all
        duration-500
        hover:border-amber-400/30
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-amber-400/[0.06]
          blur-3xl
          transition-all
          duration-500
          group-hover:bg-amber-400/[0.12]
        "
      />

      {/* Decorative quote */}
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="
          pointer-events-none
          absolute
          right-7
          top-7
          text-5xl
          text-white/[0.04]
          transition-all
          duration-500
          group-hover:text-amber-400/[0.08]
        "
      />

      {/* Top section */}
      <div className="relative flex items-center justify-between">
        {/* Rating */}
        <div
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-amber-400/10
            bg-amber-400/[0.06]
            px-3
            py-2
          "
        >
          <StarRating rating={rating} size="sm" />

          <span className="text-xs font-bold text-amber-400">{rating}.0</span>
        </div>

        {/* Verified */}
        <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
          <FontAwesomeIcon icon={faCircleCheck} className="text-amber-400" />
          Verified
        </div>
      </div>

      {/* Quote */}
      <div className="relative mt-8 flex-1">
        <p
          className="
            text-[15px]
            font-medium
            leading-7
            tracking-[-0.01em]
            text-gray-300
          "
        >
          "{quote}"
        </p>
      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

      {/* Customer */}
      <div className="relative flex items-center gap-4">
        <div className="relative">
          <Avatar name={name} size="md" />

          <span
            className="
              absolute
              -bottom-1
              -right-1
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              border-2
              border-[#0d0d0d]
              bg-amber-400
            "
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[9px] text-black"
            />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-bold text-white">{name}</h3>

          <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
            <FontAwesomeIcon icon={faLocationDot} className="text-[10px]" />
            {location}
          </p>
        </div>
      </div>

      {/* Vehicle badge */}
      <div className="mt-5 flex items-center justify-between">
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-white/[0.03]
            px-3
            py-2
            transition-all
            duration-300
            group-hover:border-amber-400/20
            group-hover:bg-amber-400/[0.05]
          "
        >
          <FontAwesomeIcon
            icon={faCarSide}
            className="text-xs text-amber-400"
          />

          <span className="text-xs font-semibold text-gray-400 transition-colors group-hover:text-gray-200">
            {vehicle}
          </span>
        </div>

        {/* Bottom accent */}
        <div
          className="
            h-1
            w-8
            rounded-full
            bg-white/10
            transition-all
            duration-500
            group-hover:w-14
            group-hover:bg-amber-400
          "
        />
      </div>
    </motion.article>
  );
};

export default TestimonialCard;
