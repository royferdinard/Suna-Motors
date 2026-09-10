import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  Send,
} from "lucide-react";

import logo from "../assets/Logos/logo.png";
import { FaAngleRight, FaFacebook,FaInstagram,FaTwitter,FaYoutube } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Our Vehicles",
      path: "/vehicles",
    },
    {
      name: "Categories",
      path: "/categories",
    },
    {
      name: "Testimonials",
      path: "/testimonials",
    },
  ];

  const otherLinks = [
    {
      name: "Featured Makes",
      path: "/makes",
    },
    {
      name: "Vehicle Models",
      path: "/models",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
    {
      name: "Help & Support",
      path: "/help",
    },
    {
      name: "Our Location",
      path: "/contact",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebook,
      path: "#",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      path: "#",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      path: "#",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      path: "#",
    },
  ];

  return (
    <footer className="bg-gray-950 text-white">

      {/**Footer */}
      <div className="w-full  px-12 py-10">

        <div
          className="
            grid
            grid-cols-1
            gap-12
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-10
          "
        >

          {/* =================================================
              1. BRAND
          ================================================== */}
          <div className="lg:pr-6">

            {/* Logo */}
            <Link
              to="/"
              className="inline-flex items-center"
            >
             <h1 className="font-bold text-2xl">
                Suna Motor <span className="text-orange-600">Bazaar</span>
             </h1>
            </Link>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-white/91">
              Your trusted destination for quality pre-owned vehicles.
              Explore our collection of carefully selected cars and find
              a vehicle that fits your lifestyle, needs, and budget.
            </p>


            {/* Social Networks */}
            <div className="mt-5">

              <div className="flex items-center gap-3">

                {socialLinks.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={index}
                      href={social.path}
                      aria-label={social.name}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-gray-400
                        transition-all
                        duration-300
                        hover:border-orange-600
                        hover:bg-orange-600
                        hover:text-white
                        hover:-translate-y-1
                      "
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}

              </div>

            </div>

          </div>


          {/* =================================================
              2. QUICK LINKS
          ================================================== */}
          <div>

            <h3 className=" text-2xl font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 h-1 w-8 rounded-full bg-orange-600"></div>

            <ul className="mt-5 space-y-3">

              {quickLinks.map((link, index) => (
                <li key={index}>

                  <Link
                    to={link.path}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-white/90 
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-orange-500
                    "
                  >
                    <FaAngleRight
                      size={14}
                      className="
                        text-orange-600
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* =================================================
              3. OTHER LINKS
          ================================================== */}
          <div>

            <h3 className="text-2xl font-bold text-white ">
              Explore
            </h3>

            <div className="mt-5 h-1 w-8 rounded-full bg-orange-600"></div>

            <ul className="mt-5 space-y-3">

              {otherLinks.map((link, index) => (
                <li key={index}>

                  <Link
                    to={link.path}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-white/90 
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-orange-500
                    "
                  >
                    <FaAngleRight
                      size={14}
                      className="
                        text-orange-600
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    {link.name}
                  </Link>

                </li>
              ))}

            </ul>

          </div>


          {/* =================================================
              4. NEWSLETTER
          ================================================== */}
          <div>

            <h3 className="text-2xl font-bold text-white">
              Stay Updated
            </h3>

            <div className="mt-5 h-1 w-8 rounded-full bg-orange-600"></div>

            <p className="mt-5 text-sm leading-6 text-white/90">
              Subscribe to receive updates about our latest vehicles,
              special offers, and new arrivals.
            </p>


            {/* Subscribe Form */}
            <form className="mt-5">

              <div
                className="
                  flex
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-1
                  transition-all
                  duration-300
                  focus-within:border-orange-600/60
                "
              >

                <input
                  type="email"
                  placeholder="Your email address"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    px-3
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-gray-500
                  "
                />

                <button
                  type="submit"
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-orange-600
                    text-white
                    transition-all
                    duration-300
                    hover:bg-orange-500
                    active:scale-95
                  "
                  aria-label="Subscribe"
                >
                  <Send size={18} />
                </button>

              </div>

            </form>



          </div>

        </div>


        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <div className="my-8 h-px bg-white/10"></div>


        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}
        <div
          className="
            flex
            flex-col
            gap-4
            text-xs
            text-gray-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* Copyright */}
          <p className="text-white/90">
            © {new Date().getFullYear()} Suna Motors.
            All rights reserved.
          </p>


          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-5 text-white/90 font-semibold md:font-medium">

            <Link
              to="/cookies"
              className="transition-colors hover:text-orange-500"
            >
              Cookies
            </Link>

            <span className="h-3 w-px bg-gray-700"></span>

            <Link
              to="/privacy"
              className="transition-colors hover:text-orange-500"
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-gray-700"></span>

            <Link
              to="/terms"
              className="transition-colors hover:text-orange-500"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;