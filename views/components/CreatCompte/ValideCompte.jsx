import React,{ useState, useMemo, useEffect } from "react";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import validationUtility from "../../../app/utility/validationUtility.js";
import {useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function ValidEdite(props) {
    const location = useLocation();
    const [file, setFile] = useState();
    // setFile(URL.createObjectURL(e.target.files[0]));
    const navigate=useNavigate();
    const [divData, setdivData] = useState(props?.data.data);
    const [loading, setLoading] = useState(false);
    const [ResponseData, setResponse] = useState();
    const[checkadmin,SetcheckAdmin]=useState(false);
    const[checkuser,SetcheckUser]=useState(false);
    const user=location?.state;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdivData(prevState => ({...prevState, [name]: value}));
  
    };
 
    const handleSubmit = async () => {
                   try {
            setLoading(true)
            const response=  await fetch('/api/ValideUser', {method: 'POST',
            headers:{'Content-Type':'application/json'}, 
            body:JSON.stringify(divData)});
            const data = await response.json();
            setResponse(data);
            setTimeout(() => {
            if(data.message=="Compte Valider avec Success")     navigate("/PageAdmin",{state:user})
            }, 200); 
            } catch (error) {
                alert('Error submitting ');
                setLoading(false)
            }
        }
    
 const  handleAnnule = async()=> {
    try {
        setTimeout(() => {
            navigate("/PageAdmin",{state:user})
           }, 200);
        
    } catch (error) {
        console.log(error);
    }
                  
 }
   
 const CheckHandleChange=(e)=>{
    const {name}=e.target;
    if(name=="user") {
        setdivData(prevState => ({...prevState, ["typeuser"]: "user"}));
        SetcheckAdmin(false);
        SetcheckUser(true);
    }else if(name=="admin"){
            setdivData(prevState => ({...prevState, ["typeuser"]: "admin"}));
            SetcheckAdmin(true);
            SetcheckUser(false);
    }

 }
  return (<>
 <main className="flex-1 items-left mt-1 h-fit px-1">
 <div id="msg" className="flex-col">
{ResponseData && <h5 className="w-4/5 mx-auto pb-2 text-slate-600" >{ResponseData.message}</h5>}
<h5 className="w-4/5 mx-auto  text-slate-200 flex-grow" ></h5>
<h5 className="w-4/5 mx-auto  text-slate-200 flex-grow" ></h5>
</div>
<div   className="flex flex-row w-3/4 shadow-md bg-orange-50 px-8 pt-6 pb-8 mb-4 my-2 ml-40 mt-10">
   <div  className="bg-orange-50 w-3/4 rounded  flex flex-col mr-2">
   <div className="-mx-3 md:flex mb-1">
    <div   className="md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        Nom Utilisateur</label>
        <input   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-green rounded py-3 px-4 mb-3"
        name="username" value={divData.username} onChange={handleChange} type="text" placeholder="Nom Utilisateur"/>
    </div>
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
            Email
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        value={divData.email} onChange={handleChange} name="email" type="email"/>
    </div>
    </div>
    <div className="-mx-3 md:flex mb-4">
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        Opital 
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        value={divData.Opital}  onChange={handleChange} name="Opital" type="text" />
    </div>
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
         commune
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        value={divData.commune} onChange={handleChange} name="commune"  type="text" />
    </div>
    </div>
    <div className="-mx-3 md:flex mb-1">
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        Valider Compte 
        </label>
        <select className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        value={divData.validUser} onChange={handleChange} name="validUser">
            <option value="">...</option>
            <option value="oui">oui</option>
            <option value="non">non</option>
            </select>
    </div>
    </div>
    <div className="-mx-3 md:flex mt-6 mb-1">
        <div className="flex items-center justify-center ml-3">
        <button onClick={handleSubmit} type="button" style={{width: "240px"}}className="text-center ml-0 px-2 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
        {loading?(<span> Valider Compte Utilisateur..</span>):(<span>Valider Compte Utilisateur</span>)}
        </button>
    </div>
    
    <div className="flex items-center justify-center">
     <button onClick={handleAnnule} type="button" style={{width: "240px"}} className="text-center ml-2 px-2 py-3 text-yellow-600 hover:text-yellow-700 focus:text-yellow-700 hover:bg-yellow-100 focus:bg-purple-100 border border-yellow-600 rounded-md mb-3">
            Retour
     </button>
    </div>
    </div>
    </div>
    </div>
</main>
</>
  )
}
