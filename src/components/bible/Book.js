import { useEffect, useState } from "react";

const Book = () => {
    const [books, setBooks] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

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
            // setIsLoading(true);
        })
        .then(data => {
            // setIsLoading(false);
            setBooks(data.data);
            console.log(books)
        })
        .catch(e => console.log(e))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ( 
        <div className="book">
            <div className="header">
                <h5>Books</h5>
            </div>
            <div className="book-inner">
                {
                    books?.map(book => (
                        <div className="books" key = { book.id }>
                            <h6>{ book.name }</h6>
                        </div>
                    ))
                }
                {/**Fix the overscroll */}
            </div>
        </div>
     );
}
 
export default Book;