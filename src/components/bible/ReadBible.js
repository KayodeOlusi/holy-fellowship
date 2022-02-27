import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openModal, selectOpen } from "../../features/bibleSlice";
import Modal from "./Modal";

const ReadBilbe = () => {
    const modalState = useSelector(selectOpen)
    const dispatch = useDispatch();

    const showTheModal = (e) => {
        e.preventDefault();
        dispatch(openModal({
            open: true
        }));
    };

    return ( 
        <>
            { modalState && <Modal /> }
            <div className="read-bible container">
                <div className="select-book container">
                    <input
                        type = "text"
                        name = "bible"
                        id = "bible"
                        placeholder = "Select a bible passage"
                        onClick = { showTheModal }
                    />
                    <input
                        type = "text"
                        name = "bible"
                        id = "bible"
                        placeholder = "Select a version"
                    />
                </div>
            </div>
        </>
     );
}
 
export default ReadBilbe;