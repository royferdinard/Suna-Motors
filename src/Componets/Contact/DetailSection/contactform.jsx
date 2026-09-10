import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  CarFront,
  MessageSquare,
  CalendarDays,
  Clock3,
  MapPin,
  Send,
  ChevronDown,
  Check,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Headphones,
  Search,
  Wallet,
} from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "",
    vehicleMake: "",
    vehicleModel: "",
    budget: "",
    preferredContact: "",
    preferredDate: "",
    preferredTime: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelect = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact enquiry:", formData);
  };

  const enquiryTypes = [
    {
      title: "Vehicle Enquiry",
      description: "Ask about a vehicle",
      icon: <CarFront size={18} />,
    },
    {
      title: "Test Drive",
      description: "Schedule a test drive",
      icon: <Search size={18} />,
    },
    {
      title: "Financing",
      description: "Explore payment options",
      icon: <Wallet size={18} />,
    },
    {
      title: "General Enquiry",
      description: "Talk to our team",
      icon: <Headphones size={18} />,
    },
  ];

  const budgets = [
    "Below KSh 500,000",
    "KSh 500K – 1M",
    "KSh 1M – 1.5M",
    "KSh 1.5M – 2M",
    "KSh 2M – 3M",
    "Above KSh 3M",
  ];

  const contactMethods = [
    {
      title: "Phone",
      description: "Call me",
      icon: <Phone size={18} />,
    },
    {
      title: "WhatsApp",
      description: "Message me",
      icon: <MessageSquare size={18} />,
    },
    {
      title: "Email",
      description: "Email me",
      icon: <Mail size={18} />,
    },
    {
      title: "SMS",
      description: "Text me",
      icon: <MessageSquare size={18} />,
    },
  ];

  return (
    <section className="w-full bg-gray-100 px-5 py-14 md:px-12">
      <div className="mx-auto w-full max-w-[1500px]">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mb-10 max-w-3xl">

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-orange-600" />

            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-orange-600">
              Vehicle Enquiry
            </p>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-[46px] lg:leading-[1.08]">
            Let's find your{" "}
            <span className="text-orange-600">next vehicle.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Tell us what you're looking for and our team will help you find
            the right vehicle, financing option, and next steps.
          </p>

        </div>


        {/* =====================================================
            FORM CONTAINER
        ===================================================== */}

        <form
          onSubmit={handleSubmit}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-gray-200
            bg-white
            shadow-sm
            shadow-gray-200/50
          "
        >

          {/* Orange top accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400" />


          {/* =================================================
              PREMIUM FORM HEADER
          ================================================= */}

          <div className="relative overflow-hidden bg-[#080b0f] px-6 py-8 text-white sm:px-8 lg:px-10 lg:py-10">

            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-orange-600/10 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-96 bg-gradient-to-l from-orange-600/10 to-transparent" />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              {/* Header information */}
              <div className="max-w-xl">

                <div className="mb-4 flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600 shadow-lg shadow-orange-600/20">
                    <CarFront size={22} />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                      Suna Motors
                    </p>

                    <h3 className="mt-0.5 text-lg font-bold sm:text-xl">
                      Tell us what you're looking for
                    </h3>
                  </div>

                </div>

                <p className="max-w-lg text-sm leading-6 text-gray-400">
                  A few details will help our team understand exactly what
                  you need and respond with the right options.
                </p>

              </div>


              {/* Process */}
              <div className="hidden lg:block">

                <div className="flex items-center gap-3">

                  <ProcessStep
                    number="01"
                    label="Details"
                    active
                  />

                  <div className="h-px w-8 bg-gray-700" />

                  <ProcessStep
                    number="02"
                    label="Vehicle"
                  />

                  <div className="h-px w-8 bg-gray-700" />

                  <ProcessStep
                    number="03"
                    label="Visit"
                  />

                </div>

              </div>

            </div>
          </div>


          {/* =================================================
              FORM BODY
          ================================================= */}

          <div className="space-y-6 p-5 sm:p-7 lg:p-10">


            {/* =================================================
                01 — YOUR DETAILS
            ================================================= */}

            <FormSection
              number="01"
              label="Your Details"
              title="How can we reach you?"
              description="Give us your contact details so our team can get back to you."
              icon={<User size={19} />}
            >

              <div className="grid gap-5 md:grid-cols-2">

                <FormField
                  label="Full Name"
                  required
                  icon={<User size={16} />}
                >
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className={inputStyle}
                  />
                </FormField>


                <FormField
                  label="Email Address"
                  required
                  icon={<Mail size={16} />}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className={inputStyle}
                  />
                </FormField>


                <FormField
                  label="Phone Number"
                  required
                  icon={<Phone size={16} />}
                >
                  <div className="flex">

                    <div className="flex items-center rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 px-4 text-sm font-semibold text-gray-500">
                      +254
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="7XX XXX XXX"
                      required
                      className={`${inputStyle} rounded-l-none`}
                    />

                  </div>
                </FormField>


                {/* Contact method */}
                <div>

                  <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
                    <span className="text-orange-600">
                      <MessageSquare size={16} />
                    </span>

                    Preferred Contact
                    <span className="text-orange-600">*</span>
                  </label>

                  <div className="grid grid-cols-2 gap-2">

                    {contactMethods.map((method) => {
                      const selected =
                        formData.preferredContact === method.title;

                      return (
                        <button
                          key={method.title}
                          type="button"
                          onClick={() =>
                            handleSelect(
                              "preferredContact",
                              method.title
                            )
                          }
                          className={`
                            group
                            flex
                            items-center
                            gap-2.5
                            rounded-xl
                            border
                            px-3
                            py-3
                            text-left
                            transition-all
                            duration-200
                            ${
                              selected
                                ? "border-orange-500 bg-orange-50 text-orange-700 shadow-sm"
                                : "border-gray-200 bg-gray-50 text-gray-600 hover:border-orange-300 hover:bg-orange-50/50"
                            }
                          `}
                        >

                          <span
                            className={`
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              ${
                                selected
                                  ? "bg-orange-600 text-white"
                                  : "bg-white text-gray-400"
                              }
                            `}
                          >
                            {method.icon}
                          </span>

                          <span className="min-w-0">
                            <span className="block text-xs font-bold">
                              {method.title}
                            </span>

                            <span className="block truncate text-[10px] text-gray-400">
                              {method.description}
                            </span>
                          </span>

                        </button>
                      );
                    })}

                  </div>
                </div>

              </div>

            </FormSection>


            {/* =================================================
                02 — VEHICLE
            ================================================= */}

            <FormSection
              number="02"
              label="Vehicle Information"
              title="What are you looking for?"
              description="Tell us about the vehicle you have in mind."
              icon={<CarFront size={19} />}
              dark
            >

              {/* Enquiry types */}

              <div className="mb-7">

                <label className="mb-3 block text-sm font-semibold text-gray-800">
                  What can we help you with?
                  <span className="ml-1 text-orange-600">*</span>
                </label>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

                  {enquiryTypes.map((type) => {
                    const selected =
                      formData.enquiryType === type.title;

                    return (
                      <button
                        key={type.title}
                        type="button"
                        onClick={() =>
                          handleSelect(
                            "enquiryType",
                            type.title
                          )
                        }
                        className={`
                          group
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          p-4
                          text-left
                          transition-all
                          duration-300
                          ${
                            selected
                              ? "border-orange-500 bg-orange-50 shadow-md shadow-orange-500/10"
                              : "border-gray-200 bg-gray-50 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white hover:shadow-md"
                          }
                        `}
                      >

                        {selected && (
                          <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-orange-600 text-white">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}

                        <div
                          className={`
                            mb-3
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-xl
                            ${
                              selected
                                ? "bg-orange-600 text-white"
                                : "bg-white text-orange-600"
                            }
                          `}
                        >
                          {type.icon}
                        </div>

                        <p className="text-xs font-bold text-gray-900">
                          {type.title}
                        </p>

                        <p className="mt-1 text-[10px] leading-4 text-gray-400">
                          {type.description}
                        </p>

                      </button>
                    );
                  })}

                </div>

              </div>


              {/* Vehicle inputs */}

              <div className="grid gap-5 md:grid-cols-2">

                <FormField
                  label="Vehicle Make"
                  icon={<CarFront size={16} />}
                >
                  <SelectField
                    name="vehicleMake"
                    value={formData.vehicleMake}
                    onChange={handleChange}
                    placeholder="Select vehicle make"
                    options={[
                      "Toyota",
                      "Nissan",
                      "Mazda",
                      "Subaru",
                      "Honda",
                      "Mercedes-Benz",
                      "BMW",
                      "Ford",
                      "Volkswagen",
                      "Other",
                    ]}
                  />
                </FormField>


                <FormField
                  label="Vehicle Model"
                  icon={<CarFront size={16} />}
                >
                  <input
                    type="text"
                    name="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                    placeholder="e.g. Toyota Probox"
                    className={inputStyle}
                  />
                </FormField>

              </div>


              {/* Budget */}

              <div className="mt-6">

                <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
                  <Wallet size={16} className="text-orange-600" />

                  Your Budget
                </label>

                <div className="flex flex-wrap gap-2">

                  {budgets.map((budget) => {
                    const selected =
                      formData.budget === budget;

                    return (
                      <button
                        key={budget}
                        type="button"
                        onClick={() =>
                          handleSelect("budget", budget)
                        }
                        className={`
                          rounded-full
                          border
                          px-4
                          py-2.5
                          text-xs
                          font-semibold
                          transition-all
                          duration-200
                          ${
                            selected
                              ? "border-orange-600 bg-orange-600 text-white shadow-md shadow-orange-600/20"
                              : "border-gray-200 bg-white text-gray-600 hover:border-orange-400 hover:text-orange-600"
                          }
                        `}
                      >
                        {budget}
                      </button>
                    );
                  })}

                </div>

              </div>

            </FormSection>


            {/* =================================================
                03 — VISIT
            ================================================= */}

            <FormSection
              number="03"
              label="Visit Preferences"
              title="Plan your visit"
              description="Planning a test drive or showroom visit? Choose your preferred time."
              icon={<CalendarDays size={19} />}
            >

              <div className="grid gap-5 md:grid-cols-3">

                <FormField
                  label="Preferred Date"
                  icon={<CalendarDays size={16} />}
                >
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </FormField>


                <FormField
                  label="Preferred Time"
                  icon={<Clock3 size={16} />}
                >
                  <SelectField
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    placeholder="Select time"
                    options={[
                      "06:00 AM – 09:00 AM",
                      "09:00 AM – 12:00 PM",
                      "12:00 PM – 03:00 PM",
                      "03:00 PM – 06:00 PM",
                      "06:00 PM – 07:00 PM",
                    ]}
                  />
                </FormField>


                <FormField
                  label="Preferred Location"
                  icon={<MapPin size={16} />}
                >
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Your location"
                    className={inputStyle}
                  />
                </FormField>

              </div>

            </FormSection>


            {/* =================================================
                MESSAGE
            ================================================= */}

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                p-5
                sm:p-6
              "
            >

              <div className="mb-4 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <MessageSquare size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600">
                    Almost There
                  </p>

                  <h4 className="mt-0.5 text-base font-bold text-gray-900">
                    Tell us more
                  </h4>
                </div>

              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Tell us about your ideal vehicle, preferred features, requirements, or any questions you have..."
                className={`${inputStyle} resize-none bg-white`}
              />

              <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                <span>
                  The more details you provide, the better we can assist.
                </span>

                <span>
                  {formData.message.length}/500
                </span>
              </div>

            </div>


            {/* =================================================
                SUBMIT AREA
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                bg-[#080b0f]
                p-5
                sm:p-6
              "
            >

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-600/10 blur-3xl" />

              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* Trust */}
                <div className="flex items-start gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                    <ShieldCheck size={19} />
                  </div>

                  <div>

                    <p className="text-sm font-semibold text-white">
                      Your enquiry is safe with us
                    </p>

                    <p className="mt-1 max-w-md text-xs leading-5 text-gray-500">
                      Our team will review your request and contact you using
                      your preferred method.
                    </p>

                  </div>

                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="
                    group
                    flex
                    min-w-[210px]
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-orange-600
                    px-7
                    py-4
                    text-sm
                    font-bold
                    text-white
                    shadow-xl
                    shadow-orange-600/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-orange-500
                    hover:shadow-2xl
                    hover:shadow-orange-600/30
                    active:translate-y-0
                  "
                >
                  <span>Send My Enquiry</span>

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-lg
                      bg-white/15
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <ArrowRight size={15} />
                  </span>
                </button>

              </div>

            </div>


            {/* Bottom note */}

            <div className="flex flex-col items-center justify-center gap-2 pt-1 text-center sm:flex-row">

              <Sparkles size={13} className="text-orange-500" />

              <p className="text-[11px] text-gray-400">
                Quality vehicles. Transparent service. Professional assistance.
              </p>

            </div>

          </div>
        </form>

      </div>
    </section>
  );
};


/* ============================================================
   FORM SECTION
============================================================ */

const FormSection = ({
  number,
  label,
  title,
  description,
  icon,
  children,
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">

      {/* Section header */}

      <div className="border-b border-gray-200 bg-gray-50 px-5 py-5 sm:px-6">

        <div className="flex items-start gap-4">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
            {icon}
          </div>

          <div className="min-w-0 flex-1">

            <div className="flex flex-wrap items-center gap-2">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
                {number}
              </span>

              <span className="h-1 w-1 rounded-full bg-gray-300" />

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">
                {label}
              </span>

            </div>

            <h4 className="mt-1 text-lg font-bold text-gray-900 sm:text-xl">
              {title}
            </h4>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              {description}
            </p>

          </div>

        </div>

      </div>


      {/* Content */}

      <div className="p-5 sm:p-6 lg:p-7">
        {children}
      </div>

    </div>
  );
};


/* ============================================================
   PROCESS STEP
============================================================ */

const ProcessStep = ({
  number,
  label,
  active = false,
}) => {
  return (
    <div className="flex flex-col items-center gap-1.5">

      <div
        className={`
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          border
          text-[10px]
          font-bold
          ${
            active
              ? "border-orange-600 bg-orange-600 text-white"
              : "border-gray-700 bg-gray-900 text-gray-500"
          }
        `}
      >
        {number}
      </div>

      <span
        className={`
          text-[9px]
          font-semibold
          ${
            active
              ? "text-orange-400"
              : "text-gray-600"
          }
        `}
      >
        {label}
      </span>

    </div>
  );
};


/* ============================================================
   FORM FIELD
============================================================ */

const FormField = ({
  label,
  required,
  icon,
  children,
}) => {
  return (
    <div>

      <label className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-gray-800">

        <span className="text-orange-600">
          {icon}
        </span>

        {label}

        {required && (
          <span className="text-orange-600">*</span>
        )}

      </label>

      {children}

    </div>
  );
};


/* ============================================================
   SELECT
============================================================ */

const SelectField = ({
  name,
  value,
  onChange,
  placeholder,
  options,
}) => {
  return (
    <div className="relative">

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`${inputStyle} appearance-none pr-11`}
      >

        <option value="">
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

      <ChevronDown
        size={17}
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />

    </div>
  );
};


/* ============================================================
   INPUT STYLE
============================================================ */

const inputStyle = `
  w-full
  rounded-xl
  border
  border-gray-200
  bg-gray-50
  px-4
  py-3.5
  text-sm
  font-medium
  text-gray-900
  outline-none
  transition-all
  duration-200
  placeholder:text-gray-400
  hover:border-gray-300
  focus:border-orange-500
  focus:bg-white
  focus:ring-4
  focus:ring-orange-500/10
`;


export default ContactForm;