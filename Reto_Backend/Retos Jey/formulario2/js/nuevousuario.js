import {formulario,nombreInput, apellidoInput, edadInput, emailInput, telefonoInput, passwordInput} from './selectores.js';
import {darColor, validarCaracteres,validarEdad, validarEmail, validarPassword, validarTelefono} from './validaciones.js';
import { imprimirAlerta } from './imprimirAlerta.js';
(function () {
  let DB;
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

  function validarUsuario(e) {
    e.preventDefault();
    let prueba = true;

    prueba = validarCaracteres(nombreInput.value, 'nombre');
    darColor(nombreInput, prueba);
    prueba = validarCaracteres(apellidoInput.value, 'apellido');
    darColor(apellidoInput, prueba);
    prueba = validarEdad(edadInput.value);
    darColor(edadInput, prueba);
    prueba = validarEmail(emailInput.value);
    darColor(emailInput, prueba);
    prueba = validarTelefono(telefonoInput.value);
    darColor(telefonoInput, prueba);
    prueba = validarPassword(passwordInput.value);
    darColor(passwordInput, prueba);

    if(prueba){
        const usuario = {
        nombre: nombreInput.value,
        apellido: apellidoInput.value,
        edad: edadInput.value,
        email: emailInput.value,
        telefono: telefonoInput.value,
        password: passwordInput.value
      }

      usuario.id = id();
      
      agregarUsuario(usuario);
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