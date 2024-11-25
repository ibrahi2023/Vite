
import React from 'react';
import ValideCompte from "../../components/CreatCompte/ValideCompte.jsx";
import AppLayout from "../../layout/AppLayout.jsx";
import { useLocation } from "react-router-dom";
import HeaderAdmin from "../../pages/HeaderAdmin.jsx";

const ValidationUser = () => {
    const location = useLocation();
    const data=location?.state;
    return (
        <HeaderAdmin>
            <ValideCompte data={{user:data,data:data?.data}} />
        </HeaderAdmin>
    );
};
export default ValidationUser;



