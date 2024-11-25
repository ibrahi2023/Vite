
import React from 'react';
import AddEdite from "../../components/CreatCompte/AddEdite.jsx";
import AppLayout from "../../layout/AppLayout.jsx";
import HeaderAdmin from "../../pages/HeaderAdmin.jsx";
import { useLocation } from "react-router-dom";
import DelUser from "../../components/CreatCompte/DelUser.jsx";
const DellUser = () => {
    const location = useLocation();
    const data=location?.state;
    return (
        <HeaderAdmin>
            <DelUser data={{user:data,data:data?.data}}/>
        </HeaderAdmin>
    );
};
export default DellUser;



