import db from "../firebase.js";

export async function updateItem(collectionName, docId, updatedData) {
  try {
    await db.collection(collectionName).doc(docId).update(updatedData);
    return true;
  } catch (error) {
    console.error(error);
    throw new Error("Error updating item");
  }
}

//para modificar los campos por medio del id de cada campo
const updateForm = document.getElementById("update-form");
updateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const updateId = document.getElementById("update-id").value;
    const updateAge = document.getElementById("update-age").value;
    updateItem("users", updateId, { age: updateAge });
    updateForm.reset();
});