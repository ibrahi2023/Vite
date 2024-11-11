
import React,{ useState, useEffect} from 'react';
import ComDashboard from "../components/ComDashboard.jsx";
import HeaderChild from "../pages/HeaderChild.jsx";
 
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation();
  const user=location?.state;
    return (
        <HeaderChild>
        <ComDashboard data={{user:user.user}} />
       </HeaderChild>
    );
};
export default Dashboard;
