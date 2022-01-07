import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { closeChannel, showTheChat } from "../../features/channelSlice";

const SessionSidebarOptions = ({ Icon, addOption, showChannelPage }) => {
    const dispatch = useDispatch();
    const addChannel = () => {
        const channelName = prompt("Add a channel");

        if(channelName) {
            addDoc(collection(db, "channels"), {
                name: channelName
            });
        };
    };

    const showChannel = () => {
        dispatch(closeChannel({
            channelState: true
        }));
        dispatch(showTheChat({
            showChat: false
        }));
    };

    const hideChannel = () => {
        dispatch(closeChannel({
            channelState: false
        }));
        dispatch(showTheChat({
            showChat: true
        }))
    };

    return ( 
        <div className="sessions-sidebar-options text-center" onClick = { addOption ? addChannel : showChannelPage ? showChannel : hideChannel }>
            { Icon && <Icon /> }
        </div>
     );
}
 
export default SessionSidebarOptions;