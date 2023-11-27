import { useState } from "react";
import "./menu.component.css";
import { Link } from "react-router-dom";

export function Menucomponent() {
    const [showMenu, setShowMenu] = useState();
    function menuclick() {
        setShowMenu(!showMenu)
    }

    const [showAboutus, setAboutus] = useState();
    function menuclick1() {
        setAboutus(!showAboutus)
    }

    const [showGrocery, setGrocery] = useState();
    function menuclick2() {
        setGrocery(!showGrocery)
    }

    const [showMobile, setMobile] = useState();
    function menuclick3() {
        setMobile(!showMobile)
    }

    const [showElectronics, setElectronics] = useState();
    function menuclick4() {
        setElectronics(!showElectronics)
    }

    return (


        <div>
            <ol className="menu">
                <li className="menu-list"> Home
                    <ul className="home">
                        <li>Stay tuned</li>
                        <li>Prime</li>
                        <li>Great Indian Festival</li>
                        <li>Deals for you</li>
                        <li>Shopping</li>
                    </ul>
                </li>
                <li className="menu-list"> About us
                    <ul className="aboutus">
                        <li>contact us</li>
                        <li>phone</li>
                        <li>e-mail</li>
                        <li>telegram</li>
                        <li>instagram</li>
                    </ul>
                </li>
                <li className="menu-list"> Grocery
                    <ul className="grocery">
                        <li>Chocolates</li>
                        <li>Buscuits</li>
                        <li>Corn</li>
                        <li>Soya Bean</li>
                        <li>Dress</li>
                    </ul>
                </li>
                <li className="menu-list"> Mobile
                    <ul className="mobile">
                        <li>Real me</li>
                        <li>Vivo</li>
                        <li>Nokia</li>
                        <li>iphone</li>
                        <li>one-plus</li>
                    </ul>
                </li>
                <li className="menu-list"> Electronics
                    <ul className="electronics">
                        <li>AC </li>
                        <li>Fridge </li>
                        <li>Cooler </li>
                        <li>Washing Machine </li>
                        <li>Fan </li>
                    </ul>
                </li>
                {/* <a href="/registration" style={{color:"white"}}>
                <li className="menu-list">Registration</li>
                </a> */}
                <Link to="/registration">
                    <li className="menu-list" style={{color:"white"}}>Registration</li>
                </Link>

                <Link to="/login">
                    <li className="menu-list" style={{color:"white"}}>Login</li>
                </Link>
            </ol>
            {/* <div>
                <ul className="button-menu">
                    <li>
                        <input type="button" value="Home" className="w-100 mt-2 btn btn-primary" onClick={() => menuclick()}></input>
                        {
                            showMenu && <ul style={{ listStyleType: "none" }}>
                                <li> Login </li>
                                <li> Register</li>
                                <li> Logout</li>
                                <li> Profile</li>
                            </ul>
                        }

                    </li>
                    <li>
                        <input type="button" value="About us" className="w-100 mt-2 btn btn-success" onClick={() => menuclick1()}></input>

                        {
                            showAboutus && <ul style={{ listStyleType: "none" }}>
                                <li> Contact us</li>
                                <li> Phone num</li>
                                <li> email</li>
                                <li> insta</li>
                            </ul>
                        }
                    </li>

                    <li>
                        <input type="button" value="Grocery" className="w-100 mt-2 btn btn-dark" onClick={() => menuclick2()}></input>
                        {
                            showGrocery && <ul style={{ listStyleType: "none" }}>
                                <li>Chocolate</li>
                                <li>Buiscuit</li>
                                <li>Corn</li>
                                <li>Soya bean</li>
                                <li>Dress</li>
                            </ul>
                        }
                    </li>
                    <li>
                        <input type="button" value="Mobile" className="w-100 mt-2 btn btn-warning" onClick={() => menuclick3()}></input>
                        {
                            showMobile && <ul style={{ listStyleType: "none" }}>
                                <li>Real me</li>
                                <li>iphone</li>
                                <li>Vivo</li>
                                <li>Nokia</li>
                                <li>Samsung</li>
                            </ul>
                        }
                    </li>
                    <li>
                        <input type="button" value="Electronics" className="w-100 mt-2  btn btn-info" onClick={() => menuclick4()}></input>
                        {
                            showElectronics && <ul style={{ listStyleType: "none" }}>
                                <li>AC</li>
                                <li>Fan</li>
                                <li>Fridge</li>
                                <li>Washing manchine</li>
                                <li>Cooler</li>
                            </ul>
                        }
                    </li>
                </ul>
            </div> */}
            </div>
         
    )
}