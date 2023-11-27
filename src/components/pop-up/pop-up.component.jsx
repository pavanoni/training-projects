import "./pop-up.component.css";


export function PopupComponent() {
    return (

        <div className="pop-up">
            <div className="card card-system">
                <div className="card-header">
                    <div>Product Name</div>
                    <div className="f-right">
                        X
                    </div>
                </div>
                <div className="card-body">
                    <div>Do you want to buy?</div>
                </div>
                <div className="card-footer">
                    <input type="button" value="Confirm" className="btn btn-success"></input> &nbsp;&nbsp;
                    <input type="button" value="Cancel" className="btn btn-info "></input> &nbsp;&nbsp;
                    <br></br>
                    <div className="d-flex flex-row justify-content-center">
                        <button className="m-2 btn btn-dark ">Submit</button>
                    </div>
                </div>
            </div>
            </div>
        
        
    )
}