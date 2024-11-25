import React ,{useState,useEffect}from 'react'
import {useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import PageChild from "../pages/PageChild.jsx";
//import { StreamChat } from 'stream-chat'
export default function PageMenu() {
  const [Responce,Setresponce]=useState();
  const location = useLocation();
  const user = location.state?.user;
  const navigate=useNavigate();
  // useEffect(()=>{
  //   //connection();
  // },[])
  const handlechange=async(e)=>{
    try {
        switch(e){
       case 1:await navigate("/Newcreate",{state:{user:user,title:"Create Nouveau Client"}}) ;break;
       case 2:await navigate("/consultation",{state:{user:user,title:"Liste Clients"}}) ;break;
       case 3:await navigate("/dashboard",{state:{user:user,title:"Dashboard"}}) ;break;
           } 
    } catch (error) {
        res.status(500).json({error:"error link introuvable"})
    }
   
  }
// async function connection() {
//   try {
//     const client = StreamChat.getInstance("{{ api_key }}");
// await client.connectUser(
//   {
//     id: 'jlahey',
//     name: 'Jim Lahey',
//     image: 'https://i.imgur.com/fR9Jz14.png',
//   },
//   "{{ chat_user_token }}",
// )


//     const channel = client.channel('messaging', {
//       members: ['vishal', 'neil'],
//      name: 'Awesome channel about traveling'
//    });
//    await channel.watch();
  
//    const text = 'I’m mowing the air Randy, I’m mowing the air.';

// const response = await channel.sendMessage({
//   text,
//   customField: '123',
// });


   
//   } catch (error) {
//     console.log(error);
//   }
// }
 
  return (
    <PageChild>
      <main className="p-6 sm:p-10 space-y-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 h-80">
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-48 w-48 text-red-600 bg-red-100 rounded-full mr-6">
              <img src={"/images/don-de-sang.png"} className="w-48 h-48 rounded-full" />
             </div>
            <div>
              <div className="shadow-md bg-blue-50 px-2 py-4 rounded-md hover:bg-emerald-100">
              <button type="button" onClick={()=>handlechange(1)}>   
                <span className="text-xl font-mono text-orange-400">Saisie Client </span>
                </button>
             </div>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-148w-48 text-red-600 bg-red-100 rounded-full mr-6">
              <img src="/images/goupage-sang.png" className="w-48 h-48 rounded-full" />
              </div>
            <div>
            <div className="shadow-md bg-orange-50 px-2 py-4 rounded-md hover:bg-orange-100">
            <button type="button" onClick={()=>handlechange(2)}>   
                <span className="text-xl font-mono text-green-400">Consultation</span>
                </button>
                </div>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-148w-48 text-green-600 bg-green-100 rounded-full mr-4">
                <img src={"/images/dashbord.png"} className="w-48 h-48 rounded-full"  alt="" />
            </div>
            <div>
              <div className="shadow-md bg-violet-50 px-2 py-4 rounded-md hover:bg-violet-100">
                <button onClick={()=>handlechange(3)} type="button"  className="block text-left text-xl text-orange-400 font-mono w-44">Tableau Dashbord</button></div>
              </div>
          </div>
        </div>
      </main>
    </PageChild>
  )
}
