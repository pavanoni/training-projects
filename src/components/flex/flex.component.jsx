import "./flex.component.css";
import pavan from "../../Assets/images/image1.jpg";
import img from "../../Assets/images/image2.jpg";
export function FlexComponent() {
    return (
        <div className="image-flex">
            <div className="flex-item">
            <img src={pavan}/>
            </div>
            <div className="flex-item">
            <img src={img}/>
            </div>
            <div className="flex-item">
            <img src={pavan}/>
            </div>
            <div className="flex-item">
            <img src={img}/>
            </div>
            <div className="flex-item">
            <img src={pavan}/>
            </div>
            <div className="flex-item">
            <img src={img}/>
            </div>
            <div className="flex-item">
            <img src={pavan}/>
            </div>
        </div>
        
    )
}