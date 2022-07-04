import React from "react";
import { useAppSelector } from "src/redux/hooks";

const Card = () => {
  const { flashcard } = useAppSelector((state) => state.flashcards);
  return (
    <div>
      <div className="block overflow-auto p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {flashcard.hardness}
        </h5>
        <p className="font-normal text-gray-700 ">
          {flashcard.question}
        </p>
      </div>
    </div>
  );
};

export default Card;
