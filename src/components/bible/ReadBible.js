import { useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { holdChapterLength, keepBook, keepChapter } from "../../features/bibleSlice";

const ReadBilbe = () => {
    const dispatch = useDispatch();
    const [book, setBook] = useState("");
    const [bookChapter, setBookChapter] = useState("");
    const [chapterLength, setChapterLength] = useState(null);

    const [books, setBooks] = useState([]);
    const [chapter, setChapter] = useState([]);

    const holdBook = (e) => {
        setBook(e.target.value);
        fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/books/${e.target.value}/chapters`, {
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
            setChapterLength(result.data.length - 1);
            setChapter(result.data);
        })
        .catch(e => console.log(e));
    }

    const holdChapter = (e) => {
        setBookChapter(Number(e.target.value));
    }

    const proceed = () => {
        dispatch(keepBook({ book }));
        dispatch(keepChapter({ chapter: bookChapter }));
        dispatch(holdChapterLength({ chapterLength }));  
    }



    useEffect(() => {
        fetch("https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/books", {
            method: "GET",
            headers: {
                "accept": "application/json",
                "api-key": "398de9409e93c548e14b1b1337871a94"
            }
        })
        .then((res) => {
            return res.json();
        })
        .then(result => {
            setBooks(result.data);
        })
        .catch(e => console.log(e))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
            <div className="read-bible container">
                <div className="select-book container">
                    <div className = "details">
                        <FormControl required sx = {{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-required-label">Books</InputLabel>
                                <Select
                                    labelId = "demo-simple-select-required-label"
                                    id = "demo-simple-select-required"
                                    className = "form"
                                    value = { book }
                                    label = "Books *"
                                    onChange = {(e) => holdBook(e)}
                                >
                                    {
                                        books?.map(book => {
                                            return (
                                                <MenuItem value = { book.id } id = { book.id } key = { book.id }>{ book.name }</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                        </FormControl>

                        <FormControl required sx = {{ m: 1, minWidth: 120 }} className = "form">
                            <InputLabel id="demo-simple-select-required-label">Chapter</InputLabel>
                                <Select
                                    labelId = "demo-simple-select-required-label"
                                    id = "demo-simple-select-required"
                                    value = { bookChapter }
                                    label = "Chapter *"
                                    onChange = {(e) => holdChapter(e)}
                                >
                                    {
                                        chapter?.map(chapt => {
                                            return (
                                                <MenuItem value = { chapt.number } id = { chapt.id } key = { chapt.id }>{ chapt.number }</MenuItem>
                                            )
                                        })
                                    }
                                    {/** Work on chapters next */}
                                </Select>
                        </FormControl> 
                    </div>
                    
                    <div>
                        <Button className = "proceed" onClick = { proceed }>Read</Button>
                    </div>
                </div>
            </div>
     );
}
 
export default ReadBilbe;