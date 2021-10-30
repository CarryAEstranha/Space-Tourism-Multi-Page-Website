// React imports
import {
    createContext,
    useEffect,
    useState
} from "react";

// Create and export the context
export const AppContext = createContext({});

// Export the function of contexts
export function AppContextProvider(props) {
    // Estado que armazena os indices da aplicação
    const [appIndex, setAppIndex] = useState({
        destinations: 0,
        crew: 0,
        technology: 0
    });
    // Estado que armazena o indice da página atual (efeito visual apenas)
    const [pageIndex, setPageIndex] = useState(0);

    // useEffect para verificar o endereço atual
    useEffect(() => {
        // Verifica qual é a página atual
        if (window.location.pathname === "/") {
            // Atualiza a informação visual do header
            setPageIndex(0);
        } else if (window.location.pathname === "/destination/") {
            // Atualiza a informação visual do header
            setPageIndex(1);
        } else if (window.location.pathname === "/crew/") {
            // Atualiza a informação visual do header
            setPageIndex(2);
        } else if (window.location.pathname === "/technology/") {
            // Atualiza a informação visual do header
            setPageIndex(3);
        }
    }, []);

    // Return the context
    return (
        <AppContext.Provider value={{
            appIndex,
            setAppIndex,
            pageIndex,
            setPageIndex
        }}>
            {props.children}
        </AppContext.Provider>
    );
}