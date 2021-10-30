// Importações do React
import { useContext } from "react";

// Importações de contexto
import { AppContext } from "../../contexts/AppContext";

// Importa os estilos
import styles from "./Destination.module.scss";

// Exporta a função da página Destination
export function Destination(props) {
    // Recebe os dados do contexto
    const appContextData = useContext(AppContext);

    // Define o título da página
    document.title = "Space Tourism | Destination";

    // Retorna a página renderizada
    return (
        <div id={styles.destination}>
            <div id={styles.background}></div>

            <div id={styles.destinationContent}>
                <main id={styles.destinationMain}>
                    <h1 id={styles.destinationHeaderTitle}>
                        <span>01</span>
                        <span>PICK YOUR DESTINATION</span>
                    </h1>

                    {(Object.keys(props).length) !== 0 ? (
                        <>
                            {(Object.keys(appContextData).length) !== 0 ? (
                                <div id={styles.informationContainer}>
                                    <img
                                        alt={props.destinations[appContextData.appIndex.destinations].name}
                                        id={styles.destinationImage}
                                        src={props.destinations[appContextData.appIndex.destinations].images.png}
                                    />

                                    <div id={styles.secondInformationContainer}>
                                        <div id={styles.locationsButtonsContainer}>
                                            {props.destinations.map(({ name }, index) => {
                                                if (appContextData.appIndex.destinations === index) {
                                                    return (
                                                        <button
                                                            key={name}
                                                            style={{
                                                                borderBottom: "2px solid rgb(255, 255, 255)"
                                                            }}
                                                        >
                                                            {name.toUpperCase()}
                                                        </button>
                                                    )
                                                } else {
                                                    return (
                                                        <button
                                                            key={name}
                                                            onClick={() => {
                                                                appContextData.setAppIndex({
                                                                    destinations: index,
                                                                    crew: appContextData.appIndex.crew,
                                                                    technology: appContextData.appIndex.technology
                                                                });
                                                            }}
                                                        >
                                                            {name.toUpperCase()}
                                                        </button>
                                                    )
                                                }
                                            })}
                                        </div>

                                        <article id={styles.destinationArticle}>
                                            <h2>{props.destinations[appContextData.appIndex.destinations].name.toUpperCase()}</h2>

                                            <p>{props.destinations[appContextData.appIndex.destinations].description}</p>
                                        </article>

                                        <div id={styles.lineDecorationContainer}>
                                            <div id={styles.lineDecoration}></div>
                                        </div>

                                        <div id={styles.distaceArticlesContainer}>
                                            <article className={styles.distanceArticle}>
                                                <h2>AVG. DISTANCE</h2>

                                                <p>{props.destinations[appContextData.appIndex.destinations].distance.toUpperCase()}</p>
                                            </article>

                                            <article className={styles.distanceArticle}>
                                                <h2>EST. TRAVEL TIME</h2>

                                                <p>{props.destinations[appContextData.appIndex.destinations].travel.toUpperCase()}</p>
                                            </article>
                                        </div>
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