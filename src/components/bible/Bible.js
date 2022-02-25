import ReadBible from "./ReadBible";
import Navbar from "../home/Navbar";
import BottomNav from "../home/BottomNav";

const Bible = () => {
    return ( 
        <div className="bible">
            <Navbar />
            <ReadBible />
            <BottomNav />
        </div>
     );
}
 
export default Bible;