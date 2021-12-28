import { Add, Drafts, ExpandLess, ExpandMore, Inbox, PeopleAlt, StarBorder } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import SessionSidebarOptions from "./SessionSidebarOptions";

const SessionsSidebar = () => {
    return ( 
        <div className="sessions-sidebar">
            <Avatar className = "avatar" />
            <h2 className = "mt-3 text-center" >SESSIONS</h2>
            <hr />
            <SessionSidebarOptions Icon = { StarBorder } title = "Starred" />
            <SessionSidebarOptions Icon = { Inbox } title = "Mentions" />
            <SessionSidebarOptions Icon = { Drafts } title = "Saved" />
            <SessionSidebarOptions Icon = { PeopleAlt } title = "People" />
            <hr />
            <SessionSidebarOptions Icon = { ExpandLess } title = "Show Less" />
            <hr />
            <SessionSidebarOptions Icon = { ExpandMore } title = "Channel" />
            <hr />
            <SessionSidebarOptions Icon = { Add } title = "Add Channel" />
        </div>
     );
}
 
export default SessionsSidebar;