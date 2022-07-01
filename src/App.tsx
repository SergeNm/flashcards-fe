import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/app/Spinner";
import FlashCards from "./components/flashcard/FlashCards";
import Navbar from "./components/flashcard/Navbar";
const Portfolio = React.lazy(
  () => import("./components/flashcard/Portfolio")
);

const App = () => {

  return (
    <React.Suspense fallback={<Spinner />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/flashcards" element={<FlashCards />} />
        
      </Routes>
    </React.Suspense>
  );
};

export default App;
