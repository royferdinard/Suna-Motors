// import React from "react";
// import { motion } from "framer-motion";

// const CTA = () => {
//   return (
//     <section className="relative overflow-hidden border-t border-gray-100 bg-gray-50 py-16 transition-colors duration-300 dark:border-white/[0.06] dark:bg-[#050505] sm:py-20">
//       {/* Background glow */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-600/10 blur-3xl dark:bg-orange-600/[0.07]" />
//       </div>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="relative mx-auto max-w-3xl px-6 text-center lg:px-10"
//       >
//         {/* Small label */}
//         <div className="mb-5 flex justify-center">
//           <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-orange-600 dark:border-orange-600/20 dark:bg-orange-600/10 dark:text-orange-600">
//             Suna Motors
//           </span>
//         </div>

//         {/* Heading */}
//         <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
//           Ready to find your{" "}
//           <span className="text-orange-600 dark:text-orange-600">
//             next car?
//           </span>
//         </h2>

//         {/* Description */}
//         <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
//           Join hundreds of satisfied customers and find a vehicle that fits your
//           needs, lifestyle, and budget.
//         </p>

//         {/* Buttons */}
//         <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
//           <motion.a
//             href="/inventory"
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.97 }}
//             className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-gray-900/10 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-600/20 dark:bg-orange-600 dark:text-white dark:shadow-orange-600/10 dark:hover:bg-orange-600"
//           >
//             Browse vehicles
//             <span className="transition-transform duration-300 group-hover:translate-x-1">
//               →
//             </span>
//           </motion.a>

//           <motion.a
//             href="/contact"
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.97 }}
//             className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-7 py-3 text-sm font-bold text-gray-800 transition-all duration-300 hover:border-orange-600 hover:bg-orange-50 hover:text-orange-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:hover:border-orange-600/30 dark:hover:bg-orange-600/10 dark:hover:text-orange-600"
//           >
//             Contact Suna Motors
//           </motion.a>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default CTA;
