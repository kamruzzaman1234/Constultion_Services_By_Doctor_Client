import BackgroundImg from "./Banner/BackgroundImg";
import Banner from "./Banner/Banner";
import ClientAndSpecialites from "./ClientAndSpecialites/ClientAndSpecialites";
import LookingFor from "./LookingForArea/LookingFor";
import OverView from "./OverView/OverView";

const Home = ()=>{
    return(
        <div>
            <Banner></Banner>
            <BackgroundImg></BackgroundImg>
            <LookingFor></LookingFor>
            <ClientAndSpecialites></ClientAndSpecialites>
            <OverView></OverView>
        </div>
    )
}
export default Home;