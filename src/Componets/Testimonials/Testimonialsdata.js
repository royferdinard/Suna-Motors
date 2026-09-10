// Hardcoded for now — shaped to match what a `/api/testimonials` endpoint
// would eventually return, so the UI layer never needs to change when a
// backend is wired in. See README notes at the bottom of Testimonials.jsx.
//
// category is one of: "SUV" | "Sedan" | "Luxury" | "Commercial"
// isFeatured marks the single entry shown in the FeaturedTestimonial block.

const testimonialsData = [
  {
    id: 1,
    name: "Marleyges Khamis",
    location: "Nairobi, Kenya",
    vehicle: "Toyota Harrier",
    category: "SUV",
    rating: 5,
    testimonial:
      "The whole experience was smooth and professional. They understood exactly what I needed and never pushed me toward something out of budget.",
    isFeatured: true,
  },
  {
    id: 2,
    name: "James Kariuki",
    location: "Nairobi, Kenya",
    vehicle: "Mercedes-Benz C200",
    category: "Luxury",
    rating: 5,
    testimonial:
      "The team took the time to understand what I needed instead of just pushing a sale. Made the whole process easy.",
  },
  {
    id: 3,
    name: "Amina Wanjiru",
    location: "Nairobi, Kenya",
    vehicle: "Mazda Demio",
    category: "Sedan",
    rating: 5,
    testimonial:
      "Straightforward and honest from start to finish. I knew exactly what I was getting into at every step.",
  },
  {
    id: 4,
    name: "David Mwangi",
    location: "Kiambu, Kenya",
    vehicle: "Subaru Forester",
    category: "SUV",
    rating: 4,
    testimonial:
      "Good guidance on choosing between a couple of options. Didn't feel rushed into a decision.",
  },
  {
    id: 5,
    name: "Grace Otieno",
    location: "Mombasa, Kenya",
    vehicle: "Isuzu D-Max",
    category: "Commercial",
    rating: 5,
    testimonial:
      "Bought a pickup for my business and the after-sale support has been just as good as the sale itself. Still call them with questions.",
  },
  {
    id: 6,
    name: "Peter Ndegwa",
    location: "Nakuru, Kenya",
    vehicle: "BMW 3 Series",
    category: "Luxury",
    rating: 5,
    testimonial:
      "Paperwork and import history were laid out clearly before I paid a shilling. That transparency is why I'd come back.",
  },
];

export default testimonialsData;
