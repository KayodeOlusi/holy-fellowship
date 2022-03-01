import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectBook, selectChapter } from "../../features/bibleSlice";

const Details = () => {
    const theBook = useSelector(selectBook);
    const theChapter = useSelector(selectChapter);
    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/passages/${theBook}.${theChapter}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "api-key": "398de9409e93c548e14b1b1337871a94"
            }
        })
        .then(res => {
            return res.json();
        })
        .then(result => {
            setResult(result.data);
            console.log(result.data);
        })
        .catch(e => console.log(e)); 
    },[theBook, theChapter])

    return ( 
        <div className = "detail text-center">
            <h3>{ result?.reference }</h3>
            <p>{ result?.content }</p>
        </div>
     );
}
 
export default Details;