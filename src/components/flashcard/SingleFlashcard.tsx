import React from "react";
import { MdPreview } from "react-icons/md";
import { FlashCard } from "src/models/models";
import { useAppDispatch } from "src/redux/hooks";
import { setFlashcard } from "src/redux/slices/flashcard";

const SingleFlashcard = ({
  id,
  title,
  answer,
  category,
  question,
  hardness,
  readers,
  createdBy,
}: FlashCard) => {
  const dispatch = useAppDispatch();
  return (
    <div className="p-4">
      <div
        className={
          "w-64 p-4 rounded-lg border shadow-md bg-gray-300 text-gray-700 border-gray-400"
        }
      >
        <div className="flex flex-col items-center pb-10">
          {hardness}
          <h5 className="mb-1 text-xl font-medium ">{question?.slice(0,20)}</h5>
          <span className="text-sm ">{category}</span>
          <div className="flex mt-4 space-x-3 lg:mt-6">
            <button
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                dispatch(
                  setFlashcard({
                    id,
                    title,
                    answer,
                    category,
                    question,
                    hardness,
                    readers,
                    createdBy,
                  })
                );
              }}
            >
              <MdPreview />
              Flip
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFlashcard;
