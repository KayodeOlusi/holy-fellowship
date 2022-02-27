import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openModal, selectOpen } from "../../features/bibleSlice";
import Book from "./Book";
import Chapter from "./Chapter";

const Modal = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const modalState = useSelector(selectOpen);

    useEffect(() => {
        const checkClicked = (e) => {
            if (modalState && ref.current && !ref.current.contains(e.target)) {
                dispatch(openModal({
                    open: false
                }));
            };
        };
        document.addEventListener("click", checkClicked);

        return () => {
            document.removeEventListener("click", checkClicked)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState])

    return ( 
        <div className="the-modal">
            <div className = "modal-container" ref = { ref }>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <Book />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <Chapter />  
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;