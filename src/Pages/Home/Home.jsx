import BackgroundImg from "./Banner/BackgroundImg";
import Banner from "./Banner/Banner";
import Blog from "./BlogArea/Blog";
import ClientAndSpecialites from "./ClientAndSpecialites/ClientAndSpecialites";
import DoctorArea from "./DoctorArea/DoctorArea";
import ExtraFeature from "./ExtraFeature/ExtraFeature";
import LookingFor from "./LookingForArea/LookingFor";
import OverView from "./OverView/OverView";

const Home = ()=>{
    return(
        <div>
            <Banner></Banner>
            
            <LookingFor></LookingFor>
            
            <ClientAndSpecialites></ClientAndSpecialites>
            <OverView></OverView>
            <DoctorArea></DoctorArea>
            <ExtraFeature></ExtraFeature>
            <Blog></Blog>
        </div>
    )
}
export default Home;