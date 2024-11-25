import React from 'react'
import { useLocation } from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function AsideAdmin(props) {
  const navigate=useNavigate();
  const location = useLocation();
  const user=location.state?.user;
  const handleChange=()=>{
    navigate("/PageAdmin",{state:{user:user,title:"Page Admin"}});
  }
  return (<><aside className="hidden sm:flex sm:flex-col">
       <a href="#" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
      <span className="h-full w-full overflow-hidden">
        <img src={"/images/mernx.png"} alt="user profile photo" className="h-full w-full object-cover"/>
      </span>
    </a>
    <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
      <nav className="flex flex-col mx-2 my-6 space-y-4">
        <div>
        <button  type="button"  onClick={handleChange}   className="inline-flex items-center justify-center py-3 text-purple-600  rounded-lg">
          <span className="sr-only">HOME</span>
         <img src={"/images/back.png"} className="w-12 h-12" alt="non img" /></button></div> 
      </nav>
    </div>
  </aside>
  </>
  )
}
