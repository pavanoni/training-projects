import { Route, Routes } from "react-router-dom";
import { Registrationcomponent } from "./components/registration/registration.component";
import { GridComponent } from "./components/grid/grid.component";
import { LoginComponent } from "./components/login/login.component";
import { AdminMenu } from "./components/admin/layout/admin-menu/admin-menu.component";
import { PropertyType } from "./components/admin/property/property-type/property-type.component";
import { AddProperty } from "./components/admin/property/add-property/add-property.component";




export function AppRouter() {
    return (
        <Routes>
            <Route path="/registration" element={<Registrationcomponent></Registrationcomponent>}></Route>
            <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
            <Route path="/admin/property" element={<NavigatePropertyType></NavigatePropertyType>}></Route>
            <Route path="/admin/add-property" element={<NavigateAddProperty></NavigateAddProperty>}></Route>
            {/* <Route path="/" element={<GridComponent></GridComponent>}></Route> */}
        </Routes>
    )
}

function NavigatePropertyType() {
    return (
        <div className="row">
            <div className="col-2">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-9">
                <PropertyType></PropertyType>
            </div>
        </div>
    )
}

function NavigateAddProperty(){
    return(
        <div className="row">
            <div className="col-2">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-9">
                <AddProperty></AddProperty>
            </div>
        </div>
    )
}