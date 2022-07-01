import { Add } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import SessionSidebarOptions from "./SessionSidebarOptions";

const SessionsSidebar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="sessions-sidebar">
      <Avatar className="avatar" src={user?.photoURL} />
      <div className="sessions-sidebar-icons">
        <SessionSidebarOptions
          className="sessions-sidebar-icon"
          Icon={Add}
          title="Add Channel"
        />
      </div>
    </div>
  );
};

export default SessionsSidebar;
