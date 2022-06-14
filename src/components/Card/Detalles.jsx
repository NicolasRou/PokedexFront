import { Usefetch } from "../Api/Usefetch";
import "./detalles.css";
import Weight from "../../Img/Weight.svg";
import Height from "../../Img/Height.svg";

const Detalles = ({ pokemon }) => {
  return (
    <div>
      {!pokemon ? (
        <h1>Cargando2</h1>
      ) : (
        <main className={`${"main"} card${pokemon.elements.element1}`}>
          <header className="header-modal">
            <h1>{pokemon.name}</h1>
            <h3>#{pokemon.id}</h3>
          </header>
          <div className="img-card">
            <img src={pokemon.img} alt={pokemon.name} />
          </div>
          <section className="container_bottom">
            <div className="types">
              <h4>
                <p className={`card${pokemon.elements.element1}`}>
                  {pokemon.elements.element1}
                </p>
              </h4>
            </div>
            <div className="about">
              <h2 className={`p_${pokemon.elements.element1}`}>About</h2>
            </div>
            <div className="infoPokemon">
              <p>{pokemon.about.info}</p>
            </div>
            <section className="body">
              <div className="weight">
                <div>
                  <img src={Weight} alt="" />
                  <p>{pokemon.about.weight}gr</p>
                </div>
                <h5>Weight</h5>
              </div>
              <div className="height">
                <div>
                  <img src={Height} alt="" />
                  <p>{pokemon.about.height}cm</p>
                </div>
                <h5>Height</h5>
              </div>
              <div className="moves">
                <p>{pokemon.about.moves}</p>
                <h5>Moves</h5>
              </div>
            </section>

            <section>
              <h2 className={`p_${pokemon.elements.element1}`}>Base Stats</h2>
              <article className="base-stats">
                <div className="stats">
                  <div className="stats__item">
                    <p className="stats-name">HP</p>
                    <p className="stats_value">{pokemon.baseStats.hp}</p>
                    <div
                      className={`${"stats__bar"} card${
                        pokemon.elements.element1
                      }`}
                      style={{ width: pokemon.baseStats.hp }}
                    ></div>
                  </div>
                </div>
                <div className="stats">
                  <div className="stats__item">
                    <p className="stats-name">ATK</p>
                    <p className="stats_value">{pokemon.baseStats.atk}</p>
                    <div
                      className={`${"stats__bar"} card${
                        pokemon.elements.element1
                      }`}
                      style={{ width: pokemon.baseStats.atk }}
                    ></div>
                  </div>
                </div>
                <div className="stats">
                  <div className="stats__item">
                    <p className="stats-name">DEF</p>
                    <p className="stats_value">{pokemon.baseStats.def}</p>
                    <div
                      className={`${"stats__bar"} card${
                        pokemon.elements.element1
                      }`}
                      style={{ width: pokemon.baseStats.def }}
                    ></div>
                  </div>
                </div>
                <div className="stats">
                  <div className="stats__item">
                    <p className="stats-name">SATK</p>
                    <p className="stats_value">{pokemon.baseStats.satk}</p>
                    <div
                      className={`${"stats__bar"} card${
                        pokemon.elements.element1
                      }`}
                      style={{ width: pokemon.baseStats.satk }}
                    ></div>
                  </div>
                </div>
                <div className="stats">
                  <div className="stats__item">
                    <p className="stats-name">SDEF</p>
                    <p className="stats_value">{pokemon.baseStats.sdef}</p>
                    <div
                      className={`${"stats__bar"} card${
                        pokemon.elements.element1
                      }`}
                      style={{ width: pokemon.baseStats.sdef }}
                    ></div>
                  </div>
                </div>
                <div className="stats">
                  <div className="stats__item">
                    <p className="stats-name">SPD</p>
                    <p className="stats_value">{pokemon.baseStats.spd}</p>
                    <div
                      className={`${"stats__bar"} card${
                        pokemon.elements.element1
                      }`}
                      style={{ width: pokemon.baseStats.spd }}
                    ></div>
                  </div>
                </div>
              </article>
            </section>
          </section>
        </main>
      )}
    </div>
  );
};
export default Detalles;
