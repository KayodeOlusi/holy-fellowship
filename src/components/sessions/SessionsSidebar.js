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
            <SessionSidebarOptions Icon = { Apps } title = "Show Channel" />
            <SessionSidebarOptions Icon = { MenuOpen } title = "Hide Channel" />
            <SessionSidebarOptions Icon = { Add } title = "Add Channel" addOption />
        </div>
     );
}
 
export default SessionsSidebar;