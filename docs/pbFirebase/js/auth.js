import { auth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const provider = new firebase.auth.GoogleAuthProvider();

auth.languageCode = 'es';

export async function login(){
    try {
        const response = await auth.signInWithPopup(provider);
        console.log(response);
        return response.user;
    } catch (error) {
        throw new Error(error); //investigar
        console.log(error);
    }
}

export function logout(){
    auth.signOut();
}