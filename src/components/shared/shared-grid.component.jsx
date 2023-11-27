import "./shared-grid.component.css";

function SharedComponent(props) {

    // create a function for edit 
    function editItem(item) {
        props.editItemFromGrid(item)
    }
    function deleteItem(item){
        props.deleteItemFromGrid(item)
    }
    return (
        <div>

            <h3>{props.title}</h3>
            <table className="table table-bordered table-hover head">
                <thead>
                    <tr>
                        {
                            props.headers.map((row) =>
                                <th> {row} </th>)
                        }
                    </tr>

                </thead>
                <tbody>
                    {
                        props.body.map((item) =>
                            <tr>
                                {
                                    Object.values(item).map((cell) => <td>{cell}</td>)
                                }
                                <td>
                                    <button className="btn btn-success" onClick={() => { editItem(item) }}>Edit</button> &nbsp;
                                    <button className="btn btn-danger"  onClick={() => { deleteItem(item) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
};

export default SharedComponent;

