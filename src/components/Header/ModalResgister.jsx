import "./modalLogin.css";
import { useState } from "react";
import swal from "sweetalert";

const ModalRegister = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const sendRegister = async () => {
    try {
      const response = await fetch("http://localhost:5431/users/", {
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
      if (!responseJson.success) {
        throw (
          (new Error("No se pudo crear el usuario"),
          swal("Error!", "No se pudo crear el usuario", "error"))
        );
      }
      swal("Listo!", "Te has registrado correctamente", "success");
    } catch (error) {
      console.log(error);
    }
  };

  const onClick = (e) => {
    e.preventDefault();
    sendRegister();
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
    <section className="containRegister">
      <div className="specs">
        <div className="title">
          <h1> Crea tu cuenta </h1>
        </div>

        <div className="nameForm">
          <label>Nombre</label>
          <input type="text" name="" id="newUser" onChange={onChangeUserName} />
        </div>
        <div className="types">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="newEmail"
            onChange={onChangeUserEmail}
          />
        </div>

        <div className="movement">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            id="newPassword"
            onChange={onChangeUserPass}
          />
        </div>

        <div>
          <button onClick={onClick}>Registrarse</button>
        </div>
      </div>
    </section>
  );
};
export default ModalRegister;
