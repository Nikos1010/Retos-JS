import { imprimirAlerta} from './imprimirAlerta.js';
(function () {
  let DB;
  const listadoUsuarios = document.querySelector('#listado-usuarios');

  document.addEventListener('DOMContentLoaded', () => {
    crearDB();

    if(window.indexedDB.open('form', 1)) {
      obtenerUsuarios();
    }

    listadoUsuarios.addEventListener('click', eliminarUsuario);
  });

  function crearDB() {
    const crearDB = window.indexedDB.open('form', 1);

    crearDB.onerror = function() {
      console.log('Hubo un error');
    }

    crearDB.onsuccess = function() {
      DB = crearDB.result;
      console.log(DB)
    }

    crearDB.onupgradeneeded = function(e) {
      const db = e.target.result;
      const objectStore = db.createObjectStore('form', {
        keyPath: 'id',
        autoIncrement: true,
      });

      objectStore.createIndex('nombre', 'nombre', {unique: false});
      objectStore.createIndex('apellido', 'apellido', {unique: false});
      objectStore.createIndex('edad', 'edad', {unique: false});
      objectStore.createIndex('email', 'email', {unique: true});
      objectStore.createIndex('telefono', 'telefono', {unique: false});
      objectStore.createIndex('password', 'password', {unique: false});
      objectStore.createIndex('id', 'id', {unique: true});
    }
  }
  
  function eliminarUsuario(e) {
    if( e.target.classList.contains('eliminar')) {
      const idEliminar = Number(e.target.dataset.usuario);

      const confirmar = confirm('Deseas eliminar el Usuario');

      if(confirmar) {
        const transaction = DB.transaction(['form'], 'readwrite');
        const objectStore = transaction.objectStore('form');

        objectStore.delete(idEliminar);

        transaction.oncomplete = function() {
          imprimirAlerta('Se elimino correctamente');

          e.target.parentElement.parentElement.remove();
        }

        transaction.onerror = function() {
          console.log('Hubo un error');
        }
      }
    }
  }

  function obtenerUsuarios() {
    const abrirConexion = window.indexedDB.open('form', 1);

    abrirConexion.onerror = function() {
      console.log('Hubo un error');
    }

    abrirConexion.onsuccess = function() {
      DB = abrirConexion.result;

      const objectStore = DB.transaction(['form'], 'readwrite').objectStore('form');

        objectStore.openCursor().onsuccess = function(e) {
          const cursor = e.target.result;
        

        if(cursor) {
          const { nombre, apellido, edad, email, telefono, id } = cursor.value;

          listadoUsuarios.innerHTML += `
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-10 text-gray-700"> ${nombre} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${apellido}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  ">    
                    <p class="text-gray-600">${edad}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${email}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-usuario.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-usuario="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
              </tr>
          `;
          cursor.continue();

        } else {
          console.log('No hay mas registros');
        }
      }
    };
  }
  
})();

