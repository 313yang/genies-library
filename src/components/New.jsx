import { useEffect, useState } from "react";
import { MainTitle } from "../styles/components/MainTitle";
import { BookList, Booksection } from "../styles/components/BookContent";
import Books from "./Books";
import { bookSearch } from "../api";

export default function BooksNew() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "도서",
      sort: "latest",
      size: "8",
      target: "title",
    };

    const {
      data: { documents },
    } = await bookSearch(params);
    setBooks(documents);
  };
  return (
    <Booksection>
      <MainTitle>
        <h2>새로나온 신간</h2>
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
    </Booksection>
  );
}
