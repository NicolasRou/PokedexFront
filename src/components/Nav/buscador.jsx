import { useState } from "react";
import { Card } from "../Card/Card";
import "../Api/pokemon.css";
import { NewCardPokemon } from "../NewCard/NewCardPokemon";
function Buscador({ results }) {
  const [pokemonFilter, setPokemonFilter] = useState("");

  return (
    <div className="app">
      <div className="search">
        <input
        className="buscador"
          placeholder="Buscar"
          name="query"
          type="search"
          onChange={(event) => {
            setPokemonFilter(event.target.value);
          }}
        />
      </div>
      <div className="allCards">
        <NewCardPokemon />
        {results.data?.results
          .filter((val) => {
            return val.name.toLowerCase().includes(pokemonFilter.toLowerCase());
          })
          .map((val) => {
            return <Card results={val} />;
          })}
      </div>
    </div>
  );
}

export default Buscador;
