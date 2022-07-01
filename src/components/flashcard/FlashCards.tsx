import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import SingleFlashcard from "./SingleFlashcard";
import { FlashCard } from "src/models/models";
import { useNavigate } from "react-router-dom";

const FlashCards = () => {
  const GET_FLASHCARDS = gql`
    query GetFlashcards {
      flashCards {
        id
        title
        question
      }
    }
  `;

  const token = localStorage.getItem("token");
  let navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_FLASHCARDS);
  useEffect(() => {
    if (token) {
      return navigate("/flashcards");
    }
    if (!token) {
      return navigate("/");
    }
  }, [token, navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const flashCards = data?.flashCards;
  console.log("🚀 ~ file: App.tsx ~ line 18 ~ App ~ data", data);
  return (
    <div className="py-8 px-4 flex flex-col justify-center items-center ">
      <div className="py-8 px-4 flex justify-center items-center">
        {flashCards &&
          flashCards.map(({ id, title, question }: FlashCard, i: number) => (
            <SingleFlashcard
              id={id}
              title={title}
              question={question}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};

export default FlashCards;
