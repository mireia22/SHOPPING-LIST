import { AppHeader, AppMain } from "./App-styles.jsx";
import ShoppingList from "./Pages/ShoppingList/ShoppingList";
import Home from "./Pages/Home/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import ReturnButton from "./components/ReturnButton/ReturnButton";
import SavedList from "./Components/SavedList/SavedList.jsx";
function App() {
  const location = useLocation();

  const shoppingRoute = location.pathname === "/shopping-list";
  const homeRoute = location.pathname === "/";

  const showReturnButton = location.pathname !== "/";

  return (
    <>
      <AppHeader>
        {homeRoute && <h1>List App 🗒️</h1>}
        {shoppingRoute && <h1>Shopping List 🛒</h1>}
      </AppHeader>
      <AppMain>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/list/:id" element={<SavedList />} />
        </Routes>
        {showReturnButton && <ReturnButton />}
      </AppMain>
    </>
  );
}

export default App;
