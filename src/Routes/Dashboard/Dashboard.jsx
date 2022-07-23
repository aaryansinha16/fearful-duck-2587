import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import { auth, db, logout } from "./firebase";
import { auth, db, logout } from "../../Authentication/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { Box } from "@chakra-ui/react";
import DashNav from "./DashNav";
import App from "../../App";
import DashboardStrip from "./DashboardStrip";
import DashGrid from "./DashGrid";
function Dashboard() {
    
  return (
    <Box bgColor='gray.200'  pb='100px'>
       {/* <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div> */}

       <Box mt='110px'>
        {/* <App name={name} email={user?.email}/> */}
            <DashboardStrip/>
       </Box>

       <Box w='75%' m='auto' mt='50px'>
        <DashGrid/>
       </Box>
     </Box>
  );
}
export default Dashboard;