
var storage;

export function guardarImagen() {
  storage = firebase.storage();
  var rutaImagenInput = document.getElementById("rutaImagenInput").value;

  // Descargar la imagen desde GitHub
  var xhr = new XMLHttpRequest();
  xhr.open("GET", rutaImagenInput, true);
  xhr.responseType = "blob";

  xhr.onload = function (event) {
    var blob = xhr.response;
    var referenciaStorage = storage.ref().child("prueba.svg");

    // Subir la imagen a Firebase Storage
    var tareaSubida = referenciaStorage.put(blob);

    tareaSubida.then(function (snapshot) {
      console.log("La imagen se ha subido correctamente a Firebase Storage");
    }).catch(function (error) {
      console.error("Error al subir la imagen a Firebase Storage:", error);
    });
  };

  xhr.send();
}
