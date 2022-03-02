import { selectModalState, showModal } from "../../features/channelSlice";
import { useSelector } from "react-redux";
import Modal from "./Modal";
import { useDispatch } from "react-redux";

const SessionSidebarOptions = ({ Icon }) => {
    const modalState = useSelector(selectModalState);
    const dispatch = useDispatch();

    const showTheModal = () => {
        dispatch(showModal({ themodal: true }))
    }

    return (
        <>
            { modalState && <Modal /> }
            <div className="sessions-sidebar-options text-center" onClick = { showTheModal }>
                { Icon && <Icon /> }
            </div>
        </> 
     );
}
 
export default SessionSidebarOptions;