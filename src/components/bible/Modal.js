import { useEffect, useRef } from "react";

const Modal = () => {
    const ref = useRef();

    useEffect(() => {

    }, [])

    return ( 
        <div className="the-modal">
            <div className = "modal-container" ref = { ref }>
                hi
            </div>
        </div>
     );
}
 
export default Modal;