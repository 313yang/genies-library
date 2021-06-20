import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { BookList } from "../styles/components/BookContent";
import Books from "../components/Books";

import { bookSearch } from "../api";

function Search(value) {
  const {
    location: { state },
  } = value;
  console.log(value);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    let params = {
      query: state,
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
      <GlobalStyle />
      <Header />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default Search;
