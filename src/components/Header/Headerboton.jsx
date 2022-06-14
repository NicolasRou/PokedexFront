import "./header.css";
import pokeball from "../../Img/Pokeball.png";

function Headerboton() {
  return (
    <div className="header">
      <div>
        <img className="logo" src={pokeball} alt="logo" />
      </div>

      <h1 className="title">Pokédex</h1>
    </div>
  );
}

export default Headerboton;
