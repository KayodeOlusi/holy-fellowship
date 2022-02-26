import ReadBible from "./ReadBible";
import BibleNav from "./BibleNav";

const Bible = () => {
    return ( 
        <div className="bible">
            <BibleNav />
            <ReadBible />
        </div>
     );
}
 
export default Bible;