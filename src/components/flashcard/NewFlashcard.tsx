import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  setFlashcard,
  setShowNewFlashcardModal,
} from "src/redux/slices/flashcard";

const ADD_FLASHCARD = gql`
  mutation (
    $title: String!
    $question: String!
    $answer: String!
    $categoryId: Int!
    $hardness: String
  ) {
    createFlashCard(
      title: $title
      question: $question
      answer: $answer
      categoryId: $categoryId
      hardness: $hardness
    ) {
      id
      title
      answer
      category {
        name
        id
      }
      question
      hardness
      readers {
        name
      }
      createdBy {
        name
      }
    }
  }
`;

const NewFlashcard = () => {
  const [createFlashCard, { loading, error }] = useMutation(ADD_FLASHCARD);
  let question: HTMLInputElement | null,
    answer: HTMLInputElement | null,
    hardness: HTMLInputElement | null;
  const { showNewFlashcardModal, categories } = useAppSelector(
    (state) => state.flashcards
  );
  const dispatch = useAppDispatch();
  const [categoryId, setCategoryId] = useState(0);
  return (
    <div>
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={
          !showNewFlashcardModal
            ? "hidden"
            : "" +
              " overflow-y-auto overflow-x-hidden fixed top-0 right-0 md:left-1/3 "
        }
      >
        <div className="relative p-16 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-gray-200 rounded-lg shadow ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              onClick={() => dispatch(setShowNewFlashcardModal(false))}
            >
              <span className="hover:text-black text-lg">
                <AiOutlineCloseCircle />
              </span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Add New Flashcard
              </h3>
              <form
                className="space-y-6"
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (question)
                    createFlashCard({
                      variables: {
                        hardness: hardness?.value,
                        question: question.value,
                        answer: answer?.value,
                        categoryId,
                        title: "_",
                      },
                    }).then((res) => {
                      dispatch(setFlashcard(res.data.createFlashCard));
                      dispatch(setShowNewFlashcardModal(false));
                    });
                }}
              >
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="hardness"
                    placeholder="HARD | FAIR | EASY "
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    ref={(node) => {
                      hardness = node;
                    }}
                    required
                  />
                  <input
                    type="text"
                    name="question"
                    placeholder="Question"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    ref={(node) => {
                      question = node;
                    }}
                    required
                  />

                  <input
                    type="text"
                    name="answer"
                    placeholder="Answer"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    ref={(node) => {
                      answer = node;
                    }}
                    required
                  />

                  <select
                    id="small"
                    placeholder=""
                    className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => {
                      setCategoryId(parseInt(e.target.value));
                    }}
                  >
                    <option defaultValue={undefined}>Select Category</option>
                    {categories &&
                      categories.map(({ name, id }) => (
                        <option key={id} value={id}>
                          {name}
                        </option>
                      ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFlashcard;
