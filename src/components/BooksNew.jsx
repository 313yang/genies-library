import axios from "axios";
import { useEffect, useState } from "react";
import { MainTitle } from "../styles/components/MainTitle";
import { BookList } from "../styles/components/BookContent";
import Books from "./Books";

export default function BooksNew() {
  const [items, setBooks] = useState([]);
  const ID_KEY = "8CqdlZYoXcBYV879UOcE";
  const SECRET_KEY = "GtRTsDyGoa";
  useEffect(() => {
    const getBooks = async () => {
      const {
        data: { items },
      } = await axios.get("/v1/search/book.json", {
        params: { query: "신간", display: 6, sort: "date" },
        headers: {
          "X-Naver-Client-Id": ID_KEY,
          "X-Naver-Client-Secret": SECRET_KEY,
        },
      });
      setBooks(items);
    };
    getBooks();
  }, []);
  return (
    <>
      <MainTitle>
        <h2>새로나온 신간</h2>
        <i className="fas fa-chevron-right"></i>
      </MainTitle>
      <BookList>
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
      </BookList>
    </>
  );
}
