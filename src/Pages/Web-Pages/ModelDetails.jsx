import React, { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
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
  faUser,
  faEnvelope,
  faCalendarDays,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import {
  getVehicles,
  VEHICLES_UPDATED_EVENT,
} from "../../utils/vehicleStorage";

import { addAppointment } from "../../utils/appointmentStorage";

const WHATSAPP_NUMBER = "254700598826";

const NotFound = () => {
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
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-orange-600 dark:text-gray-400"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Models
        </Link>
      </div>
    </main>
  );
};

const ModelDetails = () => {
  const { id } = useParams();

  const [vehicles, setVehicles] = useState(() => getVehicles());

  const [activeImage, setActiveImage] = useState(0);
  const [isViewingModalOpen, setIsViewingModalOpen] = useState(false);
  const [viewingSubmitted, setViewingSubmitted] = useState(false);

  useEffect(() => {
    const refreshVehicles = () => {
      setVehicles(getVehicles());
    };

    window.addEventListener(VEHICLES_UPDATED_EVENT, refreshVehicles);
    window.addEventListener("storage", refreshVehicles);

    return () => {
      window.removeEventListener(VEHICLES_UPDATED_EVENT, refreshVehicles);
      window.removeEventListener("storage", refreshVehicles);
    };
  }, []);

  const vehicle = vehicles.find((item) => Number(item.id) === Number(id));

  const images = vehicle?.images || [];

  useEffect(() => {
    setActiveImage(0);
  }, [id]);

  useEffect(() => {
    if (images.length === 0) {
      setActiveImage(0);
      return;
    }

    setActiveImage((current) => Math.min(current, images.length - 1));
  }, [images.length]);

  if (!vehicle) {
    return <NotFound />;
  }

  const relatedVehicles = vehicles
    .filter(
      (item) => item.id !== vehicle.id && item.category === vehicle.category,
    )
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello Suna Motors, I am interested in the ${vehicle.name} (${vehicle.year}) listed at KSh ${Number(vehicle.price || 0).toLocaleString()}. I would like to enquire about purchasing this vehicle.`,
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const nextImage = () => {
    if (images.length === 0) return;

    setActiveImage((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    if (images.length === 0) return;

    setActiveImage((current) => (current - 1 + images.length) % images.length);
  };

  const handleViewingSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const appointment = addAppointment({
      customerName: formData.get("customerName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      requestedDate: formData.get("requestedDate"),

      vehicleId: vehicle.id,
      vehicleName: vehicle.name,
      vehicleBrand: vehicle.brand,
      vehicleYear: vehicle.year,
      vehiclePrice: vehicle.price,

      // Main vehicle image
      vehicleImage: vehicle.images?.[0] || "",
    });

    if (appointment) {
      setViewingSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/models"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-500"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Models
        </Link>

        {/* Main Vehicle Section */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900">
              {images.length > 0 ? (
                <>
                  <img
                    src={images[activeImage]}
                    alt={vehicle.name}
                    className="h-[450px] w-full object-cover"
                  />

                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={previousImage}
                        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-orange-600"
                      >
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </button>

                      <button
                        type="button"
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-orange-600"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                        {activeImage + 1} / {images.length}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="flex h-[450px] items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`overflow-hidden rounded-xl border-2 transition ${
                      activeImage === index
                        ? "border-orange-600"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${vehicle.name} ${index + 1}`}
                      className="h-20 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Vehicle Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3 text-sm font-medium uppercase tracking-wider text-orange-600">
              {vehicle.category}
            </div>

            <h1 className="text-4xl font-bold text-gray-950 dark:text-white">
              {vehicle.name}
            </h1>

            <p className="mt-2 text-gray-500 dark:text-gray-400">
              {vehicle.year}
            </p>

            <div className="mt-6 text-3xl font-bold text-gray-950 dark:text-white">
              KSh {Number(vehicle.price || 0).toLocaleString()}
            </div>

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-900">
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  className="mb-2 text-orange-600"
                />
                <p className="text-xs text-gray-500">Mileage</p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {vehicle.mileage || "N/A"}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-900">
                <FontAwesomeIcon
                  icon={faGasPump}
                  className="mb-2 text-orange-600"
                />
                <p className="text-xs text-gray-500">Fuel</p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {vehicle.fuel || "N/A"}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-900">
                <FontAwesomeIcon
                  icon={faGear}
                  className="mb-2 text-orange-600"
                />
                <p className="text-xs text-gray-500">Transmission</p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {vehicle.transmission || "N/A"}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-900">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="mb-2 text-orange-600"
                />
                <p className="text-xs text-gray-500">Seats</p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {vehicle.seats || "N/A"}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-950 dark:text-white">
                Description
              </h2>

              <p className="mt-3 leading-7 text-gray-600 dark:text-gray-400">
                {vehicle.description ||
                  "Contact Suna Motors for more information about this vehicle."}
              </p>
            </div>

            {/* Features */}
            {vehicle.features?.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-950 dark:text-white">
                  Features
                </h2>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {vehicle.features.map((feature, index) => (
                    <div
                      key={`${feature}-${index}`}
                      className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-orange-600"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white transition hover:bg-orange-700"
              >
                <FontAwesomeIcon icon={faPhone} />
                Enquire on WhatsApp
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsViewingModalOpen(true);
                  setViewingSubmitted(false);
                }}
                className="flex-1 rounded-xl border border-gray-200 bg-white px-6 py-4 font-semibold text-gray-900 transition hover:border-orange-600 hover:text-orange-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
              >
                Book a Viewing
              </button>
            </div>
          </motion.div>
        </div>

        {/* Related Vehicles */}
        {relatedVehicles.length > 0 && (
          <section className="mt-20">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                You may also like
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-950 dark:text-white">
                Related Vehicles
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedVehicles.map((relatedVehicle) => (
                <ModelCard key={relatedVehicle.id} vehicle={relatedVehicle} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Viewing Modal */}
      {isViewingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-gray-900"
          >
            {!viewingSubmitted ? (
              <>
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 dark:border-white/10 sm:px-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                      Vehicle Viewing
                    </p>

                    <h2 className="mt-1 text-2xl font-bold text-gray-950 dark:text-white">
                      Book a Viewing
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsViewingModalOpen(false)}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-900 dark:bg-white/10 dark:text-gray-400 dark:hover:bg-white/15 dark:hover:text-white"
                    aria-label="Close booking form"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Vehicle Preview */}
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5">
                    <div className="grid sm:grid-cols-[180px_1fr]">
                      <div className="h-44 sm:h-full">
                        {vehicle.images?.[0] ? (
                          <img
                            src={vehicle.images[0]}
                            alt={vehicle.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full min-h-44 items-center justify-center text-sm text-gray-400">
                            No image
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col justify-center p-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                          Selected Vehicle
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-gray-950 dark:text-white">
                          {vehicle.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          {vehicle.brand} • {vehicle.year} • {vehicle.category}
                        </p>

                        <p className="mt-3 text-lg font-bold text-gray-950 dark:text-white">
                          KSh {Number(vehicle.price || 0).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="mt-8">
                    <div className="mb-5">
                      <h3 className="text-lg font-bold text-gray-950 dark:text-white">
                        Your Information
                      </h3>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Fill in your details and choose your preferred viewing
                        date.
                      </p>
                    </div>

                    <form onSubmit={handleViewingSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="customerName"
                          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Full Name
                        </label>

                        <div className="relative">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />

                          <input
                            id="customerName"
                            type="text"
                            name="customerName"
                            placeholder="Enter your full name"
                            required
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-white/10"
                          />
                        </div>
                      </div>

                      {/* Phone + Email */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="phone"
                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Phone Number
                          </label>

                          <div className="relative">
                            <FontAwesomeIcon
                              icon={faPhone}
                              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                              id="phone"
                              type="tel"
                              name="phone"
                              placeholder="+254 700 000 000"
                              required
                              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-white/10"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Email Address
                          </label>

                          <div className="relative">
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                              id="email"
                              type="email"
                              name="email"
                              placeholder="you@example.com"
                              required
                              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-white/10"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Date */}
                      <div>
                        <label
                          htmlFor="requestedDate"
                          className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Preferred Viewing Date
                        </label>

                        <div className="relative">
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                          />

                          <input
                            id="requestedDate"
                            type="date"
                            name="requestedDate"
                            required
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-600/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:bg-white/10"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-600/20 transition hover:bg-orange-700 hover:shadow-orange-600/30 active:scale-[0.99]"
                      >
                        <CalendarDays size={18} />
                        Submit Viewing Request
                      </button>

                      <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                        Suna Motors will contact you to confirm your viewing
                        appointment.
                      </p>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="px-6 py-14 text-center sm:px-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950/40">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-2xl" />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-orange-600">
                  Request Received
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-950 dark:text-white">
                  Viewing Request Submitted
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Thank you for your interest in the {vehicle.name}. Suna Motors
                  will contact you to confirm your viewing appointment.
                </p>

                {/* Selected Vehicle */}
                <div className="mx-auto mt-8 flex max-w-md items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-3 text-left dark:border-white/10 dark:bg-white/5">
                  {vehicle.images?.[0] ? (
                    <img
                      src={vehicle.images[0]}
                      alt={vehicle.name}
                      className="h-16 w-20 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="flex h-16 w-20 items-center justify-center rounded-xl bg-gray-200 text-xs text-gray-400 dark:bg-white/10">
                      No image
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {vehicle.name}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {vehicle.year} • Viewing request
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsViewingModalOpen(false)}
                  className="mt-8 rounded-xl bg-orange-600 px-7 py-3 font-semibold text-white transition hover:bg-orange-700"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </main>
  );
};

export default ModelDetails;
