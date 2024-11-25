import React from 'react';
import { useLocation } from "react-router-dom";
import AsideAdmin from "../components/header/AsideAdmin.jsx";
 import Header from "../components/header/Header.jsx";

export default function HeaderAdmin(props) {
  const location = useLocation();
  const user = location.state?.user;
  const title=location.state?.title
  return (
 <div className="flex bg-gray-100 min-h-screen">
 <AsideAdmin data={{user:user,title:title}}/>
  <div className="flex-grow text-gray-800">
  <Header data={{user:user,title:title}} />
      {props.children}  
      </div>
    </div>
     )
}
  

