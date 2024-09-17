import { App } from "../App";
import { createBrowserRouter } from "react-router-dom";

//Pages
import { SignIn } from "../pages/Sign-in";
import { SignUp } from "../pages/Sign-up";
import { ErroContextProvider } from "../context/erro";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/sign-in',
                element: (
                    <ErroContextProvider>
                        <SignIn />
                    </ErroContextProvider>
                )
            },
            {
                path: '/sign-up',
                element: (
                    <ErroContextProvider>
                        <SignUp />
                    </ErroContextProvider>
                )
            }
        ]
    }
])