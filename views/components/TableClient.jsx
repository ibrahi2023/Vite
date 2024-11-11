import { useRef , useEffect,useState } from "react";

import DataTable from 'datatables.net-dt';
 import  "../assets/css/dataTables.dataTables.min.css";
 import {useNavigate} from "react-router-dom";
 import { DownloadTableExcel } from 'react-export-table-to-excel';
  import Historique from "../components/Historique.jsx";
  
const DataTabl = (props) => {
  const navigate=useNavigate();
  const tableRef = useRef(null);
  const [toogle,SetToogle]=useState(true)
  const result=props?.data.result;
  const user=props?.data.user;
  const [showModal, setShowModal] = useState(false);
  const [ListDon, setListDon] = useState(false);

    useEffect(() => {
   let table = new DataTable('#myTable')
  
  }, []);
  const editClient=async(e)=>{
    const data=e;
    navigate("/GetEditClient",{state:{user:user,title:"Moudifier Client",data:data}})
  }
  const addClient=async(e)=>{
    const data=e;
    navigate("/GetAddClient",{state:{user:user,title:"Ajouter Client",data:""}})
  }
  const List =()=>{
    return( <>
    <p className="text-xl text-orange-400 shadow-md px-2 py-2 bg-red-50 rounded-lg mb-2">    Commune: {ListDon[0]?.commune} **  Wilaya: {ListDon[0]?.wilaya} **  Date Nissance: {ListDon[0]?.date_naissansse.split("-").reverse().join("/")}</p><br/>
     { ListDon.map((item)=>(
        <p className="text-xl text-center text-orange-400 shadow-md px-2 py-2 bg-red-50 border border-red-400 rounded-lg mb-2" key={item._id}>** Date Don: {item?.date_don.split("-").reverse().join("/")} **</p> ))
     }
    </>)
            
  }
  const toogleModal=async(e)=>{
    try {
      const response=  await fetch('/api/GetMatricule', {method: 'POST',
        headers:{'Content-Type':'application/json'}, 
        body:JSON.stringify({matricule:e?.matricule})});
        const result = await response.json();
        setListDon(result);
        if(showModal==true) setShowModal(false);
        else setShowModal(true);
        console.log(showModal);
    } catch (error) {
      console.log(error)
    }  
    }
  const Modal=()=> {
    return (
      <>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-medium text-slate-500 ">
                      {ListDon[0]?.nom}  {ListDon[0]?.prenom}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                 {ListDon && <List />}        
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-white bg-red-300 text-lg  font-mono uppercase px-6 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-red-500 rounded-md hover:bg-red-400"
                      type="button" 
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
  }
  

 return (<>{ result.length >0 ?(<><main className="flex-1 items-left mt-1 h-fit px-1">
       <div style={{width: "99.9%"}} id='recipients' className="p-3 mt-6 lg:mt-0 rounded shadow bg-white">
        <div className="w-full  bg-slate-100 py-3">
        <div className="flex h-10 mr-2 flex-wrap items-start justify-end">
        <div className="flex">
                <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}>
                <button className="inline-flex px-2 py-2 text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-600 rounded-md mb-3">
               <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="-343.4625 -532.5 2976.675 3195"><path d="M1437.75 1011.75L532.5 852v1180.393c0 53.907 43.7 97.607 97.607 97.607h1562.036c53.907 0 97.607-43.7 97.607-97.607V1597.5z" fill="#185C37"/><path d="M1437.75 0H630.107C576.2 0 532.5 43.7 532.5 97.607V532.5l905.25 532.5L1917 1224.75 2289.75 1065V532.5z" fill="#21A366"/><path d="M532.5 532.5h905.25V1065H532.5z" fill="#107C41"/><path d="M1180.393 426H532.5v1331.25h647.893c53.834-.175 97.432-43.773 97.607-97.607V523.607c-.175-53.834-43.773-97.432-97.607-97.607z" opacity=".1"/><path d="M1127.143 479.25H532.5V1810.5h594.643c53.834-.175 97.432-43.773 97.607-97.607V576.857c-.175-53.834-43.773-97.432-97.607-97.607z" opacity=".2"/><path d="M1127.143 479.25H532.5V1704h594.643c53.834-.175 97.432-43.773 97.607-97.607V576.857c-.175-53.834-43.773-97.432-97.607-97.607z" opacity=".2"/><path d="M1073.893 479.25H532.5V1704h541.393c53.834-.175 97.432-43.773 97.607-97.607V576.857c-.175-53.834-43.773-97.432-97.607-97.607z" opacity=".2"/><linearGradient gradientTransform="matrix(1 0 0 -1 0 2132)" y2="404.982" x2="967.987" y1="1729.018" x1="203.513" gradientUnits="userSpaceOnUse" id="a"><stop offset="0" stopColor="#18884f"/><stop offset=".5" stopColor="#117e43"/><stop offset="1" stopColor="#0b6631"/></linearGradient><path d="M97.607 479.25h976.285c53.907 0 97.607 43.7 97.607 97.607v976.285c0 53.907-43.7 97.607-97.607 97.607H97.607C43.7 1650.75 0 1607.05 0 1553.143V576.857c0-53.907 43.7-97.607 97.607-97.607z" fill="url(#a)"/><path d="M302.3 1382.264l205.332-318.169L319.5 747.683h151.336l102.666 202.35c9.479 19.223 15.975 33.494 19.49 42.919h1.331a798.667 798.667 0 0121.3-44.677L725.371 747.79H864.3l-192.925 314.548L869.2 1382.263H721.378L602.79 1160.158a186.298 186.298 0 01-14.164-29.66h-1.757a140.458 140.458 0 01-13.739 28.755l-122.102 223.011z" fill="#FFF"/><path d="M2192.143 0H1437.75v532.5h852V97.607C2289.75 43.7 2246.05 0 2192.143 0z" fill="#33C481"/><path d="M1437.75 1065h852v532.5h-852z" fill="#107C41"/></svg>
                Export excel
               </button>
                </DownloadTableExcel>
                <button onClick={()=>addClient()} className="bg-sky-300 shadow-sm px-4 h-12 rounded-md hover:bg-sky-500 text-slate-600 hover:text-white focus:bg-blue-100 border border-sky-600" >Ajouter Client</button>
                 <Modal  data={{tootgle:toogle}} />
                </div>

              </div>        
        </div>
      </div>
    </main>
    <main className="flex-1 items-left mt-0 h-fit px-1">
     <div style={{width: "99.9%"}} className="w-fit p-4">
	  	<div style={{width: "99.9%"}} id='recipients' className="p-3 mt-6 lg:mt-0 rounded shadow bg-white">
      <table ref={tableRef} id="myTable" className="display" >
          <thead>
        <tr>
            <th>Action</th>
            <th>inscrip_registre</th>
            <th>nom</th>
            <th>prenom</th>
            <th>date_naissansse</th>
            <th>wilaya</th>
            <th>groupe_sanguin</th>
            <th>phenotype</th>
            <th>date_don</th>
            <th>matricule</th>
        </tr>
    </thead>
    <tbody>
       {result?.map((items)=>(
            <tr key={items._id}>
            <td className="flex"><button onClick={()=>editClient(items)} className="bg-yellow-300 shadow-sm px-4 py-2 rounded-md hover:bg-yellow-500 focus:bg-yellow-100 border border-yellow-600" >Edit</button>
               <button onClick={()=>toogleModal(items)} className="inline-flex bg-cyan-200 ml-1 shadow-sm px-4 py-2 rounded-md
                text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600"><Historique/>
              </button>
            </td>
            <td>{items.inscrip_registre}</td>
            <td>{items.nom}</td>
            <td>{items.prenom}</td>
            <td>{items.date_naissansse}</td>
            <td>{items.wilaya}</td>
            <td>{items.groupe_sanguin}</td>
            <td>{items.phenotype}</td>
            <td>{items.date_don}</td>
            <td>{items.matricule}</td>
            </tr>
       ))}
    </tbody>
          </table>
        </div>
      </div>
   </main></>
   ):(<></>)   
}</>
  );
};
export default DataTabl;
