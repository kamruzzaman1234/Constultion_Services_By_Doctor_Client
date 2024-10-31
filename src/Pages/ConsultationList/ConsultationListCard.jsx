import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { TbCoinTaka } from "react-icons/tb";

const ConsultationListCard = ({list})=>{
    const {image, name, title, _id, description, medical_name,
        price, rating, location, join_time,  online_service_time,
         experience, offline_service_time, Name} = list
    const {user} = useContext(AuthContext)
    return(
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex  items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{location}</div>
            </div>
          </div>
        </td>
        <td>
         {user?.email}
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td className="flex items-center justify-center"><TbCoinTaka/> {price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    )
}
export default ConsultationListCard;