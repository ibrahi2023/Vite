import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import validationUtility from "../../../app/utility/validationUtility.js";
import toast,{Toaster} from "react-hot-toast";
export default function AddClient(props) {
    const data=props.data?.user;
    const [divData, setdivData] = useState({CTS:"", nom:"",prenom:"",date_naissansse:"",sexe:"",wilaya:"",commune:data.user?.commune, n_telephone:"",groupe_sanguin:"",phenotype:"",date_don:"",inscrip_registre:"",matricule:"",annee:"",month:""});
    const [loading, setLoading] = useState(false);
    const [ResponseData, setResponse] = useState("");
    const navigate =useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdivData(prevState => ({...prevState, [name]: value}));
    };
    const handleChange3 = (e) => {
        const { name, value } = e.target;
        setdivData(prevState => ({...prevState, [name]: value}));
        const dat=new  Date();
        const annee =dat.getFullYear();
        const month=dat.getMonth()+1;
        setdivData(prevState=>({...prevState,["annee"]:annee}));
        setdivData(prevState=>({...prevState,["month"]:month}));
    };
    const handleSubmit = async () => {
        try {
        if(validationUtility.isEmpty(divData.CTS)){
            toast.error("CTS Required !");
        }
        else if(validationUtility.isEmpty(divData.nom)){
            toast.error("nom Required !");
        }
        else if(validationUtility.isEmpty(divData.prenom)){
            toast.error("prenom Required !");
        }
        else if(validationUtility.isEmpty(divData.date_naissansse)){
            toast.error("date_naissansse password Required !");
        }
        else if(validationUtility.isEmpty(divData.sexe)){
            toast.error("sexe Opital Required !");
        }
        else if(validationUtility.isEmpty(divData.commune)){
            toast.error("adresse commune Required !");
        }
        else if(validationUtility.isEmpty(divData.wilaya)){
            toast.error("adresse wilaya Required !");
        }
        else if(validationUtility.isEmpty(divData.n_telephone)){
            toast.error("numero telephone user Required !");
        }
        else if(validationUtility.isEmpty(divData.groupe_sanguin)){
            toast.error("groupe sangain user Required !");
        }
        else if(validationUtility.isEmpty(divData.phenotype)){
            toast.error("phenotype user Required !");
        }
        else if(validationUtility.isEmpty(divData.date_don)){
            toast.error("date don user Required !");
        }else if(validationUtility.isEmpty(divData.inscrip_registre)){
            toast.error("inscription registre user Required !");
        }
        else if(validationUtility.isEmpty(divData.matricule)){
            toast.error("matricule registre user Required !");
        }
        else {
            setLoading(true);
            const response=  await fetch('/api/AddClient', {method: 'POST',
            headers:{'Content-Type':'application/json'}, 
            body:JSON.stringify(divData)});
           const datas = await response.json();
            setResponse(datas);
            setTimeout(() => {
                navigate("/consultation",{state:data.user});
            }, 1500); 
            }
            } catch (error) {
                alert('Error submitting div');
                setLoading(false)
            }
        
    };
  
 const  handleAnnule= async()=> {
    setTimeout(() => {
        navigate("/consultation",{state:{user:data.user,title:"Liste Clients"}})
       }, 200); 
    }  
    const  GetClient=async()=> {
        try {
            const dat=new Date();
            let arr=[],ins;
               const yeurs=dat.getFullYear();
               const response=  await fetch('/api/GetClient', {method: 'POST',
                headers:{'Content-Type':'application/json'}, 
                body:JSON.stringify(data.user)});
               const result = await response.json();
               if(result?.length>0){
               for(var i in result){
                arr[i]=result[i].annee;
                var ai=result[i].inscrip_registre.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "-").split("-");
                arr[i]=ai[0];
               
               }
               const max=Math.max(...arr)+1
               const num=max<10 ? "0"+max:""+max
                ins=num+"/"+yeurs;
               }else{
                 ins="01"+"/"+yeurs;
               }
               setdivData(prevState => ({...prevState, ["inscrip_registre"]: ins}));
                } catch (error) {
                console.log("error split");
               }

      }
  return (<>
<main className="flex-1 items-left mt-1 h-fit px-1">
<div id="msg" className="flex-col">
{ResponseData && <h5 className="w-4/5 mx-auto h-2 text-slate-600"  >{ResponseData.message}</h5>}
</div>
<div   className="flex flex-row w-3/4 shadow-md bg-blue-50 px-8 pt-6 pb-8 mb-4 my-2 ml-40 mt-10">
   <div  className="bg-blue-50 w-full rounded  flex flex-col mr-2">
   <div className="-mx-3 md:flex mb-1">
    <div   className="md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        CTS</label>
        <input   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-green rounded py-3 px-4 mb-3"
        name="CTS" defaultValue={divData.CTS} onChange={handleChange} type="text" placeholder="CTS"/>
    </div>
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
            Nom
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter uppercase rounded py-3 px-4"
        defaultValue={divData.nom} onChange={handleChange} placeholder="nom" name="nom" type="text"/>
    </div>
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        Prenom 
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter uppercase rounded py-3 px-4"
        defaultValue={divData.prenom}  onChange={handleChange} placeholder="prenom" name="prenom" type="text" />
    </div>
    </div>
    <div className="-mx-3 md:flex mb-4">
        <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
         date naissansse
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData.date_naissansse} onChange={handleChange}  name="date_naissansse"  type="date" />
    </div>
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        sexe 
        </label>
        <select className="appearance-none bg-white block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData.sexe} onChange={handleChange} name="sexe" type="text">
             <option defaultValue value="">..</option>
            <option value="male">M</option>
            <option value="feumel">F</option>
            </select>
    </div>

    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        numero telephone 
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData.n_telephone} onChange={handleChange} placeholder="numero telephone" name="n_telephone" type="text" />
    </div>
    </div>
    <div className="-mx-3 md:flex mb-1">
    <div  onClick={GetClient} className="md:w-1/2 px-3">
        <label  className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
         Inscription registre 
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData.inscrip_registre} onChange={handleChange} placeholder="Inscription registre" name="inscrip_registre" type="text" />
        </div>
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        wilaya 
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter uppercase rounded py-3 px-4"
        defaultValue={divData.wilaya} onChange={handleChange} placeholder="wilaya" name="wilaya" type="text" />
    </div>

    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        commune 
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey- uppercase rounded py-3 px-4"
        defaultValue={divData.commune} onChange={handleChange} placeholder="commune" name="commune" type="text" />
    </div>
    </div>
    <div className="-mx-3 md:flex mb-1">
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        Groupe sanguin
        </label>
        <select className="appearance-none block bg-white w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData.groupe_sanguin} onChange={handleChange}  name="groupe_sanguin" type="text">
            <option defaultValue value="">..</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            </select>
    </div>

    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
         Phenotype 
        </label>
        <select className="appearance-none block bg-white w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData.phenotype} onClick={handleChange3} placeholder="phenotype" name="phenotype">
          <option value="">...</option>
          <option value="Ccee">Ccee</option>
          <option value="ccee">ccee</option> 
          <option value="CCee">CCee</option>
          <option value="CCEE">CCEE</option>
          <option value="CCEe">CCEe</option>
          <option value="CcEE">CcEE</option>
          <option value="CcEe">CcEe</option>
          <option value="ccEe">ccEe</option>
          <option value="ccEE">ccEE</option>
            </select>
    </div>
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
         Date Don
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData.date_don} onChange={handleChange}  name="date_don" type="date" />
    </div>
    </div>
    <div className="-mx-3 md:flex mb-1">
    <div className="md:w-1/2 px-3">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        matricule
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData.matricule} onChange={handleChange} placeholder="matricule" name="matricule" type="text"/>
    </div>
    <div className="md:w-1/2 px-3" >
       
    </div>
    <div className="md:w-1/2 px-3">
    </div>
    </div>
   
    <div className="-mx-3 md:flex mt-6 mb-1">
    <div className="flex items-center justify-center ml-3">
       <button onClick={handleSubmit} type="button" style={{width: "240px"}}className="text-center ml-0 px-2 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
        {loading?(<span>Ajouter Client Don..</span>):(<span>Ajouter Client Don</span>)}
        </button>
    </div>
    <div className="flex items-center justify-center">
     <button onClick={handleAnnule} type="button" style={{width: "240px"}} className="text-center ml-2 px-2 py-3 text-slate-600 hover:text-slate-700 focus:text-slate-700 hover:bg-slate-300 focus:bg-slate-100 border border-slate-600 rounded-md mb-3">
            Retoure
     </button>
    </div>
    </div>
    </div>
    </div>
    <Toaster position="bottom-center"/>
   </main>
</>
  )
}
