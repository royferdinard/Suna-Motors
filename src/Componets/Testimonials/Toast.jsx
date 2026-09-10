import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const Toast = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="
            fixed
            left-1/2
            top-6
            z-[60]
            w-[calc(100%-2rem)]
            max-w-md
            -translate-x-1/2
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-orange-500/20
              bg-white
              px-4
              py-3
              shadow-xl
              shadow-gray-900/10
              dark:border-gray-800
              dark:bg-gray-950
              dark:shadow-black/30
            "
          >
            {/* Success Icon */}
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-orange-500/10
              "
            >
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="h-5 w-5 text-orange-500"
              />
            </div>

            {/* Message */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Success
              </p>

              <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
                {message}
              </p>
            </div>

            {/* Close Button */}
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close notification"
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-gray-400
                  transition
                  hover:bg-gray-100
                  hover:text-gray-700
                  dark:hover:bg-gray-800
                  dark:hover:text-white
                "
              >
                <FontAwesomeIcon icon={faXmark} className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
