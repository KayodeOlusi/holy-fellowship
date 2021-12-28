import Chat from "./Chat";
import SessionsSidebar from "./SessionsSidebar";


const Sessions = () => {
    return ( 
        <div className="sessions">
            <SessionsSidebar />
            <Chat />
        </div>
     );
}
 
export default Sessions;