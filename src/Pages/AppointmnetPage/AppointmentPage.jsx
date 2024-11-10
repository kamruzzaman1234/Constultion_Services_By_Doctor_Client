import DoctorSelection from "./DoctorSelector";
import DoctorTitleList from "./DoctorTitleList/DoctorTitleList";
import FeaturePage from "./FeaturePage/FeaturePage";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const AppointmentPage = ()=>{
    return(
        <div>
            <DoctorSelection></DoctorSelection>
            <DoctorTitleList></DoctorTitleList>
            <FeaturePage></FeaturePage>
            {/* <PersonalInfo></PersonalInfo> */}
        </div>
    )
}
export default AppointmentPage;