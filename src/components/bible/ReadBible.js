const ReadBilbe = () => {
    return ( 
        <div className="read-bible container">
            <div className="select-book container">
                <input
                    type = "text"
                    name = "bible"
                    id = "bible"
                    placeholder = "Select a bible passage"
                />
                <input
                    type = "text"
                    name = "bible"
                    id = "bible"
                    placeholder = "Select a version"
                />
            </div>
        </div>
     );
}
 
export default ReadBilbe;