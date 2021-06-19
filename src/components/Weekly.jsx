import { useEffect, useState } from "react";
import { MainTitle } from "../styles/components/MainTitle";
import { BookList, Booksection } from "../styles/components/BookContent";
import Books from "./Books";
import { bookSearch } from "../api";

export function BooksWeekly1() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "영어 ",
      size: "8",
    };

    const {
      data: { documents },
    } = await bookSearch(params);
    setBooks(documents);
  };
  return (
    <Booksection>
      <MainTitle>
        <h2>출퇴근길, 영어 공부하기!</h2>
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
export function BooksWeekly2() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const params = {
      query: "정여울 ",
      size: "8",
    };

    const {
      data: { documents },
    } = await bookSearch(params);
    setBooks(documents);
  };
  return (
    <Booksection>
      <MainTitle>
        <h2>다정한 위로를 건네는 작가, 정여울</h2>
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
