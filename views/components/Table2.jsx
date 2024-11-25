
// import { useState, useMemo, useEffect } from "react";
// import {Link} from "react-router-dom";
// import DataTable from 'datatables.net-react';
// import DT from 'datatables.net-dt';
// import {useNavigate} from "react-router-dom";
// import SupprimerIcon from "../components/SupprimerIcon.jsx";
// import IconValid from "../components/iconValid.jsx"
// import EditIcon from "../components/EditIcon.jsx";
//  import  "../assets/css/dataTables.dataTables.min.css";
// const DataTabletd = (props) => {
//   DataTable.use(DT);
//   const navigate=useNavigate();
//   const [toogle,SetToogle]=useState(true)
//   const [showModal, setShowModal] = useState(false);
//   const [SupCompte, setCompte] = useState();
//   const [result, SetResult] = useState(props?.data.result);
//   const user=props?.data.user;
//   console.log(user);
//     useEffect(() => {
//    //let table = new DataTable('#myTable')
  
//   }, []);
//  const  handleAjoute=async()=>{
//   try {
//       navigate("/GetAddCompte",{state:{user:user,title:"Creat Compte",data:""}})
//    } catch (error) {
//     console.log("error")
//   }
//  }
//  const columns = [
//     { data: 'username' },
//     { data: 'email' },
//     { data: 'username' },
//     { data: 'email' },{ data: 'username' },
//     { data: 'email' },{ data: 'username' },
//     { data: 'email' },
//     { data: 'Opital' },{ data: 'Opital' },{ data: 'Opital' },{ data: 'Opital' }
// ];
//  const EditUser=async(e)=>{
//   try {
//     const data=e;
//     navigate("/GetEditCompte",{state:{user:user,title:"modifier Copmte",data:data}})
//   } catch (error) {
//   console.log("error")
// }
//  }
//  const ValidUser=async(e)=>{
//   try {
//     const data=e;
//     navigate("/GetValideCompte",{state:{user:user,title:"Valider Compte",data:data}})
//   } catch (error) {
//   console.log("error")
// }
//  }
 
//   const ShowModal=async(e)=>{
//         try {
//           if(showModal==true) setShowModal(false);
//           else setShowModal(true);
//           setCompte(e);
//         } catch (error) {
//           console.log(error)
//         }
//       }
    
//  const SupprimerUser=async(e)=>{
//     try {
//       const data=e;
//       navigate("/supprimerCompte",{state:{user:user,title:"Supprimer Compte",data:data}})
//     } catch (error) {
//     console.log("error")
//   }
//    } 
//  return (<>{ result.length >0 ?(<> <main className="flex-1 items-left mt-1 h-fit px-1">
//        <div style={{width: "99.9%"}} id='recipients' className="p-3 mt-6 lg:mt-0 rounded shadow bg-white">
//         <div className="w-full  bg-slate-100 py-3">
//         <div className="flex h-10 mr-2 flex-wrap items-start justify-end">
//         <div>
//           <button onClick={handleAjoute} type="button" className="inline-flex px-2 py-2 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
//                 <svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                 </svg>
//                 Ajouter Compte
//               </button></div>
//              </div>        
//       </div>
//       </div>
//     </main>
//     <main className="flex-1 items-left mt-0 h-fit px-1">
//      <div style={{width: "99.9%"}} className="w-fit p-4">
// 	  	<div style={{width: "99.9%"}} id='recipients' className="p-3 mt-6 lg:mt-0 rounded shadow bg-white">
//       <DataTable data={result}  columns={columns} 
//       options={{
//         responsive: true,
//         select: true,
//     }}

//       className="display">
//           <thead>
//         <tr>
//             <th>username</th>
//             <th>email</th>
//             <th>Opital</th>
            
//         </tr>
//     </thead>
//     </DataTable>
//         </div>
//       </div>
//       </main>
//   </> ):(<></>)   
// }</>
//   );
// };
// export default DataTabletd;
