import axios from "axios";
import { useEffect, useState } from "react";
import Books from "./Books";

export default function BooksNew() {
  const [items, setBooks] = useState([]);
  const getBooks = async () => {
    const ID_KEY = "8CqdlZYoXcBYV879UOcE";
    const SECRET_KEY = "GtRTsDyGoa";
    const {
      data: { items },
    } = await axios.get("/v1/search/book.json", {
      params: { query: "책", sort: "count" },
      headers: {
        "X-Naver-Client-Id": ID_KEY,
        "X-Naver-Client-Secret": SECRET_KEY,
      },
    });
    //return setBooks(items);
  };

  //useEffect(getBooks);
  return (
    <>
      {items.map((book, index) => (
        <Books
          key={index}
          pubdate={book.pubdate}
          title={book.title}
          description={book.description}
          author={book.author}
          image={book.image}
        />
      ))}
    </>
  );
}
