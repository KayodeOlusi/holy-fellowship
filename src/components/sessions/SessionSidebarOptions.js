import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../firebase";

const SessionSidebarOptions = ({ Icon, addOption }) => {
    const addChannel = () => {
        const channelName = prompt("Add a channel");

        if(channelName) {
            addDoc(collection(db, "channels"), {
                name: channelName
            });
        };
    };

    return ( 
        <div className="sessions-sidebar-options text-center" onClick = { addOption ? addChannel : null }>
            { Icon && <Icon /> }
        </div>
     );
}
 
export default SessionSidebarOptions;