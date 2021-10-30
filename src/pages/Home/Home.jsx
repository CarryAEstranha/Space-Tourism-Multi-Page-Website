// Importações do React
import { useContext } from "react";

// Importações do react-router-dom
import { useHistory } from "react-router-dom";

// Importações de contexto
import { AppContext } from "../../contexts/AppContext";

// Importação dos estilos
import styles from "./Home.module.scss";

// Exporta a função da página Home
export function Home() {
    // Recebe os dados do contexto
    const appContextData = useContext(AppContext);

    // Define a variável do history
    const history = useHistory();

    // Define o título da página
    document.title = "Space Tourism | Home";

    // Retorna a página do home renderizada
    return (
        <div id={styles.home}>
            <div id={styles.background}></div>

            <div id={styles.homeContent}>
                <main id={styles.homeMain}>
                    <article id={styles.homeArticle}>
                        <span>SO, YOU WANT TO TRAVEL TO</span>

                        <h1>SPACE</h1>

                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </article>
                </main>

                <div id={styles.explorerButtonContainer}>
                    <button 
                        id={styles.exploreButton}
                        onClick={() => {
                            appContextData.setPageIndex(1);
                            
                            history.push("/destination/");
                        }}
                    >
                        EXPLORE
                    </button>
                </div>
            </div>
        </div>
    );
}