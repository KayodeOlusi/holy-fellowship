import { Avatar } from "@mui/material";
import moment from "moment";
import { forwardRef } from "react";

const Message = forwardRef(({ user, userImage, timestamp, message }, ref) => {
    return ( 
        <div className="message">
            <Avatar src = { userImage } className = "message-sender" />

            <div className="message-info">
                <h5>
                    { user }{" "}
                    <span className = "message-time">
                        { moment(timestamp?.toDate()).calender() }
                    </span>
                </h5>
                <p>{ message }</p>
            </div>
        </div>
     );
})
 
export default Message;