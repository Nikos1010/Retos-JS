(function () {
  let DB;
  const formulario = document.querySelector('#formulario');
  const contador = (numero = 0) => () => numero++;
  const id = contador();

  document.addEventListener('DOMContentLoaded', () => {
    conectarDB();

    formulario.addEventListener('submit', validarUsuario)
  });

  function conectarDB() {
    const abrirConexion = window.indexedDB.open('form', 1);

    abrirConexion.onerror = function() {
      console.log('Error de conexion');
    };

    abrirConexion.onsuccess = function() {
      DB = abrirConexion.result;
    };
  };

  let prueba;

  function validarUsuario(e) {
    e.preventDefault();
    prueba = true;

    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const edad = document.querySelector('#edad');
    const email = document.querySelector('#email');
    const telefono = document.querySelector('#telefono');
    const password = document.querySelector('#password');

    validarCaracteres(nombre.value, 'nombre');
    darColor(nombre, prueba);
    validarCaracteres(apellido.value, 'apellido');
    darColor(apellido, prueba);
    validarEdad(edad.value);
    darColor(edad, prueba);
    validarEmail(email.value);
    darColor(email, prueba);
    validarTelefono(telefono.value);
    darColor(telefono, prueba);
    validarPassword(password.value);
    darColor(password, prueba);

    if(prueba){
        const usuario = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value,
        email: email.value,
        telefono: telefono.value,
        password: password.value
      }

      usuario.id = id();
      
      agregarUsuario(usuario);
    }


  }

  function darColor(campo, logico) {
    if(logico) {
      campo.classList.remove("border", "border-red-500");
      campo.classList.add("border", "border-green-500");
    } else {
      campo.classList.remove("border", "border-green-500");
      campo.classList.add("border", "border-red-500");
    }
  }
  function validarCaracteres(valida, text) {
    if(! /^[a-zA-Z]+$/.test(valida) || valida.length < 3 || valida.length > 25) {
      imprimirAlerta(`El campo ${text} es incorrecto`, 'error');
      prueba = false;
    } 
  }

  function validarEdad(edad) {
    if(! /^[0-9]+$/.test(edad) || Number(edad) < 18 || Number(edad) > 120) {
      imprimirAlerta(`El campo edad debe ser mayor a 18`, 'error');
      prueba = false;
    }
  }

  function validarEmail(email) {
    let arroba = email.indexOf('@');
    const dominio = email.slice(arroba+1,arroba+3);
    if(arroba > 2 && email.includes('@') && dominio === 'gm' || dominio === 'ou') {
      if( email.includes("gmail.com") || email.includes("outlook.com")) {
        //Correo valido
      } else {
        imprimirAlerta(`El campo email debe tener un @ y un dominio aceptable`, 'error');
        prueba = false;
      }
    } else {
      imprimirAlerta(`El campo email debe tener un @ y un dominio aceptable`, 'error');
      prueba = false;
    }
  }

  function validarTelefono(telefono) {
    if(!/^[0-9]+$/.test(telefono) || telefono.length < 7 || telefono.length > 10) {
      imprimirAlerta(`El campo telefono debe tener entre 7 y 10 dígitos`, 'error');
      prueba = false;
    }
  }

  function validarPassword(password) {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){4,20}$/;;
    if(!re.test(password)) {
      imprimirAlerta(`El campo contraseña debe tener al menos: un numero, un caracter especial, una letra minuscula y mayuscula`, 'error');
      prueba = false;
    }
  }

  function agregarUsuario(usuario) {
    const transaction = DB.transaction(["form"], "readwrite");
    const objectStore = transaction.objectStore('form');
    objectStore.add(usuario);

    transaction.onerror = () => {
      imprimirAlerta('Correo repetido', 'error');
    };

    transaction.oncomplete = () => {
      imprimirAlerta('El usuario se agrego correctamente');

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
    }
  }
})();