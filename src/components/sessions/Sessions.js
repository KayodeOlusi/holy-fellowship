import Preview from "./Preview";
import Summary from "./Summary";

const Sessions = () => {
  return (
    <div className="sessions">
      <div className="sessions-preview">
        <Preview />
      </div>
      <Summary />
    </div>
  );
};

export default Sessions;
