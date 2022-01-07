import { Apps, Add, MenuOpen } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import SessionSidebarOptions from "./SessionSidebarOptions";

const SessionsSidebar = () => {
    const [user] = useAuthState(auth);
    
    return ( 
        <div className="sessions-sidebar">
            <Avatar className = "avatar" src = { user?.photoURL } />
            <h2 className = "mt-3 text-center sessions-name" >SESSIONS</h2>
            <hr />
            <SessionSidebarOptions Icon = { Apps } title = "Show Channel" showChannelPage />
            <SessionSidebarOptions Icon = { MenuOpen } title = "Hide Channel" hideChannelPage />
            <hr />
            <SessionSidebarOptions Icon = { Add } title = "Add Channel" addOption />
            <hr />
        </div>
     );
}
 
export default SessionsSidebar;