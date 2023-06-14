import db from "../firebase.js";

export async function deleteItem(collectionName, docId) {
  try {
    await db.collection(collectionName).doc(docId).delete();
    return true;
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting item");
  }
}

//para ELIMINAR los campos por medio del id de cada campo
const deleteForm = document.getElementById("delete-form");
deleteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const deleteId = document.getElementById("delete-id").value;
    deleteItem("users", deleteId);
    deleteForm.reset();
});
