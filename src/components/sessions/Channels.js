import { Search } from "@mui/icons-material";

const Channel = () => {
    return ( 
        <div className = "channels">
            <div className="channels-header mb-3">
                <h3>Channels</h3>
                <Search />
            </div>
            <div className="channels-content mt-2">
                <h6>All</h6>
                <hr />
            </div>
            <div className="channels-name mt-3">
                <div className="channels-name-content">
                    <h6># faith</h6>                    
                </div>
                <div className="channels-name-content">
                    <h6># hope</h6>                    
                </div>
                <div className="channels-name-content">
                    <h6># tuesday service</h6>                    
                </div>
            </div>
        </div>
     );
}
 
export default Channel;