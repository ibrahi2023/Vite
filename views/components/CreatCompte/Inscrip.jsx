import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";
import validationUtility from "../../../app/utility/validationUtility.js";
export default function Inscription() {
    const navigate=useNavigate();
    const [divData, setdivData] = useState({username: '', email: '',password:'',password2:'',Opital:"",commune:"",fileData:"",});
    const [loading, setLoading] = useState(false);
    const [ResponseData, setResponse] = useState();
    const[checkadmin,SetcheckAdmin]=useState(false);
    const[checkuser,SetcheckUser]=useState(false);
    const [file, setFile] = useState();
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setdivData(prevState => ({...prevState, [name]: value}));
  
    };
    const handleChange2 = async(e) => {
   const{name}=e.target;
   const file = event.target.files;
   let scannerDossier= "";
        if(file.length>0){
        var fileToLoad = file[0];
        var fileReader = new FileReader();
        var base64File;
        fileReader.onload = function(event) {
            base64File = event.target.result;
            scannerDossier= base64File;
            console.log(scannerDossier);
            console.log(scannerDossier);
            setdivData(prevState => ({...prevState, ["fileData"]:scannerDossier }));
            setFile(URL.createObjectURL(file[0]));
            console.log(URL.createObjectURL(file[0]))
        };
        fileReader.readAsDataURL(fileToLoad);
        }
    };
    const handleSubmit = async () => {
        if(validationUtility.isEmpty(divData.username)){
            toast.error("Username Required !")
        }
        else if(validationUtility.isEmpty(divData.email)){
            toast.error("email Required !")
        }
        else if(validationUtility.isEmpty(divData.password)){
            toast.error("password Required !")
        }
        else if(validationUtility.isEmpty(divData.password2)){
            toast.error("confermation password Required !")
        }
        else if(validationUtility.isEmpty(divData.Opital)){
            toast.error("confermation Opital Required !")
        }
        else if(validationUtility.isEmpty(divData.commune)){
            toast.error("confermation commune Required !")
        }
        else if(validationUtility.isEmpty(divData.fileData)){
            toast.error("image user Required !")
        }
        else {
            try {
            setLoading(true)
            const response=  await fetch('/api/signup', {method: 'POST',
            headers:{'Content-Type':'application/json'}, 
            body:JSON.stringify(divData)});
           const data = await response.json();
            console.log(divData)
            setResponse(data);
            setTimeout(() => {
           if(data?.message =="inscription Success")  navigate("/")
            }, 200); 
            } catch (error) {
                alert('Error submitting div');
                setLoading(false)
            }
        }
    };
 const  handleAnnule= async()=> {
    setTimeout(() => {
        navigate("/")
       }, 200); 
      
 } 
  return (
  <div className="w-3/5 mx-auto bg-white  rounded my-8">
      <div className="text-center text-gray-600 bg-sky-100  rounded-md py-4 shadow-lg mb-2">Registre Compte</div>
    <div className="bg-sky-50 pt-1 pb-4 shadow-lg">
      <div id="msg" className="h-8 flex"><h5 className="ml-8 pb-2 text-slate-400">{ResponseData?.message}</h5>
      {ResponseData &&  <><h5 className=" ml-8 pb-2 text-slate-400" >{ResponseData?.username}</h5><br/></>}
      </div>
      <div className="w-4/5 mx-auto pb-2">
      <div className="p-2 bg-white w-5/5 shadow-lg bg-whtie m-auto rounded-lg">
      <div className="flex file_upload p-1 relative border-2 border-dashed border-gray-300 rounded-lg m-auto" style={{width: "100%",height:"190px"}}>
     {file &&  <img src={file} alt="" srcSet="select image" className="h-44 mt-1 mx-auto rounded-md" /> } 
     {!file && <svg className="text-indigo-500 w-24 h-44 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>}
            <div className="input_field  w-max mx-auto mt-2 text-center">
                <label>
                    <input className="text-sm cursor-pointer w-36 hidden" type="file" name="fileData"  onChange={handleChange2} multiple />
                    <div className="text bg-indigo-200 border  border-indigo-400 text-indigo-500 hover:text-white  rounded-md font-thin cursor-pointer p-1 px-3 py-1 pb-1 hover:bg-indigo-500">Select</div>
                </label>
                <div className="title text-indigo-500  font-thin h-2">Or drop files here</div>
            </div>
        </div>
     </div>
      <div className="flex items-center bg-white rounded shadow-md mb-4 mt-2">
        <span className="px-3">
          <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
        </span>
        <input className="w-full h-12 border-r-4 focus:outline-none" type="text" name="username" placeholder="nom prenom" value={divData.username} onChange={handleChange} />
        <span className="px-3">
          <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
        </span>
        <input className="w-full h-12 focus:outline-none" type="email" name="email" placeholder="Email"  value={divData.email} onChange={handleChange}/>
      </div>
      <div className="flex items-center bg-white rounded shadow-md mb-4">
        <span className="px-3">
          <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
        </span>
        <input className="w-full h-12 border-r-4 focus:outline-none" type="text" name="Opital" placeholder="Opital"  value={divData.Opital} onChange={handleChange}/>
        <span className="px-3">
          <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"/></svg>
        </span>
        <input className="w-full h-12 focus:outline-none" type="text" name="commune" placeholder="commune"  value={divData.commune} onChange={handleChange}/>
      </div>
    
      <div className="flex items-center bg-white rounded shadow-md mb-4">
        <span className="px-3">
          <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>
        </span>
        <input className="w-full h-12 border-r-4 focus:outline-none" type="password" name="password" placeholder="Password"  value={divData.password} onChange={handleChange} />
        <span className="px-3">
          <svg className="fill-current  text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"/></svg>
        </span>
        <input className="w-full h-12  focus:outline-none" type="password" name="password2" placeholder="Conferme Password"  value={divData.password2} onChange={handleChange} />
      </div>
     <div className="flex w-full">
   <button onClick={handleSubmit}  className="bg-indigo-600 block mx-0 text-white text-sm uppercase rounded shadow-md px-16 py-2">
   {loading?(<span>Rejestre..</span>):(<span>Rejestre</span>)}
    </button>
   <form  className="flex-1">
   <button  className="bg-green-200 mx-8 block text-gray-600 text-sm uppercase rounded shadow-md px-16 py-2"><Link to={"/"} >Retour</Link></button>
   </form>
  </div>
  </div>
  </div>
  </div>
  )
}
