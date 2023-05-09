import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Outlet,
    Link,
    RouterProvider,
} from "react-router-dom";

import Root from "./views/Root";
import AboutPage from "./views/AboutPage";
import AccountPage from "./views/AccountPage";
import CartPage from "./views/CartPage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import ProdPage from "./views/ProdPage";
import ErrorPage from "./views/ErrorPage";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//     <React.StrictMode></React.StrictMode>
// );

// console.log("working");
// export function Main() {
//     console.log("working2");
//     // route creation
//     const router = createBrowserRouter(
//         createRoutesFromElements(
//             <Route path="/" element={<Root />}>
//                 <Route index element={<HomePage />} />
//                 <Route path="/testing" element={<Testing />} />
//                 <Route path="/about" element={<AboutPage />} />
//                 <Route path="/account" element={<AccountPage />} />
//                 <Route path="/cart" element={<CartPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/prod" element={<ProdPage />} />
//             </Route>
//         )
//     );
//     return (
//         <div className="Main">
//             <RouterProvider router={router} />
//         </div>
//     );
// }

// const Root = () => {
//     return (
//         <>
//             {/* nav bar element on every page */}
//             <div>
//                 <Link to="/"> Home </Link>
//                 <Link to="/home"> Home </Link>
//             </div>

//             {/* page element */}
//             <div>
//                 <Outlet />
//             </div>
//         </>
//     );
// };

// const Testing = () => {
//     return <h1>working</h1>;
// };

// Main();

// react-router-dom documentation tutorial
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <HomePage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "about",
                element: <AboutPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "login",
                element: <LoginPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "prod",
                element: <ProdPage />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);
// '!' is added as a null-check, but more specifically as a non-null assertion (assuming value will never be null)
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
