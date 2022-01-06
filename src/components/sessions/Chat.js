import { StarBorderOutlined } from "@mui/icons-material";
import { collection, doc, orderBy, query } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useSelector } from 'react-redux';
import { selectChannel } from "../../features/channelSlice";
import { db } from "../../firebase";
import ChatInput from "./ChatInput";
import Message from "./Message";
import FlipMove from "react-flip-move";

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
                    { 
                        channelDetails ? 
                            <>
                                <div className = "upper-info">
                                    <h6 style = {{ fontWeight: "900", fontSize: "14px", padding: "5px"}}>
                                        { channelDetails?.data().name }
                                    </h6>
                                    <StarBorderOutlined />
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
                                    <ChatInput channelName = { channelDetails?.data().name } channelId = { channelId } />
                                </div>  
                            </> :
                            <>
                                <h6 style = {{ fontWeight: "900", fontSize: "14px", padding: "5px" }}>Pick a channel</h6>    
                            </>
                    }                
                </div>
            </div>
        </div>
     );
}
 
export default Chat;