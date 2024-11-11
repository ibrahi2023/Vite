import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListPage from "../views/pages/ListPage.jsx";
import AddUser from "../views/pages/User/AddUser.jsx";
import EditUser from "../views/pages/User/EditUser.jsx";
import ValidationUser from "../views/pages/User/ValidUser.jsx";
import DellUser from "../views/pages/User/DellUser.jsx";
import Login from "../views/pages/Login.jsx";
import Inscriptions from "../views/pages/Inscription.jsx";
import PageMenu from "../views/pages/pageMenu.jsx";
import ListPageClient from "../views/pages/ListClient.jsx";
import AddClient from "../views/pages/client/addClient.jsx";
import GetEditClient from "../views/pages/client/GetEditClient.jsx"
import GetAddClient from "../views/pages/client/GetAddClient.jsx"
import Dashboard from "../views/pages/Dashboard.jsx"

const Web = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/GetAddCompte" element={<AddUser/>}/>
                <Route path="/GetEditCompte" element={<EditUser/>}/>
                <Route path="/GetValideCompte" element={<ValidationUser/>}/>
                <Route path="/supprimerCompte" element={<DellUser />}/> 
                <Route path="/PageAdmin" element={<ListPage/>}/>
                <Route path="/PageMenu" element={<PageMenu/>}/>
                <Route path="/inscription" element={<Inscriptions/>}/>
                <Route path="/Newcreate" element={<AddClient />}/>
                <Route path="/consultation" element={<ListPageClient />}/>
                <Route path="/GetEditClient" element={<GetEditClient />}/> 
                <Route path="/GetAddClient" element={<GetAddClient />}/> 
                <Route path="/dashboard" element={<Dashboard />}/> 
              
                
          
            </Routes>
        </BrowserRouter>
    );
};
export default Web;