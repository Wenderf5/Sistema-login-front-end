import { App } from "../App";
import { createBrowserRouter } from "react-router-dom";
import { ContextProvider } from "../context/context";

//Pages
import { SignIn } from "../pages/Sign-in";
import { SignUp } from "../pages/Sign-up";
import { Dashboard } from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/sign-in',
                element: (
                    <ContextProvider>
                        <SignIn />
                    </ContextProvider>

                )
            },
            {
                path: '/sign-up',
                element: (
                    <ContextProvider>
                        <SignUp />
                    </ContextProvider>
                )
            },
            {
                path: '/',
                element: (
                    <ContextProvider>
                        <Dashboard />
                    </ContextProvider>
                )
            }
        ]
    }
])