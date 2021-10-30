// Importações do React
import { useContext } from "react";

// Importações de contexto
import { AppContext } from "../../contexts/AppContext";

// Importa os estilos
import styles from "./Crew.module.scss";

// Exporta a função da página Crew
export function Crew(props) {
    // Recebe os dados do contexto
    const appContextData = useContext(AppContext);

    // Define o título da página
    document.title = "Space Tourism | Crew";

    // Retorna a página renderizada
    return (
        <div id={styles.crew}>
            <div id={styles.background}></div>

            <div id={styles.crewContent}>
                <main id={styles.crewMain}>
                    <h1 id={styles.crewHeaderTitle}>
                        <span>02</span>
                        <span>MEET YOUR CREW</span>
                    </h1>

                    {(Object.keys(props).length) !== 0 ? (
                        <>
                            {(Object.keys(appContextData).length) !== 0 ? (
                                <>
                                    <div id={styles.informationContainer}>
                                        <div id={styles.crewImageContainer}>
                                            <img
                                                alt={props.crew[appContextData.appIndex.crew].name}
                                                id={styles.crewImage}
                                                src={props.crew[appContextData.appIndex.crew].images.png}
                                            />
                                        </div>

                                        <div id={styles.crewButtonArticleContainer}>
                                            <div id={styles.crewButtonContainer}>
                                                {props.crew.map(({ name }, index) => {
                                                    if (appContextData.appIndex.crew === index) {
                                                        return (
                                                            <button
                                                                key={index}
                                                                style={{
                                                                    background: "rgba(255, 255, 255, 1.0)"
                                                                }}
                                                            >
                                                                <span>{name}</span>
                                                            </button>
                                                        )
                                                    } else {
                                                        return (
                                                            <button
                                                                key={index}
                                                                onClick={() => {
                                                                    appContextData.setAppIndex({
                                                                        destinations: appContextData.appIndex.destinations,
                                                                        crew: index,
                                                                        technology: appContextData.appIndex.technology
                                                                    });
                                                                }}
                                                            >
                                                                <span>{name}</span>
                                                            </button>
                                                        )
                                                    }
                                                })}
                                            </div>

                                            <article id={styles.crewArticle}>
                                                <span>{props.crew[appContextData.appIndex.crew].role.toUpperCase()}</span>

                                                <h2>{props.crew[appContextData.appIndex.crew].name.toUpperCase()}</h2>

                                                <p>{props.crew[appContextData.appIndex.crew].bio}</p>
                                            </article>
                                        </div>
                                    </div>
                                </>
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