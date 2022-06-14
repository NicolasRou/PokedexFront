import Modal from "../Card/Modal";
import "./newCardPokemon.css";
import { useState } from "react";
import question from "../../Img/question.svg";
import ModalNewCard from "./ModalNewCard";

export const NewCardPokemon = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  const [classModal, setClassModal] = useState(false);
  const changeClassName = () => {
    setClassModal(true);
  };

  return (
    <div className="container-menu">
      <div className="container add">
        <div className="img imgAdd">
          <img src={question} alt="pokemon" className="imgPokemon" />
        </div>
        <Modal show={show} handleClose={hideModal} classModal={classModal}>
          <ModalNewCard />
        </Modal>
        <section className="name">
          <button className="more buttonAdd" onClick= { () => {showModal(); changeClassName();}}>
            Agregar
          </button>
        </section>
      </div>
    </div>
  );
};
