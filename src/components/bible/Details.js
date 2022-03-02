import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { decrementChapter, incrementChapter, selectBook, selectChapter, selectChapterLength } from "../../features/bibleSlice";

const Details = () => {
    const dispatch = useDispatch();
    const theBook = useSelector(selectBook);
    const theChapter = useSelector(selectChapter);
    const theChapterLength = useSelector(selectChapterLength)
    const [result, setResult] = useState(null);
    const [edit, setEdit] = useState(null);

    const increment = () => {
        dispatch(incrementChapter({ theChapter }));
        console.log(theChapter)
        window.scrollTo(0, 0);
    }

    const decrement = () => {
        dispatch(decrementChapter({ theChapter }));
        console.log(theChapter)
        window.scrollTo(0, 0);
    }

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
            setEdit(result?.data.content.split("."));
        })
        .catch(e => console.log(e)); 
    },[theBook, theChapter])

    return ( 
        <div className = "detail text-center">
            <h3>{ result?.reference }</h3>
            <div className = "text">
                { 
                    edit?.map((edited, index) => (
                        <p key = { index }>
                            { edited }
                        </p>
                    ))
                }
                {
                    edit !== null ? 
                        <div className = "bottom">
                            <h6>King James Version(KJV)</h6>

                            <div className = "btns">
                                <Button className = "thebutton" disabled = { (theChapter) === 1 ? true : false } onClick = { decrement }>
                                    <NavigateBeforeIcon />
                                </Button>
                                <Button className = "thebutton" disabled = { (theChapter) === theChapterLength ? true : false } onClick = { increment }>
                                    <NavigateNextIcon />
                                </Button>
                            </div>
                        </div>
                        : ""
                }
            </div>
        </div>
     );
}
 
export default Details;