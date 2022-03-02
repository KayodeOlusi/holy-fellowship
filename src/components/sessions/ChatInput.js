import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { doc, addDoc, collection, serverTimestamp } from '@firebase/firestore'
import { SendRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

const ChatInput = ({ channelName, channelId }) => {
    const [input, setInput] = useState("");
    const [user] = useAuthState(auth);

    const addMessage = (e) => {
        e.preventDefault();

        if(!channelId) { 
            return false;
        };
        addDoc(collection(doc(db, "channels", channelId), "messages"), {
            message: input,
            timestamp: serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL
        });
        setInput("");
        window.scrollTo(100, 100);
    };

    return ( 
        <div className = "chat-input">
            <form>
                <input
                    type = "text"
                    value = { input }
                    onChange = {(e) => setInput(e.target.value) }
                    placeholder = {` Message # ${ channelName ? channelName : "channel" } `}
                 />
                 <Button onClick = { addMessage } type = "submit" style = {{ fontSize: "10px" }} className = "form-button">
                     <SendRounded />
                 </Button>
            </form>
        </div>
     );
}
 
export default ChatInput;