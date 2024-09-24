import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifySession } from "../utils/verifySession";

interface props {
    children: React.ReactNode;
    loggedOut: string;
    loggedIn: string;
}

export function Auth({ children, loggedOut, loggedIn }: props) {
    const navigate = useNavigate();

    useEffect(() => {
        async function sessionVerify() {
            const session = await verifySession();
            if (session) {
                navigate(loggedIn);
            } else {
                navigate(loggedOut);
            }
        }
        sessionVerify();
    }, []);

    return <>{children}</>;
}