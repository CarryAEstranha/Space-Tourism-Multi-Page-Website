// Importações do React
import {
    useContext,
    useLayoutEffect,
    useState
} from "react";

// Importações de contexto
import { AppContext } from "../../contexts/AppContext";

// Importações dos estilos
import styles from "./Technology.module.scss";

// Exporta a função da página Technology
export function Technology(props) {
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

    // Define o título da página
    document.title = "Space Tourism | Technology";

    // Retorna a página renderizada
    return (
        <div id={styles.technology}>
            <div id={styles.background}></div>

            <div id={styles.technologyContent}>
                <main id={styles.destinationMain}>
                    <h1 id={styles.destinationHeaderTitle}>
                        <span>03</span>
                        <span>SPACE LAUNCH 101</span>
                    </h1>

                    {(Object.keys(props).length) !== 0 ? (
                        <>
                            {(Object.keys(appContextData).length) !== 0 ? (
                                <div id={styles.informationContainer}>
                                    {width < 1440 ? (
                                        <div
                                            id={styles.technologyImage}
                                            style={{
                                                backgroundImage: `url(${props.technology[appContextData.appIndex.technology].images.landscape})`
                                            }}
                                        ></div>
                                    ) : (
                                        <div
                                            id={styles.technologyImage}
                                            style={{
                                                backgroundImage: `url(${props.technology[appContextData.appIndex.technology].images.portrait})`
                                            }}
                                        ></div>
                                    )}

                                    <div id={styles.technologyButtonsArticleContainer}>
                                        <div id={styles.technologyButtonContainer}>
                                            {props.technology.map(({ name }, index) => {
                                                if (appContextData.appIndex.technology === index) {
                                                    return (
                                                        <button
                                                            key={index}
                                                            style={{
                                                                background: "rgba(255, 255, 255, 1.0)"
                                                            }}
                                                        >
                                                            <span id={styles.hidden}>{name}</span>
                                                            <span
                                                                id={styles.buttonNumber}
                                                                style={{
                                                                    color: "#0B0D17"
                                                                }}
                                                            >{index + 1}</span>
                                                        </button>
                                                    )
                                                } else {
                                                    return (
                                                        <button
                                                            key={index}
                                                            onClick={() => {
                                                                appContextData.setAppIndex({
                                                                    destinations: appContextData.appIndex.destinations,
                                                                    crew: appContextData.appIndex.crew,
                                                                    technology: index
                                                                });
                                                            }}
                                                        >
                                                            <span id={styles.hidden}>{name}</span>
                                                            <span id={styles.buttonNumber}>{index + 1}</span>
                                                        </button>
                                                    )
                                                }
                                            })}
                                        </div>

                                        <article id={styles.technologyArticle}>
                                            <span>THE TERMINOLOGY...</span>

                                            <h2>{props.technology[appContextData.appIndex.technology].name.toUpperCase()}</h2>

                                            <p>{props.technology[appContextData.appIndex.technology].description}</p>
                                        </article>
                                    </div>
                                </div>
                            ) : (
                                null
                            )}
                        </>
                    ) : (
                        null
                    )}
                </main>
            </div>
        </div>
    );
}