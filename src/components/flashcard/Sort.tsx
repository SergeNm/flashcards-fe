import React from "react";

const Sort = () => {
  return (
    <div className="w-40">
      <label
        htmlFor="small"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Sort-by
      </label>
      <select
        id="small"
        className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="--"></option>
      </select>
    </div>
  );
};

export default Sort;
