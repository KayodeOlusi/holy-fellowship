import { useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

const ReadBilbe = () => {
    const [book, setBook] = useState("");
    const [bookChapter, setBookChapter] = useState("");

    const [books, setBooks] = useState([]);
    const [chapter, setChapter] = useState([]);

    const storeBook = async (e) => {
        await fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/books/${e}/chapters`, {
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
            setChapter(result.data);
        })
        .catch(e => console.log(e));
        console.log(book, bookChapter)
    }

    const holdDetails = (e) => {
        setBook(e.target.value);
        storeBook(e.target.value);
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
                                    onChange = {(e) => holdDetails(e)}
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

                        <FormControl required sx = {{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-required-label">Chapter</InputLabel>
                                <Select
                                    labelId = "demo-simple-select-required-label"
                                    id = "demo-simple-select-required"
                                    value = { bookChapter }
                                    label = "Chapter *"
                                    onChange = {(e) => setBookChapter(e.target.value)}
                                >
                                    {
                                        chapter?.map(chapt => {
                                            return (
                                                <MenuItem key = { chapt.id }>{ chapt.number }</MenuItem>
                                            )
                                        })
                                    }
                                    {/** Work on chapters next */}
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