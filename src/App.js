// Importações do React
import {
	useEffect,
	useState
} from "react";

// Importações do react-router-dom
import {
	BrowserRouter,
	Route,
	Switch
} from "react-router-dom";

// Importações de contexto
import { AppContextProvider } from "./contexts/AppContext";

// Importação das páginas
import { Crew } from "./pages/Crew/Crew";
import { Destination } from "./pages/Destination/Destination";
import { Home } from "./pages/Home/Home";
import { Technology } from "./pages/Technology/Technology";

// Importações de componentes
import { NavBar } from "./components/NavBar/NavBar";

// Importaçaõ dos estilos
import "./styles/global.css";

// Função principal da aplicação
function App() {
	// Estado que armazena os dados do JSON
	const [data, setData] = useState({});

	// Função fetch
	const fetchData = () => {
		// Fetch the country data into state
		fetch(`${process.env.PUBLIC_URL}/data.json`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}).then(response => response.json()).then(data => {
			// Update the data state
			setData(data);
		});
	}

	// useEffect para receber os dados do JSON
	useEffect(() => {
		// Requisita a função fetch
		fetchData();
	}, []);

	// Retorna a aplicação renderizada
	return (
		<AppContextProvider>
			<BrowserRouter>
				<NavBar />

				<Switch>
					<Route
						component={Home}
						exact
						path="/"
					/>
					<Route
						path="/destination/"
						render={(props) => <Destination {...data} />}
					/>
					<Route
						path="/crew/"
						render={(props) => <Crew {...data} />}
					/>
					<Route
						path="/technology"
						render={(props) => <Technology {...data} />}
					/>
				</Switch>
			</BrowserRouter>
		</AppContextProvider>
	);
}

// Exporta a aplicação
export default App;
