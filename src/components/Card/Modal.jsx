import "./modal.css";
import "./detalles.css";
import Arrow from "../../Img/arrow-left.svg";

const Modal = ({ handleClose, show, children, classModal }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const changeClass = classModal ? "modal-add" : "modal-main";

  return (
    <div className={showHideClassName}>
      <section className={changeClass}>
        <button type="button" onClick={handleClose} className="close">
          <img src={Arrow} alt="" />
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
