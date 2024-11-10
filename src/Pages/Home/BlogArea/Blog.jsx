import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Title and Description */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-blue-900 mb-4">Blog and News</h2>
                    <p className="text-lg text-gray-600">Our clients trust us for expertise, reliability, and value in delivering solutions that meet their needs.</p>
                </div>
                
                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {[
                        {
                            imgSrc: "https://i.ibb.co/C6Psx6w/pexels-gustavo-fring-4173251.jpg",
                            date: "22 September 2024",
                            title: "What are the Benefits of Online Doctor Booking?",
                            description: "Doctor services made easy. Create an appointment, and access the doctor’s services with ease.",
                            link: "/booking",
                        },
                        {
                            imgSrc: "https://i.ibb.co/d2YpG2S/pexels-simon-robben-55958-614810.jpg",
                            date: "20 September 2024",
                            title: "Benefits of Consulting With an Online Doctor",
                            description: "Online doctor consultations provide convenience and save you time. Book an appointment to get started.",
                            link: "/booking",
                        },
                        {
                            imgSrc: "https://i.ibb.co/DfzY2zG/pexels-olly-3756681.jpg",
                            date: "20 September 2024",
                            title: "Doccure - Making Your Visits Effortless",
                            description: "Easily schedule and attend your appointments without unnecessary trips. Learn more about Doccure.",
                            link: "/booking",
                        },
                    ].map((post, idx) => (
                        <div key={idx} className="bg-white p-6 shadow-lg rounded-lg relative">
                            <div className="flex justify-center items-center">
                                <img
                                    src={post.imgSrc}
                                    alt={post.title}
                                    className="w-full h-56 object-cover rounded-lg"
                                />
                            </div>
                            <div className="mt-4 space-y-3">
                                <span className="text-gray-500 font-semibold text-sm">Client</span>
                                <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
                                <p className="text-gray-600">{post.description}</p>
                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <Link
                                    to={post.link}
                                    className="py-2 px-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-700"
                                >
                                    Book Now
                                </Link>
                                <span className="bg-blue-900 text-white text-sm font-semibold py-1 px-4 rounded-full">
                                    {post.date}
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Blog;
