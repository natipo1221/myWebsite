import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import AboutMe from "./components/AboutMe.jsx";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        (
        <Route path="/" element={<AboutMe />}>
          
        </Route>
        )
      </>
    )
  );

  return <RouterProvider router={router} />;
}
