import SelectBible from "./SelectBible";
import ReadBible from "./ReadBible";

const Bible = () => {
    return ( 
        <div className="bible">
            <SelectBible />
            <ReadBible />
        </div>
     );
}
 
export default Bible;