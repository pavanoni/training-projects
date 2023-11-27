import { getData, saveData, updateData } from "./context.service";



const propertyTypeUrl ="http://localhost:3000/property-type/";

// create a function for save property type data
export function savePropertyType(data){
    return saveData(propertyTypeUrl,data)
}

export function getPropertyType(){
    return getData(propertyTypeUrl);
}

export function updatePropertyType(data){
    return updateData(propertyTypeUrl,data);
}