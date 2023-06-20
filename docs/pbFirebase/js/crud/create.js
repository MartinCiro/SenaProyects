import db from "../firebase.js";


export async function createItem(collectionName, item) {
  try {
    const response = await db.collection(collectionName).add(item);
    return response.id;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating item");
  }
}

//lectura del formulario
const createForm = document.getElementById("create-form");
createForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const storage = firebase.storage();
  const verbo = document.getElementById("verb").value;
  const significado = document.getElementById("Sgf").value;
  const uso = document.getElementById("use").value;
  const rutaImagenInput = document.getElementById("rutaImagenInput").value;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", rutaImagenInput, true);
  xhr.responseType = "blob";

  const uploadImagePromise = new Promise((resolve, reject) => {
    xhr.onload = function (event) {
      const blob = xhr.response;
      const verboSvg = `${verbo}.svg`
      const referenciaStorage = storage.ref().child(`${verboSvg}`);

      const dvImg = document.getElementById("image");

      if (dvImg.firstChild) {
        dvImg.removeChild(dvImg.firstChild);
      }
      const encabezado = document.createElement('h1');
      const encabezado2 = document.createElement('h1');
      encabezado.textContent = `Se ha creado con éxito la imagen ${verbo}`;
      encabezado2.textContent = "No se ha creado la imagen, por favor adjunta un enlace valido";

      const newGif = document.createElement('img');
      newGif.src = `https://firebasestorage.googleapis.com/v0/b/todo-13ec0.appspot.com/o/${verboSvg}?alt=media`;
      newGif.alt = `${verbo}`;
      newGif.width = "30%";
      
      newGif.id = "imag";
      // Subir la imagen a Firebase Storage
      const tareaSubida = referenciaStorage.put(blob);

      tareaSubida
        .then(function (s) {
          console.log("La imagen se ha subido correctamente a Firebase Storage");

          // Eliminar cualquier elemento existente en dvImg
          dvImg.innerHTML = '';
          newGif.style.display = 'block';
          dvImg.appendChild(encabezado);
          dvImg.appendChild(newGif);
          resolve();
        })
        .catch(function (error) {
          dvImg.innerHTML = '';
          dvImg.appendChild(encabezado2);
          console.error("Error al subir la imagen a Firebase Storage:", error);
          reject(error);
        });
    };

    xhr.send();
  });

  const createItemPromise = createItem("verbs", { verbo, significado, uso });

  try {
    await Promise.all([uploadImagePromise, createItemPromise]);
    console.log("La imagen se ha subido y los datos se han guardado correctamente.");
    createForm.reset();
  } catch (error) {
    console.error("Error al subir la imagen o guardar los datos:", error);
  }
});


