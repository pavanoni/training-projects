import React from "react";



export class AddProperty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>Add Property</h2>

                <form>
                    <div className="form-group">
                        <label>Property Name</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Property Type</label>
                        <select className="form-control">
                            <option value="">...Select...</option>
                            <option value="1">Villa</option>
                            <option value="2">House</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Square feet</label>
                        <input type="number" className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Construction Date</label>
                        <input type="date" className="form-control"></input>
                    </div>
                    <div className="form-group mt-3">
                        <label>Loan Availability</label>
                        <div className="form-check form-switch mt-3">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Home Loan</label>
                        </div> 
                        <div className="form-check form-switch mt-3">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" for="flexSwitchCheckDefault">Personal Loan</label>
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <input type="Submit" className="btn btn-primary" value="save"></input> &nbsp; &nbsp;
                        <input type="reset" className="btn btn-danger" value="cancel"></input>
                    </div>
                </form>
            </div>
        )
    }
}