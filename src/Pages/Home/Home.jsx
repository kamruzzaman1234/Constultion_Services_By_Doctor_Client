import BackgroundImg from "./Banner/BackgroundImg";
import Banner from "./Banner/Banner";
import ClientAndSpecialites from "./ClientAndSpecialites/ClientAndSpecialites";
import LookingFor from "./LookingForArea/LookingFor";

const Home = ()=>{
    return(
        <div>
            <Banner></Banner>
            <BackgroundImg></BackgroundImg>
            <LookingFor></LookingFor>
            <ClientAndSpecialites></ClientAndSpecialites>
        </div>
    )
}
export default Home;