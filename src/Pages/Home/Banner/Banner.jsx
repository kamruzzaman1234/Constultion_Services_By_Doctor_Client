import Filter from "./Filter";

const Banner = ()=>{
    return(
        <div className="py-[150px]" 
        style={{backgroundImage:
        "url('https://i.ibb.co.com/ckPVxPF/pexels-negativespace-48603.jpg')", 
        backgroundSize:"cover", backgroundRepeat:"no-repeat",
         backgroundPosition:"center center"}}>
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-[36px] font-bold">Search Doctor Make and Appointment</h2>
                    <p className="text-[17px]">Discover the best doctors clients and hospital the city nearest to you.</p>
                </div>
                <div className="my-2">
                    <div className="flex justify-center items-center gap-8">
                        <div className="bg-white flex justify-between px-4 py-4 w-[32%] rounded-lg ">
                            <label htmlFor="location">Select Your Location</label>
                            <select name="" id="" className="outline-none">
                                <option value=""></option>
                                <option value="dhaka">Dhaka</option>
                                <option value="rangpur">Rangpur</option>
                                <option value="rajshahi">Rajshahi</option>
                                <option value="khulna">Khulna</option>
                                <option value="chattagram">Chattagram</option>
                                <option value="Syhlet">Syhlet</option>
                            </select>
                        </div>
                        <div className="bg-white flex justify-between px-4 py-4 w-[32%] rounded-lg ">
                            
                            <input type="text" className="outline-none w-full"
                             placeholder="Search Doctor Client etc " />
                        </div>
                        <div className="px-8 py-3 rounded-lg bg-blue-700">
                            <input type="submit" className=" text-white
                             font-bold " value="Search"/>
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
             </div>
         </div>
    )
}
export default Banner;