const db = firebase.firestore();

export async function insert(item){
  try {
    const response = await db.collection("todos").add(item);
      return response;
  } catch (error) {
    
  }  
}