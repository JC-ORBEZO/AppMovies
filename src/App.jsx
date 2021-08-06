//import logo from './logo.svg';
import './App.css';
import { MoviesGrid } from './MoviesGrid.jsx';
import styles from "./App.module.css";
//commit de prueba
/*
  API SUPER HEROES
  https://superheroapi.com/

  API MARVEL
  https://developer.marvel.com/
*/
function App() {
  return (
    <div>
      <header><h1 className={styles.title}>Movies</h1></header>        
      <main><MoviesGrid/></main>        
    </div>
  );
}

export default App;
