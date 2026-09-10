import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import testimonialsData from "./Testimonialsdata";
import TestimonialHero from "./Testimonialhero";
import FeaturedTestimonial from "./Featuredtestimonial";
import TestimonialFilters from "./Testimonialfilters";
import TestimonialCard from "./Testimonialcard";
import TestimonialForm from "./Testimonialform";
import EmptyState from "./Emptystate";
import Toast from "./Toast";
import CTA from "./Cta";
import TrustStats from "./Truststats";
import Header from "../Header/header";

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Testimonials = () => {
  // Swap this useState for a data-fetching hook (e.g. React Query) once
  // testimonials are served from an API — everything below reads from
  // `testimonials` and doesn't care where it came from.
  const [testimonials, setTestimonials] = useState(testimonialsData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(testimonials.map((t) => t.category)));
    return ["All", ...unique];
  }, [testimonials]);

  const featured = useMemo(
    () => testimonials.find((t) => t.isFeatured) || testimonials[0],
    [testimonials],
  );

  const filteredTestimonials = useMemo(() => {
    if (activeFilter === "All") return testimonials;
    return testimonials.filter((t) => t.category === activeFilter);
  }, [testimonials, activeFilter]);

  const handleAddTestimonial = (formValues) => {
    const newTestimonial = {
      id: Date.now(),
      ...formValues,
    };
    setTestimonials((prev) => [newTestimonial, ...prev]);
    setIsFormOpen(false);
    setToastMessage("Thanks — your testimonial has been added.");
    window.setTimeout(() => setToastMessage(""), 3000);
  };

  return (
    <>
      <Toast message={toastMessage} />

      <TestimonialHero />
      <TrustStats />
      <FeaturedTestimonial testimonial={featured} />
      <Header />
      <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          {/* Header */}
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.3em] text-orange-600">
                Customer Stories
              </span>

              <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                What our customers
                <span className="text-orange-600"> say about us.</span>
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-gray-400">
                Real experiences from people who trusted Suna Motors to find
                their perfect vehicle.
              </p>
            </div>

            {/* Share button */}
            <motion.button
              type="button"
              onClick={() => setIsFormOpen(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white bg-transparent px-6 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600"
            >
              Share your experience
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </motion.button>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <TestimonialFilters
              categories={categories}
              activeFilter={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          {/* Testimonials */}
          {filteredTestimonials.length === 0 ? (
            <div className="mt-14">
              <EmptyState onReset={() => setActiveFilter("All")} />
            </div>
          ) : (
            <motion.div
              variants={gridContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <CTA />

      <TestimonialForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddTestimonial}
      />
    </>
  );
};

export default Testimonials;
