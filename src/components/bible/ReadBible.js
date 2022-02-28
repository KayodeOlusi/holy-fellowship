import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const ReadBilbe = () => {

    const [books, setBooks] = useState([]);
    const [chapter, setChapter] = useState([]);

    const [book, setBook] = useState("");
    const [bookId, setBookId] = useState("");

    // const storeBook = () => {
    //     fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books/${bookId}/chapters`, {
    //         method: "GET",
    //         headers: {
    //             "accept": "application/json",
    //             "api-key": "398de9409e93c548e14b1b1337871a94"
    //         }
    //     })
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setChapter(data.data)
    //     })
    //     .catch(e => console.log(e));
    // }
    // Work on state of book .....

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
        .then(data => {
            setBooks(data.data);
        })
        .catch(e => console.log(e))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <>
            <div className="read-bible container">
                <div className="select-book container">
                    <div className = "details">
                        <FormControl required sx = {{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-required-label">Books</InputLabel>
                                <Select
                                    labelId = "demo-simple-select-required-label"
                                    id = "demo-simple-select-required"
                                    value = { book }
                                    label = "Books *"
                                    onChange = {(e) => setBook(e.target.value)}
                                >
                                    {
                                        books?.map(book => {
                                            return (
                                                <MenuItem value = { book.name } key = { book.id }>{ book.name }</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                        </FormControl>

                        <FormControl required sx = {{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-required-label">Chapter</InputLabel>
                                <Select
                                    labelId = "demo-simple-select-required-label"
                                    id = "demo-simple-select-required"
                                    value = { bookId }
                                    label = "Chapter *"
                                    onChange = {(e) => setBookId(e.target.value)}
                                >
                                    {
                                        chapter?.map(chapt => {
                                            return (
                                                <MenuItem key = { chapt.id }>{ chapt.number }</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                        </FormControl>  
                    </div>
                    
                    <div>
                        <FormControl required sx = {{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-required-label">Books</InputLabel>
                                <Select
                                    labelId = "demo-simple-select-required-label"
                                    id = "demo-simple-select-required"
                                    value = "10"
                                    label = "Books *"
                        
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ReadBilbe;