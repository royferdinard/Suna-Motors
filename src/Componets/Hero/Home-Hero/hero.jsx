import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import video from "../../../assets/Videos/Car.mp4";

import image1 from "../../../assets/Images/Backgrounds/Hero-Bg/bg1.jpeg";
import image2 from "../../../assets/Images/Backgrounds/Hero-Bg/bg2.jpg";
import image3 from "../../../assets/Images/Backgrounds/Hero-Bg/bg3.jpg";

const Hero = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [image1, image2, image3];

  {/* Image slider effect after video ends */}
  useEffect(() => {
    if (!videoFinished) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [videoFinished, images.length]);

  return (
    <section className="relative h-[90vh] min-h-[620px] w-full overflow-hidden bg-black">

      {/* =========================================
          BACKGROUND IMAGES
      ========================================= */}
      <div className="absolute inset-0">

        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-[1500ms] ease-in-out
              ${
                videoFinished && currentImage === index
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
          >

            <img
              src={image}
              alt={`Suna Motors vehicle ${index + 1}`}
              className={` h-full w-full object-cover transition-transform duration-[7000ms] ease-out
                ${
                  videoFinished && currentImage === index
                    ? "scale-105"
                    : "scale-100"
                }
              `}
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-black/25" />

          </div>
        ))}

        {/**LEFT DARK GRADIENT */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/0
          "
        />

        {/**BOTTOM DARK GRADIENT */}
        <div
          className=" absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40
            via-black/20 to-transparent
          "
        />

      </div>


     {/**VIDEO */}
      <video
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoFinished(true)}
        className={`
          absolute inset-0 z-15 h-full w-full
          object-cover transition-opacity duration-[1500ms] ease-in-out
          ${
            videoFinished
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      >
        <source src={video} type="video/mp4" />

        Your browser does not support the video tag.
      </video>


      {/**VIDEO OVERLAY */}
      {!videoFinished && (
        <>
          {/* Main darkness */}
          <div
            className="
              absolute inset-0 z-20 bg-black/35
            "
          />

          {/* Cinematic gradient */}
          <div
            className="
              absolute inset-0 z-20 bg-gradient-to-r from-black/60 via-black/20 to-transparent
            "
          />
        </>
      )}


      {/**CONTENT */}
      <div
        className="
          relative z-30 flex h-full items-center px-6 sm:px-10 lg:px-20
        "
      >

        <div
          className="
            max-w-3xl text-left text-white
          "
        >

          {/* Small label */}
          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-8 bg-orange-500" />

            <p
              className="
                text-md font-semibold uppercase tracking-[0.3em] text-white/80 sm:text-lg
              "
            >
              Suna Motor
            </p>

          </div>


          {/* Main heading */}
          <h1
            className="
              max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight
              sm:text-5xl md:text-5xl 
            "
          >
            Find the <span className="text-orange-600">Car</span>
            <br />

            <span className="text-orange-600">
              That Fits Your Life
            </span>
          </h1>


          {/* Description */}
          <p
            className="
              mt-6
              max-w-xl text-md leading-6 text-white/90 sm:text-base sm:leading-7 md:text-lg
            "
          >
            Explore a curated selection of premium vehicles
            from trusted brands, carefully selected to match
            your style, performance needs, and everyday
            driving experience.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 
            "
          >

            {/* Explore Vehicles */}
            <Link
              to="/vehicles"
              className="
                flex h-12 w-full items-center justify-center rounded-xl
                bg-orange-600 px-6 text-sm font-semibold text-white shadow-lg
                shadow-orange-600/20 transition-all duration-300 hover:scale-[1.03] hover:bg-orange-700
                hover:shadow-xl active:scale-95 sm:w-44
              "
            >
              Explore Vehicles
            </Link>


            {/* Contact */}
            <Link
              to="/contact"
              className="
                flex h-12 w-full items-center justify-center rounded-xl border
                border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md
                transition-all duration-300 hover:scale-[1.03] hover:border-white
                hover:bg-white hover:text-black active:scale-95 sm:w-36
              "
            >
              Contact Us
            </Link>

          </div>

        </div>
      </div>


    {/**DOTS AND IMAGE COUNTER */}
      {videoFinished && (
        <>
          {/* Dots */}
          <div
            className="
              absolute bottom-20 left-1/2 z-50 flex -translate-x-1/2 items-center
              gap-2.5
            "
          >

            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                aria-label={`Show image ${index + 1}`}
                className={`
                  h-2.5 rounded-full border border-white/80 shadow-sm transition-all duration-500
                  ${
                    currentImage === index
                      ? "w-8 bg-white shadow-white/50"
                      : "w-2.5 bg-white/35 hover:bg-white/80"
                  }
                `}
              />
            ))}

          </div>


          {/**IMAGE COUNTER */}
          <div
            className="
              absolute bottom-18 right-6 z-50 hidden items-center gap-2 text-xs
              font-medium tracking-[0.2em] text-white/70 sm:flex lg:right-10
            "
          >

            <span className="text-white font-semibold tracking-[0.2em] 
            bg-white/20 px-2 py-1 rounded-full shadow-md
            ">
              {String(currentImage + 1).padStart(2, "0")}
            </span>

            <span className="h-0.5 w-4 rounded-full bg-white/40" />

            <span className="text-white font-semibold tracking-[0.2em]
            bg-white/20 px-2 py-1 rounded-full shadow-md
            ">
              {String(images.length).padStart(2, "0")}
            </span>

          </div>
        </>
      )}

    </section>
  );
};

export default Hero;