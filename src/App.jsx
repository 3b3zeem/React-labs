import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import LayOut from "./components/LayOut/LayOut";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
// import ProductList from "./components/Product/ProductList";
// import Categories from "./components/Categories/Categories";
// import Cart from "./components/Cart/Cart";
// import ProductDetails from "./components/ProductDetails/ProductDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { lazy, Suspense } from "react";

function App() {
  const Home = lazy(() => import("./components/Product/ProductList"));
  const ProductDetails = lazy(() =>
    import("./components/ProductDetails/ProductDetails")
  );
  const Categories = lazy(() => import("./components/Categories/Categories"));
  const Cart = lazy(() => import("./components/Cart/Cart"));
  const Login = lazy(() => import("./components/Login/Login"));
  const Register = lazy(() => import("./components/Register/Register"));

  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        {
          path: "",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoutes>
              <Suspense>
                <Categories />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoutes>
              <Suspense>
                <Cart />
              </Suspense>
            </ProtectedRoutes>
          ),
        },
        {
          path: "product-details/:id",
          element: (
            <Suspense>
              <ProductDetails />
            </Suspense>
          ),
        },
        {
          path: "login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense>
              <Register />
            </Suspense>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
