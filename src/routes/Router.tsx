import { App } from "../App";
import { createBrowserRouter } from "react-router-dom";
import { ContextProvider } from "../context/context";

//Pages
import { SignIn } from "../pages/Sign-in";
import { SignUp } from "../pages/Sign-up";
import { Dashboard } from "../pages/Dashboard";
import { Auth } from "../Auth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/sign-in',
                element: (
                    <ContextProvider>
                        <Auth url1="/sign-in" url2="/">
                            <SignIn />
                        </Auth>
                    </ContextProvider>

                )
            },
            {
                path: '/sign-up',
                element: (
                    <ContextProvider>
                        <Auth url1="/sign-up" url2="/">
                            <SignUp />
                        </Auth>
                    </ContextProvider>
                )
            },
            {
                path: '/',
                element: (
                    <ContextProvider>
                        <Auth url1="/sign-in" url2="/">
                            <Dashboard />
                        </Auth>
                    </ContextProvider>
                )
            }
        ]
    }
])