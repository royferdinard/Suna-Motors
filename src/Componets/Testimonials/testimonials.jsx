import React, { useMemo, useState } from "react";
import { Star, Quote, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import Header from "../Header/header";

// ================= SEED DATA =================
// Replace with real reviews from the backend / CMS when available.
const seedTestimonials = [
  {
    id: 1,
    name: "John Mwangi",
    rating: 5,
    text: "Great service and a smooth buying process from start to finish. The team walked me through every detail of the vehicle before I paid a single shilling.",
    date: "2026-09-08",
  },
  {
    id: 2,
    name: "Wanjiru Kamau",
    rating: 5,
    text: "Bought my first car from Suna Motors and I couldn't be happier. Transparent pricing, no pressure, and the car was exactly as described.",
    date: "2026-08-22",
  },
  {
    id: 3,
    name: "Brian Otieno",
    rating: 4,
    text: "Good selection of vehicles and fair trade-in value on my old car. Paperwork took a little longer than expected but the staff kept me updated.",
    date: "2026-08-10",
  },
  {
    id: 4,
    name: "Amina Hassan",
    rating: 5,
    text: "Professional and honest. They flagged a minor issue with the car I wanted before I even asked, which says a lot about how they do business.",
    date: "2026-07-29",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const formatDate = (isoDate) =>
  new Date(isoDate).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// ================= STAR RATING (read-only) =================
const StarRating = ({ rating, size = 16 }) => (
  <div
    className="flex items-center gap-0.5"
    aria-label={`${rating} out of 5 stars`}
  >
    {[1, 2, 3, 4, 5].map((n) => (
      <Star
        key={n}
        size={size}
        className={
          n <= rating
            ? "fill-orange-500 text-orange-500"
            : "fill-transparent text-gray-300 dark:text-gray-700"
        }
      />
    ))}
  </div>
);

// ================= STAR RATING (interactive input) =================
const StarInput = ({ value, onChange }) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          className="p-0.5 transition-transform duration-150 hover:scale-110"
          aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
        >
          <Star
            size={26}
            className={
              n <= (hovered || value)
                ? "fill-orange-500 text-orange-500"
                : "fill-transparent text-gray-300 dark:text-gray-700"
            }
          />
        </button>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(seedTestimonials);
  const [form, setForm] = useState({ name: "", rating: 0, text: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const average = useMemo(() => {
    if (testimonials.length === 0) return 0;
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
    return total / testimonials.length;
  }, [testimonials]);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.rating) next.rating = "Please select a rating.";
    if (!form.text.trim())
      next.text = "Please share a few words about your experience.";
    else if (form.text.trim().length < 10)
      next.text = "Please write at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);

    // Simulate a network request; swap for a real API call when the
    // backend endpoint for testimonials is ready.
    await new Promise((resolve) => setTimeout(resolve, 600));

    const newTestimonial = {
      id: Date.now(),
      name: form.name.trim(),
      rating: form.rating,
      text: form.text.trim(),
      date: new Date().toISOString(),
    };

    setTestimonials((prev) => [newTestimonial, ...prev]);
    setForm({ name: "", rating: 0, text: "" });
    setErrors({});
    setSubmitting(false);
    toast.success("Thank you for sharing your experience!");
  };

  return (
    <>
      <Header />
      <section
        id="testimonials"
        className="bg-white px-6 py-28 dark:bg-gray-950 lg:px-10"
      >
        <div className="mx-auto max-w-[1200px]">
          {/* ================= SECTION HEADING ================= */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Real experiences from people who chose Suna Motors
            </p>

            <div className="mt-6 flex flex-col items-center gap-2">
              <span className="text-4xl font-bold text-orange-600 dark:text-orange-500">
                {average.toFixed(1)} / 5
              </span>
              <StarRating rating={Math.round(average)} size={20} />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Based on {testimonials.length} review
                {testimonials.length !== 1 && "s"}
              </span>
            </div>
          </div>

          {/* ================= REVIEW CARDS ================= */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <Quote className="absolute right-5 top-5 h-6 w-6 text-orange-100 dark:text-orange-950" />

                <StarRating rating={t.rating} />

                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  "{t.text}"
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-semibold text-orange-700 dark:bg-orange-950 dark:text-orange-400">
                    {initials(t.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {formatDate(t.date)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= SUBMISSION FORM ================= */}
          <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-center text-lg font-bold text-gray-900 dark:text-white">
              Share Your Experience
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="testimonial-name"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your name
                </label>
                <input
                  id="testimonial-name"
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="e.g. Jane Wambui"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors duration-200 focus:border-orange-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Rating */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your rating
                </label>
                <StarInput
                  value={form.rating}
                  onChange={(rating) => setForm((f) => ({ ...f, rating }))}
                />
                {errors.rating && (
                  <p className="mt-1 text-xs text-red-500">{errors.rating}</p>
                )}
              </div>

              {/* Experience */}
              <div>
                <label
                  htmlFor="testimonial-text"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your experience
                </label>
                <textarea
                  id="testimonial-text"
                  rows={4}
                  value={form.text}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, text: e.target.value }))
                  }
                  placeholder="Tell us how your visit to Suna Motors went..."
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors duration-200 focus:border-orange-500 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                />
                {errors.text && (
                  <p className="mt-1 text-xs text-red-500">{errors.text}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70 dark:bg-orange-500 dark:hover:bg-orange-600"
              >
                {submitting && <Loader2 size={16} className="animate-spin" />}
                {submitting ? "Submitting..." : "Submit Testimonial"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
