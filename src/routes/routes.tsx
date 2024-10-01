import { createBrowserRouter, redirect } from "react-router-dom";
import { ContextProvider } from "../context/context";
import { verifySession } from "../utils/verifySession";

//Pages
import { App } from "../App";
import { SignIn } from "../pages/Sign-in";
import { SignUp } from "../pages/Sign-up";
import { Dashboard } from "../pages/Dashboard";

export const routes = createBrowserRouter([
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

                ),
                loader: async () => {
                    const isAuthenticated = await verifySession();
                    if (isAuthenticated) {
                        return redirect('/');
                    }
                    return null;
                }
            },
            {
                path: '/sign-up',
                element: (
                    <ContextProvider>
                        <SignUp />
                    </ContextProvider>
                ),
                loader: async () => {
                    const isAuthenticated = await verifySession();
                    if (isAuthenticated) {
                        return redirect('/');
                    }
                    return null;
                }
            },
            {
                path: '/',
                element: (
                    <ContextProvider>
                        <Dashboard />
                    </ContextProvider>
                ),
                loader: async () => {
                    const isAuthenticated = await verifySession();
                    if (isAuthenticated) {
                        return null;
                    }
                    return redirect('/sign-in');
                }
            }
        ]
    }
]);
