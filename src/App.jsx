import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import MainLayout from "./layout/MainLayout";
import About from "./page/About";
import Home from "./page/Home";
import Contact from "./page/Contact";
import Product from "./components/Product";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/product/:id", element: <Product /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
