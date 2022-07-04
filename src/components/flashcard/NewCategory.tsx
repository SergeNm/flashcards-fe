import { gql, useMutation } from "@apollo/client";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
  addCategory,
  setShowNewCategoryModal,
} from "src/redux/slices/flashcard";

const ADD_CATEGORY = gql`
  mutation ($name: String!) {
    createCategory(name: $name) {
      name
    }
  }
`;

const NewCategory = () => {
  const [createCategory, { loading, error }] = useMutation(ADD_CATEGORY);
  let categoryName: HTMLInputElement | null;
  const { showNewCategoryModal } = useAppSelector(
    (state) => state.flashcards
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={
          !showNewCategoryModal
            ? "hidden"
            : "" +
              " overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 "
        }
      >
        <div className="relative p-16 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-gray-200 rounded-lg shadow ">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              onClick={() => dispatch(setShowNewCategoryModal(false))}
            >
              <span className="hover:text-black text-lg">
                <AiOutlineCloseCircle />
              </span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                Add Category
              </h3>
              <form
                className="space-y-6"
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (categoryName)
                    createCategory({
                      variables: {
                        name: categoryName.value,
                      },
                    }).then((res) => {
                      dispatch(setShowNewCategoryModal(false));
                      dispatch(addCategory(res.data.createCategory));
                    });
                }}
              >
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    ref={(node) => {
                      categoryName = node;
                    }}
                    required
                  />
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

export default NewCategory;
