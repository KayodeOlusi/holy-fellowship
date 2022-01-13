import { collection, doc, orderBy, query } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from 'react-redux';
import { selectChannel } from "../../features/channelSlice";
import { db } from "../../firebase";
import ChatInput from "./ChatInput";
import Message from "./Message";
import Preview from "./Preview";
import { ArrowCircleLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Chat = () => {
    const navigate = useNavigate();
    const channelId = useSelector(selectChannel);
    const [channelDetails] = useDocument(channelId && doc(db, "channels", channelId));
    const [channelMessages] = useCollection(channelId && 
    query(collection(doc(db, "channels", channelId), "messages"), orderBy("timestamp", "asc")));
    
    const goSessions = () => {
        navigate("/sessions");
    }

    return ( 
        <div className = "chat">
            <div className = "chat-preview">
                <Preview />
            </div>
            <div className = "chat-inner">
                <div className = "chat-header">
                    <h6>{ channelDetails?.data().name }</h6>
                    <ArrowCircleLeft onClick = { goSessions } />
                </div>
                <div className="chat-messages">
                        {
                            channelMessages?.docs.map(doc => {
                                const { message, user, userImage, timestamp } = doc.data();
                                    return(
                                            <Message
                                                key = { doc.id }
                                                message = { message }
                                                user = { user }
                                                userImage = { userImage }
                                                timestamp = { timestamp }
                                            />
                                    )
                            })
                        }    
                </div>
                <div className="chatting-ref">

                </div>
                <ChatInput
                    channelName = { channelDetails?.data().name }
                    channelId = { channelId }
                />

            </div>                  
        </div>
     );
}
 
export default Chat;