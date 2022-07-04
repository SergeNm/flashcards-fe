
import { flashcardsReducer } from "./slices/flashcard";
import { themeReducer } from "./slices/theme";

const reducers = {
  theme: themeReducer,
  flashcards: flashcardsReducer,
};

export default reducers;
