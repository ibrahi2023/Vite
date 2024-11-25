
import React from 'react';
import AddClient from "../../components/CreatClient/AddClient.jsx";
import HeaderChild from "../../pages/HeaderChild.jsx";
import { useLocation } from "react-router-dom";
const GetAddClient = () => {
    const location = useLocation();
    const data=location.state;
    
       return (
        <HeaderChild>
            <AddClient data={{user:data,data:data}}/>
        </HeaderChild>
    );
};
export default GetAddClient;

