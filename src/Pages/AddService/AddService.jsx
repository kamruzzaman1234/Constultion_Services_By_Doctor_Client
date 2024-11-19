const AddService = ()=>{
    const handleService = (e)=>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const title = form.title.value 
        const description = form.description.value 
        const location = form.location.value 
        const medical_name = form.medical_name.value 
        const experience = form.experience.value
        const rating = form.rating.value 
        const online_time_service = form.online_time_service.value 
        const offline_time_service = form.offline_time_service.value 
        const allServiceValue = {name, title, description, location, medical_name, experience, rating, online_time_service, offline_time_service}
        console.log(allServiceValue)
        fetch(`http://localhost:6007/addDoctor`, {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(allServiceValue)     
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Added Successfully')
                form.reset()
            }
            
        })
    }
    return(
        <div className="py-20 bg-blue-300">
            <div className="max-w-7xl mx-6 md:mx-10 lg:mx-auto">
  <h2 className="text-3xl font-bold mb-8 text-center text-white divider">Add New Service</h2>
        <div className="flex flex-col lg:flex-row gap-4 p-8 rounded-lg bg-blue-900">
            <div>
                    <img src="https://i.ibb.co.com/8xjrvhd/istockphoto-1290139310-612x612.jpg" alt="" className="rounded-lg h-full"/>
            </div>
            <div>
 <form className=" grid grid-cols-2 gap-4" onSubmit={handleService}>
    <input type="text" name="name" placeholder="Doctor Name" className="w-full p-2 border rounded-md"/>
    <input type="text" placeholder="Service Title" name="title" className="w-full p-2 border rounded-md"/>
    <textarea placeholder="Description" name="description" className="w-full p-2 border rounded-md"></textarea>
    <input type="text" placeholder="Image Link" name="image" className="w-full p-2 border rounded-md" />
    <input type="text" placeholder="Location" name="location" className="w-full p-2 border rounded-md" />
    <input type="number" placeholder="Service Fee" name="price" className="w-full p-2 border rounded-md" />
    <input type="date" placeholder="Join Time" name="join_time" className="w-full p-2 border rounded-md"/>
    <input type="text" placeholder="Medical Name" name="medical_name" className="w-full p-2 border rounded-md"/>
    <input type="text" placeholder="Experience" name="experience" className="w-full p-2 border rounded-md"/>
    <input type="text" placeholder="Rating" name="rating" className="w-full p-2 border rounded-md"/>
    
    <div className="flex gap-2">
      <input type="date" placeholder="Start Date" name className="w-full p-2 border rounded-md" />
      <input type="date" placeholder="End Date" className="w-full p-2 border rounded-md" />
      
    </div>
    
    <div className="flex gap-2">
      <input type="time" placeholder="Online Time" name="online_time_service" className="w-full p-2 border rounded-md" />
      <input type="time" placeholder="Offline Time" name="offline_time_service" className="w-full p-2 border rounded-md" />
    </div>
    
    <select className="w-full p-2 border rounded-md">
      <option value="">Select Service Type</option>
      <option value="online" name="online_time_service">Online</option>
      <option value="offline" name="offline_time_service">Offline</option>
    </select>

    
    <button type="submit" className="w-full bg-green-500 col-span-2 text-white font-bold p-2 rounded-md hover:bg-green-600">Add Service</button>
  </form>
            </div>
        </div>
  
</div>

        </div>
    )
}
export default AddService;