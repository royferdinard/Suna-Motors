import React from "react";
import { getInitials } from "./Getinitials";
const SIZE_STYLES = {
  sm: "h-10 w-10 text-xs",
  md: "h-12 w-12 text-sm",
  lg: "h-16 w-16 text-base",
};

// Deterministic accent so the same customer always gets the same tint,
// pulled from the palette already used elsewhere on the page (orange
// accent + neutral grays) rather than a new color.
const TINTS = [
  "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20",
  "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700",
];

function tintFor(name) {
  const sum = name.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return TINTS[sum % TINTS.length];
}

const Avatar = ({ name, size = "md" }) => {
  const initials = getInitials(name);

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full border font-semibold ${SIZE_STYLES[size]} ${tintFor(
        name,
      )}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};

export default Avatar;
