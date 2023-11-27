import "./property-type.component.css";
import { useEffect, useRef, useState } from "react"
import { getPropertyType, savePropertyType, updatePropertyType } from "../../../../services/property.service";
import SharedComponent from "../../../shared/shared-grid.component";






export function PropertyType() {

    // ref variables
    const propertyNameRef = useRef();
    const propertyDescriptionRef = useRef();
    const propertyFacilitiesRef = useRef();


    // state variables for alert message
    const [showSaveMessage, setShowSaveMessage] = useState(false);

    // create a variable for propertytype table headers
    const [propertyGridHeader, setPropertyGridHeader] = useState([
        "ID", "Property Name", "Description", "Facility", "Action"
    ])


    //create a variable for grid data
    const [propertyGridData, setPropertyGridData] = useState([]);


    // create a variable for change button text
    const [saveBtnText, setSaveBtnText] = useState("Save");



    // variable for property id
    const [propertyId, setPropertyId] = useState(0);


    useEffect(() => {
        getPropertyType()
            .then((res) => {
                setPropertyGridData(res.data.filter((item) => item.isActive == true))
            })
            .catch(() => {

            })
    }, [])

    // function for save property type data
    function savePropertyTypeData() {
        let data = {
            id: propertyId,
            propertyName: propertyNameRef.current.value,
            propertyDescription: propertyDescriptionRef.current.value,
            propertyFacility: propertyFacilitiesRef.current.value,
            isActive: true
        }

        if (propertyId == 0) {
            savePropertyType(data)
                .then((res) => {
                    setShowSaveMessage(true);
                    hideSuccessMessage();
                    clearData();

                })
                .catch(() => {
                    alert("Property type data failed")
                })
        }
        else {
            updatePropertyType(data)
                .then((res) => {
                    alert("data update");
                    clearData();
                })
                .catch(() => {
                    alert("data update is failed")
                })
        }


    }

    //function for clear form

    function clearData() {
        propertyNameRef.current.value = "";
        propertyDescriptionRef.current.value = "";
        propertyFacilitiesRef.current.value = "";
        setSaveBtnText("Save");
    }

    // function for clear save alert
    function hideSuccessMessage() {
        setTimeout(() => {
            setShowSaveMessage(false);
        }, 2000)
    }

    //function for edit grid table
    function EditPropertyTypeData(item) {
        propertyNameRef.current.value = item.propertyName;
        propertyDescriptionRef.current.value = item.propertyDescription;
        propertyFacilitiesRef.current.value = item.propertyFacility;
        setSaveBtnText("Update");
        setPropertyId(item.id);

    }

    // create a function for delete table record
    function deletePropertyTypeData(item) {
        let confirmDelete = window.confirm("Are you sure want to delete?")
        if (confirmDelete == true) {
            let data = {
                id: item.id,
                propertyName: item.propertyName,
                propertyDescription: item.propertyDescription,
                propertyFacility: item.propertyFacility,
                isActive: false
            }


            updatePropertyType(data)
                .then((res) => {
                    alert("data update");
                    clearData();
                })
                .catch(() => {
                    alert("data update is failed")
                })
        }
    }


    return (
        <div>
            <div className="form-group">
                <label>Property Name :</label>
                <input type="text" className="form-control" ref={propertyNameRef}></input>
            </div>
            <div className="form-group">
                <label>Property Description :</label>
                <input type="text" className="form-control" ref={propertyDescriptionRef}></input>
            </div>
            <div className="form-group">
                <label>Property Facilities :</label>
                <input type="text" className="form-control" ref={propertyFacilitiesRef}></input>
            </div>
            <div className="form-group mt-3">
                <button className="btn btn-primary" onClick={() => (savePropertyTypeData())}>{saveBtnText}</button> &nbsp; &nbsp;
                <button className="btn btn-secondary" onClick={() => (clearData())}>Cancel</button>
            </div>
            {
                showSaveMessage && <div className="save-alert">
                    Property type data saved successfully
                </div>
            }

            <div className="mt-5">
                <SharedComponent title={"Property Types"}
                    headers={propertyGridHeader} body={propertyGridData}
                    editItemFromGrid={(item) => { EditPropertyTypeData(item) }}
                    deleteItemFromGrid={(item) => { deletePropertyTypeData(item) }}></SharedComponent>
            </div>

        </div>
    )
}