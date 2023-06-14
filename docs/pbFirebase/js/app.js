import { getUUID } from "./utils.js";
document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector("#todo-form");
  const todoInput = document.querySelector("#todo-input");
  

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = todoInput.value;

    if(text=! ''){
      addTodo(text)
    }
  });

  async function addTodo(text){
    try {
      const todo = {
        id: getUUID(),
        text: text,
        completed: false,
        userid: 1,
      }
      const response = await insert(todo);
    } catch (error) {
      console.error(error)
    }
  }
});
