import { App } from "../App";
import { createBrowserRouter } from "react-router-dom";

//Pages
import { SignIn } from "../pages/Sign-in";
import { SignUp } from "../pages/Sign-up";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            }
        ]
    }
])