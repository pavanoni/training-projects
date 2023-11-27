
import { useForm } from "react-hook-form";
import { saveUserData } from "../../services/user.service";
import "./registration.component.css";


export function Registrationcomponent() {
    // creating a variable for react hook useform 
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // function for save registration form
    function saveRegistrationData() {
        
        let data = {
            id: 0,
            FirstName: document.getElementById("firstName").value,
            LastName: document.getElementById("lastName").value,
            Company: document.getElementById("company").value,
            Email: document.getElementById("email").value,
            PhoneNumber: document.getElementById("phoneNumber").value,
            Password: document.getElementById("password").value,
            State: document.getElementById("state").value,
            District: document.getElementById("district").value,
            Pincode: document.getElementById("pincode").value,
            radio: getGender(),
            date: document.getElementById("date").value,
            description: document.getElementById("para").value
        }

        saveUserData(data)
            .then((res) => {
                alert("Data saved successfully")
            })
            .catch(() => {
                alert("Data saved failed")
            })
    }

// function for gender radio button binding

    function getGender(){
        const gender = document.getElementsByName("gender");

        for(let i=0 ; i< gender.length; i++){
            if (gender[i].checked)
            {
                return gender[i].value;
            }
        }
    }

    return (
        <form className="registration" onSubmit={handleSubmit(() => saveRegistrationData())} >
            <h3> Registration Form </h3>
            <div className="m-2">
                <div>
                    <input type="text" {...register("firstName", { required: true, minLength: 3, maxLength: 25 })}
                        className="form-control" placeholder="FirstName" id="firstName"></input>
                    {
                        errors.firstName && errors.firstName.type === "required" ? <span className="text-danger">Please enter your firstName</span> :
                            errors.firstName && errors.firstName.type === "minLength" ? <span className="text-danger">Please enter 3 char or more</span> :
                                errors.firstName && errors.firstName.type === "maxLength" ? <span className="text-danger">Your name dont exceeds more than 25 char</span> : ""
                    }
                </div>

                <div>
                    <input type="text" {...register("lastName", { required: true })}
                        className="form-control mt-2" placeholder="LastName" id="lastName"></input>
                    {
                        errors && errors.lastName ? <alert className="text-danger">Please enter your lastName</alert> : ""
                    }
                </div>
            </div>


            <div className="m-2">
                <input type="text" {...register("company", { required: true })}
                    className="form-control" placeholder="Company" id="company"></input>
                {
                    errors && errors.company ? <alert className="text-danger">Please enter your company name</alert> : ""
                }
            </div>
            <div className="m-2">
                <input type="text" {...register("email", {
                    required: true,
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email format should be name@domain.com",
                    }
                })}
                    className="form-control" placeholder="Email" id="email"></input>
                {
                    errors.email && errors.email.type === "required" ? <label className="text-danger">Please enter your email</label> :
                        errors.email && errors.email.message ? <label className="text-danger">{errors.email.message}</label> : ""
                }
            </div>
            <div className="m-2">
                <input type="number" maxLength ="10" {...register("phoneNumber", { required: true, maxLength: 10 })}
                    className="form-control" placeholder="Phone Number" id="phoneNumber"></input>
                {
                    errors && errors.phoneNumber ? <alert className="text-danger">Please enter your phoneNumber</alert> : ""
                    
                }
            </div>
            <div className="m-2">
                <input type="Password" {...register("password", { required: true })}
                    className="form-control" placeholder="Password" id="password"></input>
                {
                    errors && errors.password ? <alert className="text-danger">Please enter your Password</alert> : ""
                }
            </div>
            <div className="m-2 row">
                <div className="col-4">
                    <select className="form-control m-2" id="state">
                        <option> Choose Your State</option>
                        <option> Telangana</option>
                        <option> Andhra Pradesh</option>
                        <option> Karnataka</option>
                        <option> Kerala</option>
                        <option> Odisha</option>
                    </select>
                </div>

                <div className="col-4">
                    <select className="form-control m-2" id="district">
                        <option> Choose Your District</option>
                        <option> Warangal</option>
                        <option> Karimnagar</option>
                        <option> Jagithaila</option>
                        <option> Hyderabad</option>
                        <option> Mahabubnagar</option>

                    </select>

                </div>
                <div className="col-4">
                    <input type="text" {...register("pincode", { required: true })}
                        placeholder="Pincode" className="form-control m-2" id="pincode"></input>
                    {
                        errors && errors.pincode ? <alert className="text-danger">Please enter your Pincode</alert> : ""
                    }
                </div>
            </div>
            <div {...register("gender")} className="m-2">
                <input type="radio" name="gender" value ="Male"></input> &nbsp;
                <label>Male</label> &nbsp;
                <input type="radio" name="gender" value="Female"></input> &nbsp;
                <label>Female</label> &nbsp;
                <input type="radio" name="gender" value="Others"></input>
                <label>others</label>


            </div>
            {
                errors && errors.gender ? <alert className="text-danger p-2">Please enter your gender</alert> : ""
            }
            <div className="m-2">
                <input type="date" className="form-control" id="date"></input>
            </div>
            <div className="m-2">
                <textarea rows={5} className="form-control" id="para"></textarea>
            </div>
            <div className="row m-2">
                <div className="col-4">
                    <input type="submit" value="submit" className="submit-button" id="submit"></input>
                </div>
                <div className="col-4">
                    <label>Already Existing User?</label>
                    <button className="btn btn-success">Login</button>
                </div>
                <div className="col-4">
                    <input type="file" style={{ width: 180 }}></input>
                </div>
            </div>
        </form>
    )
}


