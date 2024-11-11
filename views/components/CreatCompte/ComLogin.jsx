import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import toast,{Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";
import validationUtility from "../../../app/utility/validationUtility.js";
export default function ComponLogin() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({username: '', email: '',password:'',password2:'',Opital:"",commune:"",fileData:"",typeuser:"",roles:""});
    const [loading, setLoading] = useState(false);
    const [ResponseData, setResponse] = useState();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({...prevState, [name]: value}));
    };

    const handleSubmit = async () => {
        if(validationUtility.isEmpty(formData.username)){
            toast.error("Username Required !")
        }
        else if(validationUtility.isEmpty(formData.password)){
            toast.error("password Required !")
        }
        else {
            try {
            setLoading(true)
            const response=  await fetch('/api/signin', {method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(formData)});
            const result = await response.json();
            setResponse(result);
            if(result.message=="Success") {
                if(result.typeuser=="admin"){ navigate("/PageAdmin",{state:{user:result,title:"Compte Administrateur"}});}
                else{ navigate("/PageMenu",{state:{user:result,title:"Page Menu"}});}
            }
            else {
                navigate("/");
            }

                      } catch (error) {
                alert('Error submitting form');
                setLoading(false)
            }
        }
    };
  return (<div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
           <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <div className="mt-12 flex flex-col items-center">
                  <div className="w-full flex-1 mt-8">
                    <h5 className="w-4/5 mx-auto pb-2 text-slate-200" id="msg">{
                       ResponseData?.message 
                    }
                    </h5>
                      <div className="flex flex-col items-center">
                          <button
                              className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-red-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                              <div className="bg-white p-2 rounded-full">
                                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                                      <path
                                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                          fill="#4285f4" />
                                      <path
                                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                          fill="#34a853" />
                                      <path
                                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                          fill="#fbbc04" />
                                      <path
                                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                          fill="#ea4335" />
                                  </svg>
                              </div>
                              <Link to={"/inscription"} className="ml-4">
                                Inscription
                              </Link>
                          </button>
    
                      </div>
    
                      <div className="my-12 border-b text-center">
                          <div
                              className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                               Application Gestion Stock
                          </div>
                      </div>
    
                      <div className="mx-auto max-w-xs">
                          <input
                              value={formData.username} onChange={handleChange}  name="username"
                              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                              type="text" placeholder="Utilisateur" />
                          <input name="password"
                              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                              value={formData.password} onChange={handleChange} type="password" placeholder="Password" />
                            <button type="button" onClick={handleSubmit}
                              className="mt-5 tracking-wide font-semibold bg-red-400 text-white-500 w-full py-4 rounded-lg hover:bg-red-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                              <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                  <circle cx="8.5" cy="7" r="4" />
                                  <path d="M20 8v6M23 11h-6" />
                              </svg>
                              <span className="ml-1 text-gray-900">
                                  Sign In
                              </span>
                          </button>
                          <p className="mt-6 text-xs text-gray-600 text-center">
                              I agree to abide by Cartesian Kinetics
                              <Link to={"#"} className="border-b border-gray-500 border-dotted">
                                  Terms of Service
                              </Link>
                              and its
                              <Link to={"#"} className="border-b border-gray-500 border-dotted">
                                  Privacy Policy
                              </Link>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex-1 bg-red-50 text-center hidden lg:flex">
              <div className="m-6 xl:m-6 w-full bg-contain bg-center bg-no-repeat"
                  style={{backgroundImage: "url('/images/dm.png')"}}>
              </div>
          </div>
        </div>
        <Toaster position="bottom-center"/>
       </div>
  )
}
