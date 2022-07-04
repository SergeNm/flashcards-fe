import React, { useEffect } from "react";
import SingleFlashcard from "./SingleFlashcard";
import { FlashCard } from "src/models/models";
import { useNavigate } from "react-router-dom";
import {  useAppSelector } from "src/redux/hooks";

const FlashCards = () => {
  const token = localStorage.getItem("token");
  let navigate = useNavigate();

  const { flashcards, categoryFlashcards } = useAppSelector(
    (state) => state.flashcards
  );
  let flashcardsToDisplay = categoryFlashcards || flashcards;

  useEffect(() => {
    if (token) {
      return navigate("/flashcards");
    }
    if (!token) {
      return navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
      <div className="md:py-2 px-4 flex flex-col justify-center items-center ">
        <div className="md:py-2 overflow-auto px-4 w-full h-72 flex flex-wrap flex-col md:flex-row justify-center items-center">
          {flashcardsToDisplay &&
            flashcardsToDisplay.map(
              ({ id, title, question, hardness }: FlashCard, i: number) => (
                <SingleFlashcard
                  id={id}
                  title={title}
                  question={question}
                  hardness={hardness}
                  key={i}
                />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
