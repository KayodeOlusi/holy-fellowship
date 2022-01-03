import { Add, Drafts, ExpandLess, Inbox, PeopleAlt, StarBorder } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import SessionSidebarOptions from "./SessionSidebarOptions";

const SessionsSidebar = () => {
    const [user] = useAuthState(auth);

    return ( 
        <div className="sessions-sidebar">
            <Avatar className = "avatar" src = { user?.photoURL } />
            <h2 className = "mt-3 text-center" >SESSIONS</h2>
            <hr />
            <SessionSidebarOptions Icon = { StarBorder } title = "Starred" />
            <SessionSidebarOptions Icon = { Inbox } title = "Mentions" />
            <SessionSidebarOptions Icon = { Drafts } title = "Saved" />
            <SessionSidebarOptions Icon = { PeopleAlt } title = "People" />
            <hr />
            <SessionSidebarOptions Icon = { ExpandLess } title = "Show Less" />
            <hr />
            <SessionSidebarOptions Icon = { Add } title = "Add Channel" addOption />
            <hr />
        </div>
     );
}
 
export default SessionsSidebar;