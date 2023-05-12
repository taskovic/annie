import "./no-hospice.scss"
import NoHospiceImage from "assets/images/no-hospice.svg"

export default function NoHospice(){
    return (
        <div className="annie-no-hospice">
            <img src={NoHospiceImage} alt="No Hospice" />
            <div>
                There is no Hospice available at this area
            </div>
        </div>
    )
}