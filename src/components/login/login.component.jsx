import { getUserData } from "../../services/user.service";
import "./login.component.css";
import React from "react";




export class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getLoginUsers() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        getUserData()
            .then((res) => {
                let filterData=res.data.filter((item,index,arr)=>item.Email==email && item.Password==password)
                if(filterData.length>0){
                    alert("User Exists")
                }
                else{
                    alert("User doesnot exists")
                }
            })
            .catch((ex) => {
                alert(ex.message)
            })
    }

    render() {
        return (
            <div className="login-form container">
                <h1 style={{ textAlign: "center" }}> Login Form </h1>
                <div className="m-2">
                    <label>email</label>
                    <input type="email" className="form-control" placeholder="Email" id="email"></input>
                </div>

                <div className="m-2">
                    <label>password</label>
                    <input type="text" className="form-control" placeholder="Password" id="password"></input>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={()=>{this.getLoginUsers()}}>Login</button> &nbsp; &nbsp;
                    <button className="btn btn-secondary">cancel</button>
                </div>
            </div>
        )
    }
}






