import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import { MovieProvider } from "./contex/MovieContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" element={<HomePage />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
