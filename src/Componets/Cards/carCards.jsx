import React from "react";
import { ArrowUpRight, Gauge, Fuel, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={car.image}
          alt={car.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* Image Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent
          "
        />

        {/* Condition */}
        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-white/95
            px-3
            py-1.5
            text-xs
            font-semibold
            text-gray-800
            shadow-sm
          "
        >
          {car.condition}
        </span>

        {/* Status */}
        {car.status && (
          <span
            className="
              absolute
              right-4
              top-4
              rounded-full
              bg-orange-600
              px-3
              py-1.5
              text-xs
              font-semibold
              text-white
            "
          >
            {car.status}
          </span>
        )}

        {/* Vehicle name on image */}
        <div className="absolute bottom-4 left-5">
          <p className="text-xs font-medium uppercase tracking-wider text-white/70">
            {car.year} • {car.category}
          </p>

          <h3 className="mt-1 text-xl font-bold text-white">
            {car.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Price */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Price
            </p>

            <p className="mt-1 text-xl font-bold text-gray-900">
              {car.priceDisplay}
            </p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600">
            <ArrowUpRight size={19} />
          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-3 border-y border-gray-100 py-4">

          {/* Mileage */}
          <div className="flex flex-col items-center border-r border-gray-100">
            <Gauge
              size={18}
              className="mb-1 text-orange-600"
              strokeWidth={1.8}
            />

            <span className="text-[11px] text-gray-400">
              Mileage
            </span>

            <span className="mt-0.5 text-xs font-semibold text-gray-800">
              {car.specifications.mileage}
            </span>
          </div>

          {/* Fuel */}
          <div className="flex flex-col items-center border-r border-gray-100">
            <Fuel
              size={18}
              className="mb-1 text-orange-600"
              strokeWidth={1.8}
            />

            <span className="text-[11px] text-gray-400">
              Fuel
            </span>

            <span className="mt-0.5 text-xs font-semibold text-gray-800">
              {car.specifications.fuelType}
            </span>
          </div>

          {/* Transmission */}
          <div className="flex flex-col items-center">
            <Settings2
              size={18}
              className="mb-1 text-orange-600"
              strokeWidth={1.8}
            />

            <span className="text-[11px] text-gray-400">
              Transmission
            </span>

            <span className="mt-0.5 text-xs font-semibold text-gray-800">
              {car.specifications.transmission}
            </span>
          </div>

        </div>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
          {car.shortDescription || car.description}
        </p>

        {/* Button */}
        <Link
          to={`/vehicles/${car.id}`}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-gray-900
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-orange-600
          "
        >
          View Vehicle Details
          <ArrowUpRight size={17} />
        </Link>
      </div>

      {/* Bottom hover accent */}
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
  );
};

export default CarCard;