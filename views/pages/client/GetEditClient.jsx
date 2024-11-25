
import React from 'react';
import EditClient from "../../components/CreatClient/EditClient.jsx";
import HeaderChild from "../../pages/HeaderChild.jsx"
import { useLocation } from "react-router-dom";
const GetEditClient = () => {
    const location = useLocation();
    const data=location?.state;
        return (
        <HeaderChild>
            <EditClient data={{user:data,data:data?.data}}/>
        </HeaderChild>
    );
};
export default GetEditClient;

