import { createContext, useState } from "react";

interface contextInterface {
    validation: boolean;
    setValidation: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<contextInterface | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
    const [validation, setValidation] = useState<boolean>(false);

    return (
        <Context.Provider value={{ validation, setValidation }}>
            {children}
        </Context.Provider>
    )
}