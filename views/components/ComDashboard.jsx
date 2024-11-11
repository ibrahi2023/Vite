
import React, { useState,useEffect } from "react";
import Aside from "../components/header/Aside.jsx";
 import Header from "../components/header/Header.jsx";
import Chart from "react-apexcharts";
  const ComDashboard=(props)=>{
    const user =props?.data.user;
    const[groupage,setGroupage]=useState("A+");
    const[Toogle,seToogle]=useState(false);
    const[Annee,SetAnnee]=useState("2024");
    const ani=new Date();
    const yer=ani.getFullYear();
    const   options={ chart: { id: "basic-bar"}, xaxis:
      { categories: [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12]
        }
      };
      const  series= [
        {
          name: "A+",
          data: [0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
        },
        {
          name: "A-",
          data: [0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
        },
        {
          name: "B+",
          data: [0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
        },
        {
          name: "B-",
          data: [0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
        },
         {
          name: "AB+",
          data: [0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
        },
        {
          name: "AB-",
          data: [0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
        },
        {
          name: "O+",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
          name: "0-",
          data: [0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0]
        }
      ]   
      const[serie,setSeries]=useState(series);
        const handleChange=async(e)=>{
          try {
            const value=e.target.value;
          await SetAnnee(value);
          setSeries(series);
            console.log(value);
          } catch (error) {
            console.log(error)
          } 
          }
          const handleChange2=async(e)=>{
            try {
              const value=e.target.value;
            await setGroupage(value);
            console.log(value);
            } catch (error) {
              console.log(error)
            } 
            }
  
    async function  Getclient() {  
      seToogle(true) ;
      let arrA=[],dataSeries=[0,0,0,0,0,0,0,0,0,0,0,0],serieA={jan:0,fev:0,mars:0,avr:0,mai:0,juin:0,juiet:0,aout:0,sept:0,oct:0,nouv:0,decm:0},selectG=0;
      const response=  await fetch('/api/GetClient', {method: 'POST',
       headers:{'Content-Type':'application/json'}, 
       body:JSON.stringify(user)});
       const result = await response.json();
       console.log(result);
       switch (groupage) {
        case "A+":selectG=0;break;
        case "A-":selectG=1;break;
        case "B+":selectG=2;break;
        case "B-":selectG=3;break;
        case "AB+":selectG=4;break;
        case "AB-":selectG=5;break;
        case "O+":selectG=6;break;
        case "O-":selectG=7;break;
        default:selectG=0; break;
       }
        const arr1 =await result.filter(item => item.annee == Annee);
        for(var i in arr1){
          if(arr1[i].groupe_sanguin==groupage) arrA.push(arr1[i]);
        }
       for(var i in arrA){
        if(arrA[i].month=="1") { 
          serieA.jan=parseInt(serieA.jan+1);
          dataSeries[0]=serieA.jan}
        if(arrA[i].month=="2")  {
          serieA.jan=parseInt(serieA.fev+1);
          dataSeries[1]=serieA.fev;
        }
        if(arrA[i].month=="3")  {
          serieA.mars=parseInt(serieA.mars+1);
          dataSeries[2]=serieA.mars;
        }
        if(arrA[i].month=="4") {
           serieA.avr=parseInt(serieA.avr+1);
           dataSeries[3]=serieA.avr;
        }
        if(arrA[i].month=="5")  {
          serieA.mai=parseInt(serieA.mai+1);
          dataSeries[4]=serieA.mai;
        }
        if(arrA[i].month=="6")  {
          serieA.juin=parseInt(serieA.juin+1);
          dataSeries[5]=serieA.juin;
        }
        if(arrA[i].month=="7")  {
          serieA.juiet=parseInt(serieA.juiet+1);
          dataSeries[6]=serieA.juiet;
        }
        if(arrA[i].month=="8")  {
          serieA.aout=parseInt(serieA.aout+1);
          dataSeries[7]=serieA.aout;
        }
        if(arrA[i].month=="9")  {
          serieA.sept=parseInt(serieA.sept+1);
          dataSeries[8]=serieA.sept;
        }
        if(arrA[i].month=="10")  {
          serieA.oct=parseInt(serieA.oct+1);
          dataSeries[9]=serieA.oct;
        }
        if(arrA[i].month=="11")  {
          serieA.nouv=parseInt(serieA.nouv+1);
          dataSeries[10]=serieA.nouv;
        }
        if(arrA[i].month=="7")  {
          serieA.decm=parseInt(serieA.decm+1);
          dataSeries[11]=serieA.decm;
        }
       }
      
      setSeries(serie.map(seriez =>
        seriez.name === groupage ? { ...seriez, data: dataSeries } : seriez
      ));
      seToogle(false);
    }
   return (<>
    <main className="items-left mt-4 h-4/5 flex ml-2 px-2 py-2 mr-2 bg-slate-50">
      <div className="w-2/5 flex h-fit">
      <div className="grid grid-cols-3 gap-0">
      <div   className="py-2">
      <label className="mb-3 block text-sm font-medium text-black dark:text-slate-600">
       Annee
      </label>
      <select onChange={handleChange} className="bg-teal-200 rounded-md px-12 py-3 border-teal-300" >
       <option value={"2024"}>...</option>
       <option value={yer}>{yer}</option>
       <option value={yer-1}>{yer-1}</option>
       <option value={yer-2}>{yer-2}</option>
       <option value={yer-3}>{yer-3}</option>
       <option value={yer-4}>{yer-4}</option>
       <option value={yer-5}>{yer-5}</option>
       <option value={yer-6}>{yer-6}</option>
       <option value={yer-7}>{yer-7}</option>
        </select>
      </div>
      <div className="py-2">
      <label className="mb-3 block text-sm font-medium text-black dark:text-slate-600">
        Groupage
      </label>
        <select onChange={handleChange2}  className="bg-red-100 rounded-md px-12 py-3  border border-red-300" >
       <option value={"A+"}>...</option>
       <option value={"A+"}>A+</option>
       <option value={"A-"}>A-</option>
       <option value={"B+"}>B+</option>
       <option value={"B-"}>B-</option>
       <option value={"AB+"}>AB+</option>
       <option value={"AB-"}>AB-</option>
       <option value={"O+"}>O+</option>
       <option value={"O-"}>O-</option>
        </select>
        </div>
        <div className="py-2">
        <button onClick={Getclient} className="bg-sky-100 shadow-sm mt-8 px-4 h-12  rounded-md hover:bg-sky-500 text-slate-600 hover:text-white focus:bg-blue-100 border border-sky-600" >Groupage Annee</button>
       </div>
        {Toogle &&  
        <div className="flex-rowg col-span-3 text-center mt-12" role="status">
    <svg aria-hidden="true" className="inline w-36 h-36 text-gray-200 animate-spin dark:text-gray-300 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
    </div>}
     </div>
        
      </div>
      <div className="w-4/5">
            <Chart
              options={options}
              series={serie}
              type="area"
              width="80%"
            />
      </div>
     
      </main>
     </>  
  );
  }

export default ComDashboard;

