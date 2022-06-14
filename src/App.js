import "././App.css";
import Headerboton from "./components/Header/Headerboton";
import Pokemon from "./components/Api/Pokemon";
import { LoginButton } from "./components/Header/LoginButton";

function App() {
  return (
    <div className="App">
      <Headerboton />
      <LoginButton />
      <div className="containerCards">
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
