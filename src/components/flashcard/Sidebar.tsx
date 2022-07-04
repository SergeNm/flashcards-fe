import React, { useEffect } from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import { BiCategory, BiHomeHeart, BiListUl } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { gql, useQuery } from "@apollo/client";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  setShowNewCategoryModal,
  setCategories,
  setCategoryFlashcards,
} from "src/redux/slices/flashcard";
import { Category } from "src/models/models";

const Sidebar = () => {
  const GET_CATEGORIES = gql`
    query GetCategories {
      categories {
        name
        id
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const dispatch = useAppDispatch();
  const { showNewCategoryModal, categories, flashcards } = useAppSelector(
    (state) => state.flashcards
  );

  useEffect(() => {
    dispatch(setCategories(data?.categories));
  }, [data, dispatch]);

  return (
    <aside
      id="sidebar"
      className="bg-gray-100 text-gray-600 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto"
    >
      <div
        className="flex flex-col space-y-6"
        data-dev-hint="optional div for having an extra footer navigation"
      >
        <span className="text-white flex items-center space-x-2 px-4">
          {/* image */}
          <span className="text-2xl font-extrabold whitespace-nowrap truncate">
            <img src={logo} alt="" className="h-16" />
          </span>
        </span>

        <nav data-dev-hint="main navigation">
          <span className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
            <span>
              <BiHomeHeart />
            </span>
            <span>Learn</span>
          </span>
          <span className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
            <span>
              <BiListUl />
            </span>
            <span>All</span>
          </span>
          <span className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
            <span>
              <BiCategory />
            </span>
            <span>Categories</span>
            <span
              onClick={() =>
                dispatch(setShowNewCategoryModal(!showNewCategoryModal))
              }
              className="pl-4"
            >
              {" "}
              <span className="hover:text-blue-300">
                <AiOutlinePlus />
              </span>{" "}
            </span>
          </span>
          {categories &&
            categories.map((category: Category) => (
              <span
                onClick={() => {
                  dispatch(
                    setCategoryFlashcards(
                      flashcards.filter(
                        (f) => f.category?.name === category.name
                      )
                    )
                  );
                }}
                className="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
                key={category.name}
              >
                <span className="ml-6">{category.name}</span>
              </span>
            ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
