import React from "react";
import {
  BadgeCheck,
  CarFront,
  ChevronRight,
  CircleDollarSign,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Checked before you choose",
    description: "Browse makes backed by careful vehicle checks and clear condition details.",
  },
  {
    icon: CircleDollarSign,
    title: "Options for real budgets",
    description: "Compare everyday commuters, family SUVs, pickups, and premium vehicles in one place.",
  },
  {
    icon: BadgeCheck,
    title: "Support beyond the sale",
    description: "Our team helps you narrow down the right model and move forward with confidence.",
  },
];

const MakeHighlights = () => {
  return (
    <section className="relative overflow-hidden bg-gray-950 text-white">
      <div className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12 lg:py-16 xl:px-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-400">
            <CarFront size={15} />
            <span>Make the right first choice</span>
          </div>

          <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            Start with the badge. Find the vehicle that fits.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Every manufacturer brings a different feel to the road. Use our make directory to compare your shortlist, then discover the vehicle that matches your everyday life.
          </p>

          <a
            href="#makes-directory"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-orange-400 transition-colors hover:text-orange-300"
          >
            Explore all makes
            <ChevronRight size={17} />
          </a>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-orange-400/40 hover:bg-white/[0.07]"
              >
                <Icon size={21} className="text-orange-400" />
                <h3 className="mt-8 text-base font-black leading-snug text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-gray-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MakeHighlights;
