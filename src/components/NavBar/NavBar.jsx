// Importações do React
import {
    useContext,
    useLayoutEffect,
    useState
} from "react";

// Importações do react-router-dom
import { Link } from "react-router-dom";

// Importações de contexto
import { AppContext } from "../../contexts/AppContext";

// Importação dos estilos
import styles from "./NavBar.module.scss";

// Importações de imagens
import close from "../../assets/shared/icon-close.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import logo from "../../assets/shared/logo.svg";

// Exporta a função do componente
export function NavBar() {
    // Estado que indica se o navBar deve ser exibido no modo mobile
    const [navBar, setNavBar] = useState(false);

    // Recebe os dados do contexto
    const appContextData = useContext(AppContext);

    // Função que recebe o tamanho da tela
    function useWindowSize() {
        // Define o estado que armazena as dimensões da tela
        const [size, setSize] = useState(0);

        // useLayoutEffect para atualiza as dimensões de tela
        useLayoutEffect(() => {
            // Função que atualiza as dimenções
            function updateSize() {
                // Recebe as novas dimensões
                setSize(window.innerWidth);
            }

            // Adiciona um event listener de resize
            window.addEventListener('resize', updateSize);
            
            // Calcula o resize mesmo que o usuário não tenha alterado a tela (primeira vez apenas)
            updateSize();

            // Remove o event listener
            return () => window.removeEventListener('resize', updateSize);
        }, []);

        // Retorna o tamanho da tela
        return size;
    }

    // Recebe o tamanho da tela
    const width = useWindowSize();

    // Retorna o componente renderizado
    return (
        <header id={styles.navBarHeader}>
            <img
                alt="Logo"
                id={styles.logo}
                src={logo}
            />

            {(width < 768) ? (
                <>
                    <button
                        id={styles.openNavBarMobile}
                        onClick={() => {
                            setNavBar(!navBar);
                        }}
                    >
                        <img
                            alt="Open navigation bar"
                            src={hamburger}
                        />
                    </button>

                    {(navBar) === true ? (
                        <div id={styles.navBarMobileContainer}>
                            <button
                                id={styles.closeNavBarMobile}
                                onClick={() => {
                                    setNavBar(!navBar);
                                }}
                            >
                                <img
                                    alt="Close navigation bar"
                                    src={close}
                                />
                            </button>

                            <nav id={styles.navBarMobile}>
                                <Link
                                    to={{pathname: "/"}}
                                    onClick={() => {
                                        appContextData.setPageIndex(0);
                                    }}
                                >
                                    <span>00</span>
                                    <span>HOME</span>
                                </Link>
                                <Link
                                    to={{pathname: "/destination/"}}
                                    onClick={() => {
                                        appContextData.setPageIndex(1);
                                    }}
                                >
                                    <span>01</span>
                                    <span>DESTINATION</span>
                                </Link>
                                <Link
                                    to={{pathname: "/crew/"}}
                                    onClick={() => {
                                        appContextData.setPageIndex(2);
                                    }}
                                >
                                    <span>02</span>
                                    <span>CREW</span>
                                </Link>
                                <Link
                                    to={{pathname: "/technology/"}}
                                    onClick={() => {
                                        appContextData.setPageIndex(3);
                                    }}
                                >
                                    <span>03</span>
                                    <span>TECHNOLOGY</span>
                                </Link>
                            </nav>
                        </div>
                    ) : (
                        null
                    )}
                </>
            ) : (width >= 768 && width < 1440) ? (
                <nav id={styles.navBarTablet}>
                    {(appContextData.pageIndex) === 0 ? (
                        <Link
                            to={{pathname: "/"}}
                            style={{
                                borderBottom: "2px solid rgba(255, 255, 255, 1.0)"
                            }}
                        >
                            <span>00</span>
                            <span>HOME</span>
                        </Link>
                    ) : (
                        <Link
                            to={{pathname: "/"}}
                            onClick={() => {
                                appContextData.setPageIndex(0);
                            }}
                        >
                            <span>00</span>
                            <span>HOME</span>
                        </Link>
                    )}
                    {(appContextData.pageIndex) === 1 ? (
                        <Link
                            to={{pathname: "/destination/"}}
                            style={{
                                borderBottom: "2px solid rgba(255, 255, 255, 1.0)"
                            }}
                        >
                            <span>01</span>
                            <span>DESTINATION</span>
                        </Link>
                    ) : (
                        <Link
                            to={{pathname: "/destination/"}}
                            onClick={() => {
                                appContextData.setPageIndex(1);
                            }}
                        >
                            <span>01</span>
                            <span>DESTINATION</span>
                        </Link>
                    )}
                    {(appContextData.pageIndex) === 2 ? (
                        <Link
                            to={{pathname: "/crew/"}}
                            style={{
                                borderBottom: "2px solid rgba(255, 255, 255, 1.0)"
                            }}
                        >
                            <span>02</span>
                            <span>CREW</span>
                        </Link>
                    ) : (
                        <Link
                            to={{pathname: "/crew/"}}
                            onClick={() => {
                                appContextData.setPageIndex(2);
                            }}
                        >
                            <span>02</span>
                            <span>CREW</span>
                        </Link>
                    )}
                    {(appContextData.pageIndex) === 3 ? (
                        <Link
                            to={{pathname: "/technology/"}}
                            style={{
                                borderBottom: "2px solid rgba(255, 255, 255, 1.0)"
                            }}
                        >
                            <span>03</span>
                            <span>TECHNOLOGY</span>
                        </Link>
                    ) : (
                        <Link
                            to={{pathname: "/technology/"}}
                            onClick={() => {
                                appContextData.setPageIndex(3);
                            }}
                        >
                            <span>03</span>
                            <span>TECHNOLOGY</span>
                        </Link>
                    )}
                </nav>
            ) : (width >= 1440) ? (
                <>
                    <span id={styles.decorativeLine}></span>

                    <nav id={styles.navBarDesktop}>
                        {(appContextData.pageIndex) === 0 ? (
                            <Link
                                to={{pathname: "/"}}
                                style={{
                                    borderBottom: "2px solid rgba(255, 255, 255, 1.0)"
                                }}
                            >
                                <span>00</span>
                                <span>HOME</span>
                            </Link>
                        ) : (
                            <Link
                                to={{pathname: "/"}}
                                onClick={() => {
                                    appContextData.setPageIndex(0);
                                }}
                            >
                                <span>00</span>
                                <span>HOME</span>
                            </Link>
                        )}
                        {(appContextData.pageIndex) === 1 ? (
                            <Link
                                to={{pathname: "/destination/"}}
                                style={{
                                    borderBottom: "2px solid rgba(255, 255, 255, 1.0)"
                                }}
                            >
                                <span>01</span>
                                <span>DESTINATION</span>
                            </Link>
                        ) : (
                            <Link
                                to={{pathname: "/destination/"}}
                                onClick={() => {
                                    appContextData.setPageIndex(1);
                                }}
                            >
                                <span>01</span>
                                <span>DESTINATION</span>
                            </Link>
                        )}
                        {(appContextData.pageIndex) === 2 ? (
                            <Link
                            to={{pathname: "/crew/"}}
                                style={{
                                    borderBottom: "2px solid rgba(255, 255, 255, 1.0)"
                                }}
                            >
                                <span>02</span>
                                <span>CREW</span>
                            </Link>
                        ) : (
                            <Link
                            to={{pathname: "/crew/"}}
                                onClick={() => {
                                    appContextData.setPageIndex(2);
                                }}
                            >
                                <span>02</span>
                                <span>CREW</span>
                            </Link>
                        )}
                        {(appContextData.pageIndex) === 3 ? (
                            <Link
                                to={{pathname: "/technology/"}}
                                style={{
                                    borderBottom: "2px solid rgba(255, 255, 255, 1.0)"
                                }}
                            >
                                <span>03</span>
                                <span>TECHNOLOGY</span>
                            </Link>
                        ) : (
                            <Link
                                to={{pathname: "/technology/"}}
                                onClick={() => {
                                    appContextData.setPageIndex(3);
                                }}
                            >
                                <span>03</span>
                                <span>TECHNOLOGY</span>
                            </Link>
                        )}
                    </nav>
                </>
            ) : (
                null
            )}
        </header>
    );
}