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
createForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    
    const lastId = await createItem("users", { name, age });
    console.log(`Último ID generado: ${lastId}`);
    createForm.reset();
});
