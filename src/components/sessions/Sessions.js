import Chat from "./Chat";
import Channels from "./Channels";
import SessionsSidebar from "./SessionsSidebar";

const Sessions = () => {

    return ( 
        <div className="sessions">
            <SessionsSidebar />
            <Channels />
            <Chat />
        </div>
     );
}
 
export default Sessions;