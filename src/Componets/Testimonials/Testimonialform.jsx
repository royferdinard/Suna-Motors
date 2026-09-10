import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faXmark,
  faQuoteLeft,
  faCar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const CATEGORY_OPTIONS = ["SUV", "Sedan", "Luxury", "Commercial"];

const EMPTY_FORM = {
  name: "",
  location: "",
  vehicle: "",
  category: "Sedan",
  rating: 0,
  testimonial: "",
};

const TestimonialForm = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.vehicle.trim()) nextErrors.vehicle = "Vehicle is required.";
    if (!form.rating) nextErrors.rating = "Please choose a rating.";
    if (!form.testimonial.trim())
      nextErrors.testimonial = "Share a few words about your experience.";

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    onSubmit({
      ...form,
      name: form.name.trim(),
      location: form.location.trim() || "Kenya",
      vehicle: form.vehicle.trim(),
      testimonial: form.testimonial.trim(),
    });

    setForm(EMPTY_FORM);
    setErrors({});
  };

  const handleClose = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-md"
          onClick={handleClose}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/10 blur-[120px]" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-form-title"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[28px] border border-white/10 bg-[#0b0b0b] shadow-2xl shadow-black/50"
          >
            {/* Top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-orange-600 to-transparent" />

            {/* Header */}
            <div className="relative border-b border-white/10 px-6 pb-6 pt-7 sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-600/10">
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-lg text-orange-600"
                    />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
                      Customer Story
                    </p>

                    <h2
                      id="testimonial-form-title"
                      className="text-2xl font-bold tracking-tight text-white"
                    >
                      Share your experience
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Tell us about your journey with Suna Motors.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close form"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 px-6 py-7 sm:px-8"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={`w-full rounded-2xl border bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-gray-600 outline-none transition-all ${
                    errors.name
                      ? "border-red-500/50"
                      : "border-white/10 focus:border-orange-600/60 focus:bg-white/[0.05]"
                  }`}
                />

                {errors.name && (
                  <p className="mt-2 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
                >
                  Location
                </label>

                <div className="relative">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                  />

                  <input
                    id="location"
                    type="text"
                    placeholder="Nairobi, Kenya"
                    value={form.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-gray-600 outline-none transition-all focus:border-orange-600/60 focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              {/* Vehicle + Category */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="vehicle"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Vehicle
                  </label>

                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faCar}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                    />

                    <input
                      id="vehicle"
                      type="text"
                      placeholder="Toyota Harrier"
                      value={form.vehicle}
                      onChange={(e) => updateField("vehicle", e.target.value)}
                      className={`w-full rounded-2xl border bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-gray-600 outline-none transition-all ${
                        errors.vehicle
                          ? "border-red-500/50"
                          : "border-white/10 focus:border-orange-600/60 focus:bg-white/[0.05]"
                      }`}
                    />
                  </div>

                  {errors.vehicle && (
                    <p className="mt-2 text-xs text-red-400">
                      {errors.vehicle}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Category
                  </label>

                  <select
                    id="category"
                    value={form.category}
                    onChange={(e) => updateField("category", e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all focus:border-orange-600/60 focus:bg-white/[0.05]"
                  >
                    {CATEGORY_OPTIONS.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#111111]"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rating */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Your rating
                  </span>

                  {form.rating > 0 && (
                    <span className="text-sm font-semibold text-orange-600">
                      {form.rating}/5
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <motion.button
                      key={value}
                      type="button"
                      role="radio"
                      aria-checked={form.rating === value}
                      aria-label={`${value} star${value > 1 ? "s" : ""}`}
                      onClick={() => updateField("rating", value)}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1"
                    >
                      <FontAwesomeIcon
                        icon={faStar}
                        className={`h-6 w-6 transition-colors ${
                          value <= form.rating
                            ? "text-orange-600"
                            : "text-gray-700"
                        }`}
                      />
                    </motion.button>
                  ))}

                  <span className="ml-2 hidden text-xs text-gray-600 sm:block">
                    Click to rate your experience
                  </span>
                </div>

                {errors.rating && (
                  <p className="mt-2 text-xs text-red-400">{errors.rating}</p>
                )}
              </div>

              {/* Testimonial */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="testimonial"
                    className="text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Your experience
                  </label>

                  <span className="text-xs text-gray-600">
                    {form.testimonial.length}/500
                  </span>
                </div>

                <textarea
                  id="testimonial"
                  rows={5}
                  maxLength={500}
                  placeholder="What did you enjoy about your experience with Suna Motors?"
                  value={form.testimonial}
                  onChange={(e) => updateField("testimonial", e.target.value)}
                  className={`w-full resize-none rounded-2xl border bg-white/[0.03] px-4 py-3.5 text-sm leading-6 text-white placeholder:text-gray-600 outline-none transition-all ${
                    errors.testimonial
                      ? "border-red-500/50"
                      : "border-white/10 focus:border-orange-600/60 focus:bg-white/[0.05]"
                  }`}
                />

                {errors.testimonial && (
                  <p className="mt-2 text-xs text-red-400">
                    {errors.testimonial}
                  </p>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden rounded-2xl bg-orange-600 py-4 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-600/20"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Submit testimonial
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </motion.button>

              <p className="text-center text-xs text-gray-600">
                Your feedback helps us serve our customers better.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TestimonialForm;
