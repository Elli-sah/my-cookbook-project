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
import SubmitRecipeView from "./views/SubmitRecipeView";
// import { RecipeContext } from "./components/RecipeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import CategoryView from "./views/CategoryView";

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

function App() {
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

  return <RouterProvider router={router} />;
}

export default App;
