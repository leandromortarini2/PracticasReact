import React, { useState } from "react";
import { IError, IUser } from "../../interface/Formulario";
import { validations } from "../../helpers/validations";

export const Formulario = () => {
  const [error, setError] = useState<IError>({
    name: "",
    email: "",
    edad: "",
    dni: "",
    password: "",
  });

  const [input, setInput] = useState<IUser>({
    name: "",
    email: "",
    edad: 0,
    dni: 0,
    password: "",
  });

  const [arrayUsers, setArrayUsers] = useState<IUser[]>([]);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    const newInput = {
      ...input,
      [name]: value,
    };

    setInput(newInput);

    const result = validations(newInput);
    setError(result);
  }

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setArrayUsers([...arrayUsers, input]);

    console.log(arrayUsers);
    alert("Envio exitoso");

    setInput({ name: "", email: "", edad: 0, dni: 0, password: "" });
  };

  return (
    <>
      <div className="containerForm">
        <h1>Formulario Controlado</h1>
        <form onSubmit={handleOnSubmit} className="formulario">
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleOnChange}
          />
          {error.name && error.name.length > 0 ? <p>{error.name}</p> : null}
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleOnChange}
          />
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleOnChange}
          />
          <input
            type="number"
            name="edad"
            value={input.edad}
            onChange={handleOnChange}
          />
          {error.edad && error.edad.length > 0 ? <p>{error.edad}</p> : null}

          <input
            type="number"
            name="dni"
            value={input.dni}
            onChange={handleOnChange}
          />
          <button>enviar</button>
        </form>
      </div>
    </>
  );
};
