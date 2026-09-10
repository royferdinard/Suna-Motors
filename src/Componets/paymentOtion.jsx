import {
  Building2,
  CreditCard,
  HandCoins,
  Smartphone,
} from "lucide-react";
import React from "react";

const PaymentOption = () => {
  const options = [
    {
      name: "Cash Payment",
      description:
        "Pay securely with cash at our dealership or designated payment centers.",
      icon: HandCoins,
    },
    {
      name: "Credit Payment",
      description:
        "Flexible payment options available through selected credit facilities.",
      icon: CreditCard,
    },
    {
      name: "Bank Financing",
      description:
        "Access vehicle financing through our partner banks and financial institutions.",
      icon: Building2,
    },
    {
      name: "E-Money",
      description:
        "Convenient electronic payment options for a fast and secure payment experience.",
      icon: Smartphone,
    },
  ];

  return (
    <section className="w-full bg-white pb-8 -mt-14 z-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* One Long Card */}
        <div
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-sm
            transition-all
            duration-500
            hover:shadow-xl
          "
        >
          {/* Top Accent */}
          <div className="h-1 w-full bg-orange-600" />

          <div className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">

            {options.map((option, index) => {
              const Icon = option.icon;

              return (
                <div
                  key={index}
                  className="
                    group/item
                    relative
                    p-7
                    lg:p-8
                    transition-all
                    duration-300
                    hover:bg-orange-50/50
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-5
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-orange-50
                      text-orange-600
                      transition-all
                      duration-300
                      group-hover/item:bg-orange-600
                      group-hover/item:text-white
                      group-hover/item:scale-105
                    "
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {option.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-6 text-gray-600">
                    {option.description}
                  </p>

                  {/* Hover Indicator */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-orange-600
                      transition-all
                      duration-300
                      group-hover/item:w-full
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PaymentOption;