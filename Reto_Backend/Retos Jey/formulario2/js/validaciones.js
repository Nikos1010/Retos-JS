import { imprimirAlerta } from "./imprimirAlerta.js";
let prueba;
export function darColor(campo, prueba) {
    if(prueba) {
      campo.classList.remove("border", "border-red-500");
      campo.classList.add("border", "border-green-500");
    } else {
      campo.classList.remove("border", "border-green-500");
      campo.classList.add("border", "border-red-500");
    }
}

export  function validarCaracteres(valida, text) {
  if(! /^[a-zA-Z]+$/.test(valida) || valida.length < 3 || valida.length > 25) {
    imprimirAlerta(`El campo ${text} es incorrecto`, 'error');
    return prueba = false;
  }
  return prueba = true;
}

export  function validarEdad(edad) {
  if(! /^[0-9]+$/.test(edad) || Number(edad) < 18 || Number(edad) > 120) {
    imprimirAlerta(`El campo edad debe ser mayor a 18`, 'error');
    return prueba = false;
  }
  return prueba = true;
}

export  function validarEmail(email) {
  let arroba = email.indexOf('@');
  const dominio = email.slice(arroba+1,arroba+3);
  if(arroba > 2 && email.includes('@') && dominio === 'gm' || dominio === 'ou') {
    if( email.includes("gmail.com") || email.includes("outlook.com")) {
        //Correo valido
    } else {
        imprimirAlerta(`El campo email debe tener un @ y un dominio aceptable`, 'error');
        return prueba = false;
    }
  } else {
    imprimirAlerta(`El campo email debe tener un @ y un dominio aceptable`, 'error');
    return prueba = false;
  }
  return prueba = true;
}

export  function validarTelefono(telefono) {
  if(!/^[0-9]+$/.test(telefono) || telefono.length < 7 || telefono.length > 10) {
    imprimirAlerta(`El campo telefono debe tener entre 7 y 10 dígitos`, 'error');
    return prueba = false;
  }
  return prueba = true;
}

export function validarPassword(password) {
  let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){4,20}$/;;
  if(!re.test(password)) {
    imprimirAlerta(`El campo contraseña debe tener al menos: un numero, un caracter especial, una letra minuscula y mayuscula`, 'error');
    return prueba = false;
  }
  return prueba = true;
}