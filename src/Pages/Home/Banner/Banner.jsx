import Filter from "./Filter";

const Banner = ()=>{
    return(
        <div className="pt-12 bg-gray-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-[20px] font-bold">Search Doctor Make and Appointment</h2>
                    <p className="text-[14px]">Discover the best doctors clients and hospital the city nearest to you.</p>
                </div>
                <div className="mt-8 bg-blue-50 px-8 rounded-lg">
                <Filter></Filter>
             </div>
            
            </div>
            
        </div>
    )
}
export default Banner;