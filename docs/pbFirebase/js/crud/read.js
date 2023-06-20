import db from "../firebase.js";

export async function readItems(collectionName) {
  try {
    const snapshot = await db.collection(collectionName).get();
    const items = [];
    snapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return items;
  } catch (error) {
    console.error(error);
    throw new Error("Error reading items");
  }
}

//Para Leer el contenido de la tabla
const readForm = document.getElementById("read-form");

readForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const collectionName = "verbs";
    const items = await readItems(collectionName);
    console.log(items);
  } catch (error) {
    console.error(error);
  }
});
