import { collection, doc, orderBy, query } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from 'react-redux';
import { selectChannel } from "../../features/channelSlice";
import { db } from "../../firebase";
import ChatInput from "./ChatInput";
import Message from "./Message";
import FlipMove from "react-flip-move";
import Preview from "./Preview";
import { ArrowCircleLeft } from "@mui/icons-material";

const Chat = () => {
    const channelId = useSelector(selectChannel);
    const [channelDetails] = useDocument(channelId && doc(db, "channels", channelId));
    const [channelMessages] = useCollection(channelId && 
    query(collection(doc(db, "channels", channelId), "messages"), orderBy("timestamp", "asc")));
    
    return ( 
        <div className = "chat d-flex">
            <div className = "chat-preview">
                <Preview />
            </div>
            <div className = "chat-inner">
                <div className = "chat-header">
                    <h6>Channel</h6>
                    <ArrowCircleLeft />
                </div>
                <div className="chat-messages">
                        {
                            channelMessages?.docs.map(doc => {
                                const { message, user, userImage, timestamp } = doc.data();
                                    return(
                                        <FlipMove>
                                            <Message
                                                key = { doc.id }
                                                message = { message }
                                                user = { user }
                                                userImage = { userImage }
                                                timestamp = { timestamp }
                                            />
                                        </FlipMove>
                                    )
                            })
                        }    
                </div>
                <div className = "chat-input">
                        <ChatInput
                            channelName = { channelDetails?.data().name }
                            channelId = { channelId }
                        />
                </div>
            </div>                  
        </div>
     );
}
 
export default Chat;