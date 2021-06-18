import { useEffect, useState } from "react";
import { MainTitle } from "../styles/components/MainTitle";
import { BookList } from "../styles/components/BookContent";
import Books from "./Books";
import { bookSearch } from "../api";

export default function BooksBestseller() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "은행나무",
      sort: "",
      size: "8",
      target: "",
    };

    const {
      data: { documents },
    } = await bookSearch(params);
    setBooks(documents);
  };
  return (
    <>
      <MainTitle>
        <h2>베스트셀러</h2>
        <i className="fas fa-chevron-right"></i>
      </MainTitle>
      <BookList>
        {books.map((book, index) => (
          <Books
            key={index}
            author={book.authors}
            description={book.contents}
            title={book.title}
            image={book.thumbnail}
          />
        ))}
      </BookList>
    </>
  );
}
