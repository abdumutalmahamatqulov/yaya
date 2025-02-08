import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Page/LoginPage";
import Home from "./Page/Home";
import Layout from "./Components/Layout";
import Catalog from "./Page/Catalog";
import Products from "./Catalog/Products";
import Buy from "./Catalog/Buy";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '/home',
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/home/catalog",
          element: <Catalog />
        },
        {
          path: "/home/product",
          element: <Buy/> 
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

