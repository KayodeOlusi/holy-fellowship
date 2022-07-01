import ReadBible from "./ReadBible";
import BibleNav from "./BibleNav";
import Details from "./Details";

const Bible = () => {
  return (
    <div className="bible">
      <BibleNav />
      <ReadBible />
      <Details />
    </div>
  );
};

export default Bible;
