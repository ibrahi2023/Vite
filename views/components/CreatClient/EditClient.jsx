import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import Header from "../header/Header.jsx";
export default function EditClient(props) {
    const data=props?.data;
    const [divData, setdivData] = useState(data.data);
    const [loading, setLoading] = useState(false);
    const [ResponseData, setResponse] = useState("");
    const navigate =useNavigate();
    const PHtype=["Ccee","ccee","CCee","CCEE","CCEe","CcEE","CcEe","ccEe","ccEE"]
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdivData(prevState => ({...prevState, [name]: value.toUpperCase()}));
    };
    const handleChange3 = () => {
        const dat=new  Date();
        const annee =dat.getFullYear();
        const month=dat.getMonth();
        switch(divData.groupe_sanguin){
        case "A+" :setdivData(prevState => ({...prevState, ["phenotype"]: PHtype[0]}));break;
        case "A-" :setdivData(prevState => ({...prevState, ["phenotype"]: PHtype[1]}));break;
        case "B+" :setdivData(prevState => ({...prevState, ["phenotype"]: PHtype[2]}));break;
        case "B-" :setdivData(prevState => ({...prevState, ["phenotype"]: PHtype[3]}));break;
        case "AB+" :setdivData(prevState => ({...prevState, ["phenotype"]: PHtype[4]}));break;
        case "AB-" :setdivData(prevState => ({...prevState, ["phenotype"]: PHtype[5]}));break;
        case "O+" :setdivData(prevState => ({...prevState, ["phenotype"]: PHtype[6]}));break;
        case "O-" :setdivData(prevState => ({...prevState, ["phenotype"]: PHtype[7]}));break;
        }
        setdivData(prevState=>({...prevState,["annee"]:annee}));
        setdivData(prevState=>({...prevState,["month"]:month}));
        console.log(divData)
     };
    const handleSubmit2 = async () => {
            try {
            setLoading(true);
            const response=  await fetch('/api/editClient', {method: 'POST',
            headers:{'Content-Type':'application/json'}, 
            body:JSON.stringify(divData)});
            const datas = await response.json();
            setResponse(datas);
            setTimeout(() => {
                navigate("/consultation",{state:data.user});
            }, 1500); 
            } catch (error) {
                alert('Error submitting div');
                setLoading(false)
            }
    };

 const  handleAnnule= async()=> {
    setTimeout(() => {
        navigate("/consultation",{state:data.user})
       }, 200); 
    }  
    const  GetClient=async()=> {
        try {
            const dat=new Date();
            let arr=[];
               const yeurs=dat.getFullYear();
               const response=  await fetch('/api/GetClient', {method: 'POST',
                headers:{'Content-Type':'application/json'}, 
                body:JSON.stringify(user)});
               const result = await response.json();
               for(var i in result){
                arr[i]=result[i].annee;
               }
               const max=Math.max(...arr)+1
               const num=max<10 ? "0"+max:""+max
               const ins=num+"/"+yeurs;
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
<div   className="flex flex-row w-3/4 shadow-md bg-orange-50 px-8 pt-6 pb-8 mb-4 my-2 ml-40 mt-10">
   <div  className="bg-orange-50 w-full rounded  flex flex-col mr-2">
   <div className="-mx-3 md:flex mb-1">
    <div   className="md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
        CTS</label>
        <input   className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-green uppercase rounded py-3 px-4 mb-3"
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
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter uppercase rounded py-3 px-4"
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
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData.phenotype} onClick={handleChange3} placeholder="phenotype" name="phenotype" type="text" />
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
        <label className="block  tracking-wide text-grey-darker text-xs font-normal mb-2">
         _id
        </label>
        <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
        defaultValue={divData._id} onChange={handleChange}  name="_id" type="text" />
    </div>
    <div className="md:w-1/2 px-3">
    </div>
    </div>
   
    <div className="-mx-3 md:flex mt-6 mb-1">
        <div className="flex items-center justify-center ml-3">
       <button onClick={handleSubmit2} type="button" style={{width: "240px"}}className="text-center ml-0 px-2 py-3 text-yellow-600 hover:text-yellow-700 focus:text-yellow-700 hover:bg-yellow-100 focus:bg-yellow-100 border border-yellow-600 rounded-md mb-3">
        {loading?(<span>Modifier Client Don..</span>):(<span>Modifier Client Don</span>)}
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
   </main>
</>
  )
}
