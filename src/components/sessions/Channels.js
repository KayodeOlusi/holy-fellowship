import { Home, Search } from "@mui/icons-material";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import ChannelsName from "./ChannelsName";

const Channel = () => {
    const q = query(collection(db, "rooms"));
    const [ channels ] = useCollection(q);
    console.log(channels)

    return ( 
        <div className = "channels">
            <div className="channels-header mb-3">
                <h3>Channels</h3>
                <Home />
                <Search />
            </div>
            <div className="channels-content mt-2">
                <h6>All</h6>
                <hr />
            </div>
            <div className="channels-name mt-3">
                <div className="channels-name-content">
                    { 
                        channels?.docs.map(doc => (
                             <ChannelsName id = { doc.id } key = { doc.id } title = { doc.data().name } />
                        ))
                    }                    
                </div>
            </div>
        </div>
     );
}
 
export default Channel;