import { useState } from "react";
import "./modalNewCard.css";
import swal from "sweetalert";

const ModalNewCard = () => {
  const [pokname, setPokname] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [typeTwo, setTypeTwo] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [moves, setMoves] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [satk, setSatk] = useState("");
  const [sdef, setSdef] = useState("");
  const [spd, setSpd] = useState("");
  const [info, setInfo] = useState("");

  const sendForm = async () => {
    try {
      const response = await fetch("http://localhost:5431/users/pokemon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          name: pokname,
          info: info,
          img: image,
          element_1: type,
          element_2: typeTwo,
          height: height,
          weight: weight,
          moves: moves,
          hp: hp,
          def: def,
          atk: atk,
          satk: satk,
          sdef: sdef,
          spd: spd,
        }),
      });

      const responseJson = await response.json();
      console.log(responseJson);
      if(!responseJson.success){
        throw (
          (new Error("No se pudo enviar el pokemon"),
        swal("Error!", "Debes registrarte", "error"))
          );
      }
      swal("Listo!", "Te has logueado", "success");
    } catch (error) {
      console.log(error);
    }
  };
  const onClick = (e) => {
    e.preventDefault();
    sendForm();
  };

  const onChangePokname = (e) => {
    setPokname(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.value);
  };
  const onChangeType = (e) => {
    setType(e.target.value);
  };
  const onChangeTypeTwo = (e) => {
    setTypeTwo(e.target.value);
  };
  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const onChangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const onChangeMoves = (e) => {
    setMoves(e.target.value);
  };
  const onChangeHp = (e) => {
    setHp(e.target.value);
  };
  const onChangeAtk = (e) => {
    setAtk(e.target.value);
  };
  const onChangeDef = (e) => {
    setDef(e.target.value);
  };
  const onChangeSatk = (e) => {
    setSatk(e.target.value);
  };
  const onChangeSdef = (e) => {
    setSdef(e.target.value);
  };
  const onChangeSpd = (e) => {
    setSpd(e.target.value);
  };
  const onChangeInfo = (e) => {
    setInfo(e.target.value);
  };

  return (
    <section className="contain">
      <div className="specs">
        <div className="title">
          <h1> ¡Crea tu Pókemon!</h1>
        </div>
        <div className="text">
          <p>Completa los campos y crea tu propio pókemon.</p>
        </div>
        <div className="nameForm">
          <label>Ingresa su nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={pokname}
            onChange={onChangePokname}
          />
        </div>
        <div className="loadImg">
          <label>Ingresa su imagen</label>
          <input
            type="file"
            name="imagen"
            id="img"
            placeholder="Imagen"
            value={image}
            onChange={onChangeImage}
          />
        </div>
        <div className="types">
          <label>Ingresa sus tipos</label>
          <input
            type="text"
            name="type one"
            id="type"
            value={type}
            onChange={onChangeType}
          />
          <input
            type="text"
            name="type two"
            id="type2"
            value={typeTwo}
            onChange={onChangeTypeTwo}
          />
        </div>
        <div className="info">
          <label>Ingresa su información</label>
          <input
            type="text"
            name="info"
            id="info"
            value={info}
            onChange={onChangeInfo}
          />
        </div>
        <div className="measurements">
          <label>Ingresa sus medidas</label>
          <input
            type="text"
            name="weight"
            id="weight"
            placeholder="Weight/gr"
            value={weight}
            onChange={onChangeWeight}
          />
          <input
            type="text"
            name="height"
            id="height"
            placeholder="Height/cm"
            value={height}
            onChange={onChangeHeight}
          />
        </div>
        <div className="movement">
          <label>Ingresa sus movimientos</label>
          <input
            type="text"
            name="moves"
            id="moves"
            value={moves}
            onChange={onChangeMoves}
          />
        </div>
        <div className="stats">
          <label>Ingresa sus estadísticas</label>
          <input
            type="text"
            name="baseStats"
            id="HP"
            placeholder="HP"
            value={hp}
            onChange={onChangeHp}
          />
          <input
            type="text"
            name="baseStats"
            id="ATK"
            placeholder="ATK"
            value={atk}
            onChange={onChangeAtk}
          />
          <input
            type="text"
            name="baseStats"
            id="DEF"
            placeholder="DEF"
            value={def}
            onChange={onChangeDef}
          />
          <input
            type="text"
            name="baseStats"
            id="SATK"
            placeholder="SATK"
            value={satk}
            onChange={onChangeSatk}
          />
          <input
            type="text"
            name="baseStats"
            id="SDEF"
            placeholder="SDEF"
            value={sdef}
            onChange={onChangeSdef}
          />
          <input
            type="text"
            name="baseStats"
            id="SPD"
            placeholder="SPD"
            value={spd}
            onChange={onChangeSpd}
          />
        </div>
        <div>
          <button onClick={onClick} >Enviar</button>
        </div>
      </div>
    </section>
  );
};
export default ModalNewCard;
