import React from 'react';
import AddEditClient from "../components/CreatCompte/AddEditClient.jsx";
import AppLayout from "../layout/AppLayout.jsx";

const DellClient = (props) => {
    const data =props.data;
    return (
        <AppLayout>
            <AddEditClient data={data}/>
        </AppLayout>
    );

}
export default DellClient;