import { selectModalState, showModal } from "../../features/channelSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";

const SessionSidebarOptions = ({ Icon }) => {
    const modalState = useSelector(selectModalState);
    const dispatch = useDispatch();

    const showTheModal = () => {
        dispatch(showModal({ themodal: true }));
    }

    return (
        <>
            { modalState && <Modal /> }
            <div className="sessions-sidebar-options text-center">
                { Icon && <Icon onClick = { showTheModal } /> }
            </div>
        </> 
     );
}
 
export default SessionSidebarOptions;