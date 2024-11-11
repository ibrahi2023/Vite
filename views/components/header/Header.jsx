import React,{useState} from 'react'
import {Link} from "react-router-dom";
export default function Header(props) {
const [toogle,SToogle]=useState();
    const data=props.data?.user;
    const title=props.data?.title;
      const  setToogle=()=>{
        if(toogle==false) SToogle(true);
        else SToogle(false)
        }
    return (
    <>
      <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
      <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
        <span className="sr-only">{title}</span>
          <svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>
      <div className="relative max-w-md sm:-ml-2">
      <p className="text-gray-400 text-xl">{title}</p>  
       </div>
      <div className="flex flex-shrink-0 items-center ml-auto">
      <div className="grid grid-cols-1 gap-0 text-center">
        <button onClick={setToogle} type="button" className="inline-flex items-center p-2 hover:bg-gray-100 col-span-4 focus:bg-gray-100 rounded-lg">
          <span className="sr-only">User Menu</span>
          <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
            <span className="font-semibold">APPLICATION EL TARF</span>
            <span className="text-sm text-gray-600">{data?.username}</span>
          </div>
          <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
            <img src={`/images/users/${data?._id}.png`} alt="user profile photo" className="h-full w-full object-cover" />
          </span>
          <svg  viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg> 
        </button>
        </div>
        <div className="flex border-l pl-3 ml-3 space-x-1">
          <Link to={"/"} className="flex-1">
            <button type="button" className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Log out</span>
            <svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
           </svg>
          </button></Link>
        </div>
      </div>
    </header>
    </>
  )
}
