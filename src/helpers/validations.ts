import { IError, IUser } from "../interface/Formulario";

export function validations(input: IUser) {
  const error: IError = {
    name: "",
    email: "",
    edad: "",
    dni: "",
    password: "",
  };

  // name name name name name name name name name name name name

  if (input.name && input.name.length < 3) {
    error.name = "el nombre debe tener mas de 3 caracteres";
  } else if (input.name && input.name.length > 10) {
    error.name = "el nombre debe tener un maximo de 10 caracteres";
  }

  // email email email email email email email email email email email

  // edad edad edad edad edad edad edad edad edad edad edad edad edad
  if (input.edad && input.edad < 18) {
    error.edad = "Eres menor de 18. Reagresa cuando seas mayor";
  } else if (input.edad && input.edad > 40) {
    error.edad = "Estas demaciado grande para este sitio";
  }

  return error;
}
