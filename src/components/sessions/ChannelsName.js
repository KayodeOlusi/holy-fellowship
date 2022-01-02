import { useDispatch } from "react-redux";
import { enterChannel } from "../../features/channelSlice";

const ChannelsName = ({ title, id }) => {
    const dispatch = useDispatch();

    const selectChannel = () => {
        dispatch(enterChannel({
            channelId : id
        }))
    };

    return ( 
        <div className = "channels-content-name" onClick = { selectChannel } >
            <h6> # { title }</h6>
        </div>
     );
}
 
export default ChannelsName;