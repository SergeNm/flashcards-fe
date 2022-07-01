import React from "react";
import "regenerator-runtime/runtime";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reducers from "../src/redux/reducers";
import server from "./mocks/server";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { ...reducers }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

beforeAll(() => {
  // start up the mock server
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
});

// re-export everything
export * from "@testing-library/react";
// override render method
