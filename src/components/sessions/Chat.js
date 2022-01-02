import { StarBorderOutlined } from "@mui/icons-material";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from 'react-redux';
import { selectChannel } from "../../features/channelSlice";
import { db } from "../../firebase";

const Chat = () => {
    const channelId = useSelector(selectChannel);
    const [channelDetails] = useDocument(channelId && doc(db, "channels", channelId));
    const [channelMessages] = useCollection(channelId && 
    query(collection(doc(db, "channels", channelId), "messages"), orderBy("timestamp", "asc")));

    console.log(channelDetails?.data())

    return ( 
        <div className="chat">
            <div className="chat-header">
                <div className="chat-header-content">
                    <h6>{  }</h6>
                    <StarBorderOutlined />
                </div>
            </div>
        </div>
     );
}
 
export default Chat;