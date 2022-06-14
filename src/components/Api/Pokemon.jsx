import { Usefetch } from "../Api/Usefetch";
import { useEffect, useState } from "react";
import Buscador from "../Nav/buscador";
import "./pokemon.css";
import "../Card/modal.css";

// Este componente representa la pagina con el listado

const Pokemon = () => {
  const [url, setUrl] = useState("http://localhost:5431/pokemones");
  const pokemons = Usefetch(url); //pokemons tiene como valor el objeto que nos devuelve Usefetch con sus atributos
  const { loading, data } = pokemons;
  const [pokemon, setPokemon] = useState(data);

  useEffect(() => {
    setPokemon(data);
  }, [data]);

  if (!data) {
    return <h1>Hola</h1>;
  }

  const onClickAZ = () => {
    const pokemonClone = [...pokemon];

    pokemonClone.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );

    setPokemon(pokemonClone);
  };

  const onClick123 = () => {
    const pokemonClone = [...pokemon];

    pokemonClone.sort((a, b) => (a.id - b.id ? 1 : -1));

    setPokemon(pokemonClone);
  };

  const onClickZA = () => {
    const pokemonClone = [...pokemon];

    pokemonClone.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
    );

    setPokemon(pokemonClone);
  };

  return (
    <div className="arreglo">
      <div className="buttons">
        <button onClick={onClickAZ} className="button-29">
          AZ 🠕
        </button>
        <button onClick={onClickZA} className="button-29">
          AZ 🠗
        </button>
        <button onClick={onClick123} className="button-29">
          123
        </button>
      </div>
      {!pokemon ? <h1>Cargando...</h1> : <Buscador results={pokemon} />}
    </div>
  );
};
export default Pokemon;
