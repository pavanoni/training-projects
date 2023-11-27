import { useState } from "react";
import SharedComponent from "../shared/shared-grid.component";




 
export function GridComponent(){
    const [employeeHeaders , setEmployeeHeaders] = useState([
        "ID" , "Name" , "Email" ,"phonenumber"
    ]);

    let empData = [
        {
            ID :1,
            Name :"Ravi",
            Email :"r@gmail.com",
            phonenumber :9698674647
        },
        {
            ID :2,
            Name :"Ramesh",
            Email :"r@gmail.com",
            phonenumber :9089797997
        },
        {
            ID :3,
            Name :"Pavan",
            Email :"p@gmail.com",
            phonenumber :9698674647
        },
    ]
    return(
        <div>
            <SharedComponent title={"Employee Table"} headers={employeeHeaders} body={empData}></SharedComponent>
            
            
        </div>
    )
};


