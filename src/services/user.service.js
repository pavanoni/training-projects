import { getData, saveData } from "./context.service";


const registrationURL ="http://localhost:3000/registration/";

export function saveUserData(data){
    return saveData(registrationURL,data)
}

export function getUserData(){
    return getData(registrationURL);
}