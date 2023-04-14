// import { HashRouter, Routes, Route } from "react-router-dom";
// import HomeView from "./views/HomeView";
// import RecipeView from "./views/RecipeView";
// import LoginView from "./views/LoginView";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <HashRouter>
//       <header>
//         <div>
//           <Navbar />
//           <main></main>
//           <Footer />
//           <Routes>
//             <Route path="/" element={<HomeView />} />
//             <Route path="/Recipes" component={<RecipeView />} />
//             <Route path="/Login" component={<LoginView />} />
//           </Routes>
//         </div>
//       </header>
//     </HashRouter>
//   );
// }

// export default App;
import "./index.css";
import HomeView from "./views/HomeView";
import RecipeView from "./views/RecipeView";
import LoginView from "./views/LoginView";
import FavoritesView from "./views/FavoritesView";
import ShoppingListView from "./views/ShoppingListView";
import SubmitRecipeView from "./views/SubmitRecipeView";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import CategoryList from "./components/CategoryList";

function Root() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <HomeView />, path: "/" },
        { element: <CategoryList />, path: "/category/:id" },
        { element: <RecipeView />, path: "/Recipes/:id/:id" },
        { element: <RecipeView />, path: "/Recipes/:id" },
        { element: <RecipeView />, path: "/Recipes" },
        { element: <FavoritesView />, path: "/Favorites" },
        { element: <ShoppingListView />, path: "/Shoppinglist" },
        { element: <SubmitRecipeView />, path: "/My-recipes" },

        { element: <LoginView />, path: "/Login" },
      ],
      element: <Root />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
