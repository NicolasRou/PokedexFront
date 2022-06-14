import Modal from "../Card/Modal";
import "./loginButton.css";
import { useState } from "react";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalResgister";


export const LoginButton = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
  const [show2, setShow2] = useState(false);
  const showModal2 = () => {
    setShow2(true);
  };

  const hideModal2 = () => {
    setShow2(false);
  };

  return (
    <div className="loginContainer">
      <Modal show={show} handleClose={hideModal}>
        <ModalLogin />
      </Modal>
      <Modal show={show2} handleClose={hideModal2}>
        <ModalRegister />
      </Modal>
      <section className="nameButtons">
        <button
          className="button-29"
          onClick={() => {
            showModal();
          }}
        >
          Login
        </button>
        <button
          className="button-29"
          onClick={() => {
            showModal2();
          }}
        >
          Registrate
        </button>
      </section>
    </div>
  );
};
