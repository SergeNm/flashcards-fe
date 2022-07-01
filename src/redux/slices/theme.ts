import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "../../models/models";

interface State {
    theme: Theme;
}

const slice = createSlice({
    name: "global",
    initialState: {
        theme: {themeName:'light'}
    } as State,
    reducers: {
      setTheme(state: State, action: PayloadAction<Theme>) {
        state.theme = {themeName: action.payload.themeName };
      },
    },
  });
  
  export const themeReducer = slice.reducer;
  export const { setTheme } = slice.actions;
  
