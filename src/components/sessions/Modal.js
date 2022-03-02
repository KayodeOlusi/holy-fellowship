import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectModalState, showModal } from "../../features/channelSlice";
import { db } from "../../firebase";

const Modal = () => {
    const modalState = useSelector(selectModalState);
    const ref = useRef();
    const dispatch = useDispatch();
    const [channel, setChannel] = useState("");

    const addChannel = () => {
        if(channel) {
            addDoc(collection(db, "channels"), {
                name: channel
            });
            dispatch(showModal({ themodal: false }));
        } else {
            return false;
        };
    };

    useEffect(() => {
        const checkClicked = (e) => {
            if(modalState && ref.current && !ref.current.contains(e.target)) {
                dispatch(showModal({
                    themodal: false
                }));
            }
        }
        document.addEventListener("click", checkClicked);
        return () => {
            document.removeEventListener("click", checkClicked);  
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div className="the-modal">
           <div className = "modal-container" ref = { ref }>
                <div className = "header">
                    <p>Please enter a channel name</p>
                </div>
                <div className="contents mt-3">
                  <form onClick = { addChannel }>
                      <input type="text" value = { channel } onChange={(e) => setChannel(e.target.value)} placeholder = "Channel Name" />
                      <Button className="btn modal-button text-center" type = "submit">
                        Create
                      </Button>
                  </form>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;