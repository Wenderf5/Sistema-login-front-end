import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifySession } from "../utils/verifySession";

interface props {
    children: React.ReactNode;
    url1: string;
    url2: string;
}

export function Auth({ children, url1, url2 }: props) {
    const navigate = useNavigate();

    useEffect(() => {
        async function sessionVerify() {
            const session = await verifySession();
            if (!session) {
                navigate(url1);
            } else {
                navigate(url2);
            }
        }
        sessionVerify();
    }, []);

    return <>{children}</>;
}