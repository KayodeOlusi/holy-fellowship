const SessionSidebarOptions = ({ Icon, title }) => {
    return ( 
        <div className="sessions-sidebar-options text-center">
            { Icon && <Icon /> }
        </div>
     );
}
 
export default SessionSidebarOptions;