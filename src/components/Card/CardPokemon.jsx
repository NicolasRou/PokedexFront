// Importamos el Usefetch para extraer la informacion de la url que tiene cada pokemon
import { Usefetch } from "../Api/Usefetch";
import "./cardPokemon.css";
import Detalles from "./Detalles";
import Modal from "./Modal";
import { useState } from "react";

export const CardPokemon = ({ pokemon }) => {
  // Las siguientes constantes y funciones son para darle funcionalidad a la ventana modal
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="container-menu">
      {!pokemon ? (
        <h1>Cargando</h1>
      ) : (
        <div className={`${"container"} ${pokemon.elements.element1} `}>
          <div className="id">
            <h2>#{pokemon.id}</h2>
          </div>
          <div className="img">
            <img src={pokemon.img} alt={pokemon.name} className="imgPokemon" />
          </div>
          <Modal show={show} handleClose={hideModal}>
            <Detalles pokemon={pokemon} />
          </Modal>
          <section className="name">
            <button className="more" onClick={showModal}>
              {pokemon.name}
            </button>
          </section>
        </div>
      )}
    </div>
  );
};
