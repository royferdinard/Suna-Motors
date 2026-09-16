import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModelCard from "../../Componets/Models/ModelCard";
import {
  faArrowLeft,
  faArrowRight,
  faGaugeHigh,
  faGasPump,
  faGear,
  faUsers,
  faCheckCircle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import vehicles from "../../Data/vehicles";
const WHATSAPP_NUMBER = "254700598826";

const ModelDetails = () => {
  const { id } = useParams();

  const vehicle = vehicles.find((item) => item.id === Number(id));
  const relatedVehicles = vehicles
    .filter(
      (item) => item.id !== vehicle?.id && item.category === vehicle?.category,
    )
    .slice(0, 3);

  const [activeImage, setActiveImage] = useState(0);
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);
  const [viewingSubmitted, setViewingSubmitted] = useState(false);

  const images = vehicle?.images || [];

  const whatsappMessage = encodeURIComponent(
    `Hello Suna Motors, I am interested in the ${vehicle.name} (${vehicle.year}) listed at KSh ${vehicle.price.toLocaleString()}. I would like to enquire about purchasing this vehicle.`,
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  // If vehicle doesn't exist
  if (!vehicle) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-20 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold text-gray-950 dark:text-white">
            Vehicle Not Found
          </h1>

          <p className="mt-3 text-gray-500 dark:text-gray-400">
            The vehicle you are looking for does not exist.
          </p>

          <Link
            to="/models"
            replace
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-orange-600 dark:text-gray-400"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Models
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <section className="border-b border-gray-200 bg-white dark:border-white/10 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <Link
            to="/models"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-orange-600 dark:text-gray-400"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Models
          </Link>
        </div>
      </section>

      {/* Details */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Premium Vehicle Gallery */}
            <div className="w-full min-w-0 space-y-4">
              {/* Main Image */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11] lg:aspect-[4/3]">
                  <motion.img
                    key={images[activeImage]}
                    src={images[activeImage]}
                    alt={vehicle.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Status */}
                  <span className="absolute left-3 top-3 rounded-full bg-orange-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg sm:left-5 sm:top-5">
                    {vehicle.status}
                  </span>

                  {/* Image Counter */}
                  <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:bottom-5 sm:right-5">
                    {activeImage + 1} / {images.length}
                  </div>

                  {/* Previous */}
                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImage(
                          (prev) => (prev - 1 + images.length) % images.length,
                        )
                      }
                      className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-all duration-300 hover:bg-orange-600 hover:text-white sm:left-4 sm:h-10 sm:w-10 dark:bg-gray-900/90 dark:text-white"
                      aria-label="Previous image"
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="text-xs sm:text-sm"
                      />
                    </button>
                  )}

                  {/* Next */}
                  {images.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveImage((prev) => (prev + 1) % images.length)
                      }
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-all duration-300 hover:bg-orange-600 hover:text-white sm:right-4 sm:h-10 sm:w-10 dark:bg-gray-900/90 dark:text-white"
                      aria-label="Next image"
                    >
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-xs sm:text-sm"
                      />
                    </button>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="w-full overflow-x-auto pb-1">
                <div className="flex min-w-max gap-2.5 sm:gap-3">
                  {images.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`View image ${index + 1}`}
                      className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 sm:h-20 sm:w-24 ${
                        activeImage === index
                          ? "border-orange-600 ring-2 ring-orange-600/20"
                          : "border-gray-200 hover:border-orange-400 dark:border-white/10 dark:hover:border-orange-600"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${vehicle.name} ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />

                      {activeImage === index && (
                        <div className="absolute inset-0 bg-orange-600/10" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Information */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                {vehicle.brand}
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                {vehicle.name}
              </h1>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-950 dark:text-white">
                  KSh {vehicle.price.toLocaleString()}
                </span>

                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-sm font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
                  {vehicle.year}
                </span>
              </div>

              {/* Vehicle Specs */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {/* Mileage */}
                <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-orange-600/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <FontAwesomeIcon icon={faGaugeHigh} className="text-sm" />
                  </div>

                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Mileage
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {vehicle.mileage}
                  </p>
                </div>

                {/* Fuel */}
                <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-orange-600/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <FontAwesomeIcon icon={faGasPump} className="text-sm" />
                  </div>

                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Fuel
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {vehicle.fuel}
                  </p>
                </div>

                {/* Transmission */}
                <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-orange-600/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <FontAwesomeIcon icon={faGear} className="text-sm" />
                  </div>

                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Transmission
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {vehicle.transmission}
                  </p>
                </div>

                {/* Seats */}
                <div className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-orange-600/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600/10 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                    <FontAwesomeIcon icon={faUsers} className="text-sm" />
                  </div>

                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Seats
                  </p>

                  <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                    {vehicle.seats}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-950 dark:text-white">
                  About This Vehicle
                </h2>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                  {vehicle.description}
                </p>
              </div>

              {/* Vehicle Highlights */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-950 dark:text-white">
                  Vehicle Highlights
                </h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {vehicle.features?.map((feature, index) => (
                    <div
                      key={`${feature}-${index}`}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-600/10 text-orange-600">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-xs"
                        />
                      </span>

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20"
                >
                  <FontAwesomeIcon icon={faPhone} />
                  Enquire Now
                </a>

                <button
                  type="button"
                  onClick={() => setIsViewingModalOpen(true)}
                  className="rounded-lg border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 transition-all duration-300 hover:border-orange-600 hover:text-orange-600 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                >
                  Book a Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Viewing Modal */}
      {isViewingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-900">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-gray-200 px-6 py-5 dark:border-white/10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  Viewing Request
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-950 dark:text-white">
                  Book a Viewing
                </h2>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Schedule a time to view this vehicle at Suna Motors.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsViewingModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            {/* Vehicle Summary */}
            <div className="mx-6 mt-5 flex items-center gap-4 rounded-xl border border-gray-200 bg-gray-50 p-3 dark:border-white/10 dark:bg-white/[0.03]">
              <img
                src={vehicle.images?.[0]}
                alt={vehicle.name}
                className="h-16 w-20 rounded-lg object-cover"
              />

              <div>
                <h3 className="font-semibold text-gray-950 dark:text-white">
                  {vehicle.name}
                </h3>

                <p className="mt-1 text-sm text-orange-600">
                  KSh {vehicle.price.toLocaleString()}
                </p>
              </div>
            </div>

            {viewingSubmitted ? (
              <div className="px-6 py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-600/10 text-orange-600">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-xl" />
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-950 dark:text-white">
                  Viewing Request Received
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Thank you for your request. Our team will contact you to
                  confirm your viewing appointment.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setViewingSubmitted(false);
                    setIsViewingModalOpen(false);
                  }}
                  className="mt-6 rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setViewingSubmitted(true);
                }}
                className="space-y-4 px-6 py-6"
              >
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="e.g. 0712 345 678"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                  />
                </div>

                {/* Date + Time */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="viewingDate"
                      className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Preferred Date
                    </label>

                    <input
                      id="viewingDate"
                      type="date"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-orange-600 focus:ring-2 focus:ring-orange-600/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="viewingTime"
                      className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Preferred Time
                    </label>

                    <input
                      id="viewingTime"
                      type="time"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-orange-600 focus:ring-2 focus:ring-orange-600/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setIsViewingModalOpen(false)}
                    className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/20"
                  >
                    Request Viewing
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {relatedVehicles.length > 0 && (
        <section className="border-t border-gray-200 bg-gray-50 py-16 dark:border-white/10 dark:bg-gray-950">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                You May Also Like
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-950 dark:text-white sm:text-3xl">
                Similar Vehicles
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
                Explore other vehicles from our collection that may match your
                needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedVehicles.map((relatedVehicle) => (
                <ModelCard key={relatedVehicle.id} vehicle={relatedVehicle} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ModelDetails;
