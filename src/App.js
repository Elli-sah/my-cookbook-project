import "./index.css";
import React from "react";
import HomeView from "./views/HomeView";
import RecipeView from "./views/RecipeView";
import LoginView from "./views/LoginView";
import FavoritesView from "./views/FavoritesView";
import SubmitRecipeView from "./views/SubmitRecipeView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import CategoryView from "./views/CategoryView";
import { ThemeProvider } from "./components/ThemeContext";

function Root() {
  return (
    <div className="app">
      <ThemeProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <CategoryView />, path: "/Recipes/:id" },
        { element: <RecipeView />, path: "/Recipes/:category/:id" },

        { element: <CategoryView />, path: "/Recipes" },
        { element: <FavoritesView />, path: "/Favorites" },
        { element: <SubmitRecipeView />, path: "/My-recipes" },
        { element: <LoginView />, path: "/Login" },
      ],
      element: <Root />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />{" "}
    </>
  );
}
