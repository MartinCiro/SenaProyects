import { generateInputHTML } from "../code.js";

export function crear(){
    document.getElementById("replace").innerHTML = {
        ...generateInputHTML("name", "Nombre", "text"),
        ...generateInputHTML("age", "Edad", "text"),
        ...generateInputHTML("name", "Nombre", "text"),
        ...generateInputHTML("age", "Edad", "text"),
    }
}