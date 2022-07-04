import React from "react";
import logo from "../../assets/logo.png";
import "./styles.css";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import FlashCards from "./FlashCards";
import Card from "./Card";
import NewCategory from "./NewCategory";
import { useAppDispatch } from "src/redux/hooks";
import {
  setFlashcards,
  setShowNewCategoryModal,
  setShowNewFlashcardModal,
} from "src/redux/slices/flashcard";
import Sort from "./Sort";
import Logout from "./Logout";
import { gql, useQuery } from "@apollo/client";
import Spinner from "../app/Spinner";
import { AiOutlinePlus } from "react-icons/ai";
import NewFlashcard from "./NewFlashcard";

const Dashboard = () => {
  const GET_FLASHCARDS = gql`
    query GetFlashcards {
      flashCards {
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

  const dispatch = useAppDispatch();
  const { data, loading, error } = useQuery(GET_FLASHCARDS);
  if (loading)
    return (
      <div className="flex  h-screen justify-center items-center">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div className="flex h-screen justify-center items-center">
        {error.message}
      </div>
    );

  let flashCards = data?.flashCards;

  dispatch(setFlashcards(flashCards));

  // useEffect(() => {
  //   return;
  // }, [flashcards]);

  return (
    <div>
      <div className="relative min-h-screen md:flex">
        <input type="checkbox" id="menu-open" className="hidden" />
        <label
          htmlFor="menu-open"
          className="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden"
          data-dev-hint="floating action button"
        >
          <FiMenu />
        </label>

        <header
          className="bg-gray-100 text-gray-700 flex justify-between md:hidden"
          data-dev-hint="mobile menu bar"
        >
          <span className="block p-4 text-white font-bold whitespace-nowrap truncate">
            <img src={logo} alt="" className="h-8" />
          </span>

          <label
            htmlFor="menu-open"
            id="mobile-menu-button"
            className="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md"
          >
            <FiMenu />
          </label>
        </header>
        <Sidebar />
        <main
          onClick={() => {
            dispatch(setShowNewCategoryModal(false));
          }}
          id="content"
          className="flex-1 p-6 lg:px-8"
        >
          <div className="flex justify-between items-center gap-4">
            <Sort />
            <button
              onClick={() => dispatch(setShowNewFlashcardModal(true))}
              className="bg-gray-300 h-8 md:h-16 hover:bg-gray-400 text-gray-800 font-bold  px-8 md:px-16 rounded inline-flex items-center"
            >
              <span className="text-3xl">
                {" "}
                <AiOutlinePlus />
              </span>
            </button>
            <NewFlashcard />
            <Logout />
          </div>
          <div className="w-full mx-auto">
            <div className="px-4 py-6 flex flex-col gap-4 justify-center items-center sm:px-8">
              <div className="border-4 border-dashed border-gray-200 rounded-lg w-full md:w-1/2 h-full">
                <Card />
              </div>
              <button className="w-full md:w-1/2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Reveal The Answer
              </button>
            </div>
            <div></div>
            <div className="px-4 flex flex-col gap-4 justify-center items-center sm:px-8">
              <FlashCards />
            </div>
          </div>
        </main>
        <NewCategory />
      </div>
    </div>
  );
};

export default Dashboard;
