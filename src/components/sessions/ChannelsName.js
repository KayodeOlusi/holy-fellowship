import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enterChannel } from "../../features/channelSlice";

const ChannelsName = ({ title, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectChannel = () => {
    dispatch(
      enterChannel({
        channelId: id,
      })
    );
    navigate("/chat");
  };

  return (
    <div className="channels-content-name" onClick={selectChannel}>
      <h6> # {title}</h6>
    </div>
  );
};

export default ChannelsName;
