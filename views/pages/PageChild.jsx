import React from 'react';
import { useLocation } from "react-router-dom";
import AsideMenu from "../components/header/AsideMenu.jsx";
 import Header from "../components/header/Header.jsx";
 import {Toaster} from "react-hot-toast";

export default function PageChild(props) {
  const location = useLocation();
  const user = location.state.user;
  return (<>
 <div className="flex bg-gray-100 min-h-screen">
 <AsideMenu />
  <div className="flex-grow text-gray-800">
  <Header data={{user:user,title:"Page Menu"}} />
       {props.children}  
      </div>
    </div></>
     )
}
