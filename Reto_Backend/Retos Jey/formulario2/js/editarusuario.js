import {formulario,nombreInput, apellidoInput, edadInput, emailInput, telefonoInput, passwordInput} from './selectores.js';
import {darColor, validarCaracteres,validarEdad, validarEmail, validarPassword, validarTelefono} from './validaciones.js';
import { imprimirAlerta } from './imprimirAlerta.js';
(function () {
  let DB;
  let idUsuario;

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();

    formulario.addEventListener("submit", editarUsuario);

    const parametrosURL = new URLSearchParams(window.location.search);
    idUsuario = parametrosURL.get("id");
    console.log(idUsuario)
    if (idUsuario) {
      setTimeout(() => {
        obtenerUsuario(idUsuario);
      }, 100);
    }
  });

  function editarUsuario(e) {
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

    if(prueba) {
      const usuarioActualizado = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value,
        email: email.value,
        telefono: telefono.value,
        password: password.value,
        id: Number(idUsuario),
      };

      const transaction = DB.transaction(["form"], "readwrite");
      const objectStore = transaction.objectStore("form");
  
      objectStore.put(usuarioActualizado);
  
      transaction.oncomplete = function () {
        imprimirAlerta("Editado correctamente");
  
        setTimeout(() => {
          window.location.href = "index.html";
        }, 3000);
      };
  
      transaction.onerror = function () {
        imprimirAlerta("Hubo un error", "error");
      };
    }
  }

  function obtenerUsuario(id) {
    const transaction = DB.transaction(["form"], "readwrite");
    const objectStore = transaction.objectStore("form");

    const usuario = objectStore.openCursor();
    usuario.onsuccess = function (e) {
      const cursor = e.target.result;

      if (cursor) {
        if (cursor.value.id === Number(id)) {
          llenarFormulario(cursor.value);
        }

        cursor.continue();
      }
    };
  }

  function llenarFormulario(datosUsuario) {
    console.log('Entre')
    const { nombre, apellido, edad, email, telefono, password } = datosUsuario;
    
    nombreInput.value = nombre;
    apellidoInput.value = apellido;
    edadInput.value = edad;
    emailInput.value = email;
    telefonoInput.value = telefono;
    passwordInput.value = password;
  }

  function conectarDB() {
    const abrirConexion = window.indexedDB.open("form", 1);

    abrirConexion.onerror = function () {
      console.log("Hubo un error");
    };

    abrirConexion.onsuccess = function () {
      DB = abrirConexion.result;
    };
  }
})();
