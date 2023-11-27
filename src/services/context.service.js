import axios from "axios";


// get call
export function getData(url){
    return axios.get(url);

}

//save -->data
export function saveData(url,data){
    return axios.post(url,data);

}
//update --> put or patch 
 export function updateData(url,data){
    return axios.put(url+data.id,data);

 }

 // delete --> delete 
 export function deleteData(url){
    return axios.delete(url);

 }