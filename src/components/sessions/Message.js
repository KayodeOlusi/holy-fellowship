import { Avatar } from "@mui/material";
import moment from "moment";

const Message = ({ user, userImage, timestamp, message }) => {
  return (
    <div className="message">
      <Avatar src={userImage} className="message-sender" />

      <div className="message-info">
        <h5>
          {user}{" "}
          <span className="message-time">
            {moment(timestamp?.toDate()).calendar()}
          </span>
        </h5>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
