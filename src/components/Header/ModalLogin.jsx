import "./modalLogin.css";
import { useState } from "react";
import swal from "sweetalert";

const ModalLogin = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const sendLogin = async () => {
    try {
      const response = await fetch("http://localhost:5431/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userName,
          mail: userEmail,
          password: userPass,
        }),
      });
      const responseJson = await response.json();
      localStorage.setItem("jwt", responseJson.token)
      if (!responseJson.success) {
        throw (
          (new Error("No se encontró el usuario"),
          swal("Error!", "No se encontró el usuario", "error"))
        );
      }
      swal("Listo!", "Te has logueado", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    sendLogin();
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const onChangeUserPass = (e) => {
    setUserPass(e.target.value);
  };

  return (
    <section className="containLogin">
      <div className="specs">
        <div className="title">
          <h1> Accede a tu cuenta </h1>
        </div>
        <div className="nameForm">
          <label>Nombre</label>
          <input
            type="text"
            name=""
            id="nameUser"
            onChange={onChangeUserName}
          />
        </div>
        <div className="types">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={onChangeUserEmail}
          />
        </div>

        <div className="movement">
          <label>Contraseña</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={onChangeUserPass}
          />
        </div>

        <div>
          <button onClick={onClick}>Ingresar</button>
        </div>
      </div>
    </section>
  );
};
export default ModalLogin;
