import { Link } from "react-router-dom";
import "./admin-menu.component.css";



export function AdminMenu() {
    return (
        <div className="admin-menu">
            <h5>Admin Menu</h5>
            <div>
                <h6 className="text-light">Properties</h6>
                <ul className="text-light">
                    <Link to="/admin/property">
                        <li>Property Type</li>
                    </Link>
                    <Link to="/admin/add-property">
                    <li>Add Property</li>
                    </Link>
                       
                    

                    <li>View Property</li>
                </ul>
            </div>
            <div>
                <h6 className="text-light">Facilities</h6>
                <ul className="text-light">
                    <li>Facility Type</li>
                    <li>Add Facility</li>
                    <li>View Facility</li>
                </ul>
            </div>
        </div>
    )
}