import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FlashCard, Category } from "../../models/models";

interface State {
  flashcards: Array<FlashCard>;
  flashcard: FlashCard;
  categoryFlashcards: Array<FlashCard>;
  showNewCategoryModal: boolean;
  showNewFlashcardModal: boolean;
  categories: Array<Category>;
}

const slice = createSlice({
  name: "flashcards",
  initialState: {
    flashcards: [{}],
    flashcard: {},
    categories: [{}],
    showNewCategoryModal: false,
    showNewFlashcardModal:false,
  } as State,
  reducers: {
    setFlashcards(state: State, action: PayloadAction<FlashCard[]>) {
      state.flashcards = action.payload;
      state.flashcard = state.flashcards[0]
    },
    setFlashcard(state: State, action: PayloadAction<FlashCard>) {
      state.flashcard = action.payload;
    },
    setShowNewCategoryModal(state: State, action: PayloadAction<boolean>) {
      state.showNewCategoryModal = action.payload;
    },
    setShowNewFlashcardModal(state: State, action: PayloadAction<boolean>) {
      state.showNewFlashcardModal = action.payload;
    },
    setCategories(state: State, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
    addCategory(state: State, action: PayloadAction<Category>) {
      state.categories = [...state.categories, action.payload];
    },
    setCategoryFlashcards(state: State, action: PayloadAction<FlashCard[]>) {
      state.categoryFlashcards = action.payload;
    },
  },
});

export const flashcardsReducer = slice.reducer;
export const {
  setFlashcards,
  setFlashcard,
  setShowNewCategoryModal,
  setShowNewFlashcardModal,
  setCategories,
  addCategory,
  setCategoryFlashcards,
} = slice.actions;
