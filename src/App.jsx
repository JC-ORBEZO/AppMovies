//import logo from './logo.svg';
import './App.css';
import { MoviesGrid } from './components/MoviesGrid.jsx';
import styles from "./App.module.css";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { LandingPage } from './pages/LandingPage';
import { MovieDetails } from './pages/MovieDetails';
//commit de prueba
/*
  API SUPER HEROES
  https://superheroapi.com/

  API MARVEL
  https://developer.marvel.com/
*/
function App() {
  return (
    <Router>
      <header>
        <Link to="/">
        <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>        
      <main>
        <Switch>
          <Route exact path="/movies/:movieId"><MovieDetails/></Route>
          <Route path="/"><LandingPage/></Route>        
        </Switch>
      </main>        
    </Router>
  );
}

export default App;
