import Chat from "./Chat";
import Channels from "./Channels";
import SessionsSidebar from "./SessionsSidebar";
import { useSelector } from "react-redux";
import { selectChannelState } from "../../features/channelSlice";

const Sessions = () => {
    const channelState = useSelector(selectChannelState);

    return ( 
        <div className = "sessions">
            <SessionsSidebar />
            { channelState && <Channels /> }
            <Chat />
        </div>
     );
}
 
export default Sessions;