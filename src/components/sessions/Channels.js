import { Home } from "@mui/icons-material";
import ChannelsName from "./ChannelsName";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query } from "firebase/firestore";
import { useNavigate } from "react-router";
import { Skeleton } from "@mui/material";

const Channel = () => {
  const q = query(collection(db, "channels"));
  const [channels, loading] = useCollection(q);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="channels">
      <div className="channels-header mb-3">
        <h3>Channels</h3>
        <Home onClick={goHome} />
      </div>
      <div className="channels-content mt-2">
        <h6>All</h6>
        <hr />
      </div>
      <div className="channels-name mt-3">
        <div className="channels-name-content">
          {loading ? (
            <div>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </div>
          ) : (
            ""
          )}
          {channels?.docs.map((doc) => {
            return (
              <ChannelsName
                className="channels-content-name"
                title={doc.data().name}
                key={doc.id}
                id={doc.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Channel;
