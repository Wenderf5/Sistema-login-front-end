import { createContext, useState } from "react";

interface ErroContextInterface {
    error: boolean;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ErroContext = createContext<ErroContextInterface | undefined>(undefined)

export function ErroContextProvider({ children }: { children: React.ReactNode }) {
    const [error, setError] = useState<boolean>(false);
    return (
        <ErroContext.Provider value={{ error, setError }}>
            {children}
        </ErroContext.Provider>
    )
}