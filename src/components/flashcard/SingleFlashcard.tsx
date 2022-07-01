import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";
import { FlashCard } from "src/models/models";

const SingleFlashcard = ({ id, title, answer, category, question, hardness, readers, createdBy }: FlashCard) => {

  return (
    <div className="p-4">
      <div className={"w-72 p-4 rounded-lg border shadow-md bg-gray-300 text-gray-700 border-gray-400"}>
        <div className="flex flex-col items-center pb-10">
          {title}
          <h5 className="mb-1 text-xl font-medium ">
            {question}
          </h5>
          <span className="text-sm ">
            {category}
          </span>
          <div className="flex mt-4 space-x-3 lg:mt-6">
          <Link to={`/users`}>
            <button
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <MdPreview />
              Flip
            </button>
            </Link>
            <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">
              <BiLinkExternal />
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFlashcard;
