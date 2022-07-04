import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/app/Spinner";
import Dashboard from "./components/flashcard/Dashboard";
const LandingPage = React.lazy(
  () => import("./components/flashcard/LandingPage")
);

const App = () => {

  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/flashcards" element={<Dashboard />} />        
      </Routes>
    </React.Suspense>
  );
};

export default App;
