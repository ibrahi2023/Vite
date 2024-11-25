
import React from 'react';
import ValiEdite from "../../components/CreatCompte/ValiEdite.jsx";
import AppLayout from "../../layout/AppLayout.jsx";
import { useLocation } from "react-router-dom";
import HeaderAdmin from "../../pages/HeaderAdmin.jsx";

const EditUser = () => {
    const location = useLocation();
    const data=location?.state;
    return (
        <HeaderAdmin>
            <ValiEdite data={{user:data,data:data?.data}} />
        </HeaderAdmin>
    );
};
export default EditUser;



