import { AddProperty } from "../../property/add-property/add-property.component";
import { PropertyType } from "../../property/property-type/property-type.component";
import { AdminMenu } from "../admin-menu/admin-menu.component";



export function AdminLayout(){
    return(
        <div className="row">
            <div className="col-2">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-9">
                {/* <PropertyType></PropertyType> */}
                {/* <AddProperty></AddProperty> */}
            </div>
        </div>
    )
}