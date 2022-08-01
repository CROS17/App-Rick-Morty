import imageRickMorty from './img/rick-morty.png';
import {useState} from "react";
import './App.css';
import Characters from "./components/Characters";

function App() {
    const [characters, setCharacters] = useState(null);
    const resApi = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/character');
        const characterApi = await api.json();

        setCharacters(characterApi.results);
        //console.log(characterApi);
    }
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="title">Rick & Morty</h1>
          {characters ? (
              <Characters characters={characters} setCharacters={setCharacters}/>
          ):(
              <>
                  <img src={imageRickMorty} className="img-home" alt="rick-morty" />
                  <button onClick={resApi} className="btn-search">Buscar Personajes</button>
              </>
          )}

      </header>
    </div>
  );
}

export default App;
