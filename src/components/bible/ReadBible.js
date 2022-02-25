const ReadBilbe = () => {
    return ( 
        <div className="read-bible">
            <div className="select-book">
                <input
                    type = "text"
                    name = "bible"
                    id = "bible"
                    placeholder = "Select a bible passage"
                />
                { /* Create a modal to show the bible name and chapters */ }
            </div>
        </div>
     );
}
 
export default ReadBilbe;