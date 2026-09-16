import React from "react";

const EmptyState = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-200 py-16 text-center dark:border-gray-800">
      <p className="text-base font-semibold text-gray-900 dark:text-white">
        No testimonials found
      </p>
      <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
        Try another category or explore all customer experiences.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-2 rounded-full border border-gray-900 px-5 py-1.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
      >
        View all
      </button>
    </div>
  );
};

export default EmptyState;
