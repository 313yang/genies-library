import { useCallback, useEffect, useState } from "react";
import { bookSearch } from "../api";
import { MainTitle } from "../styles/components/MainTitle";
import { Booksection, GenresBookList } from "../styles/components/BookContent";
import { GenresBook } from "./Books";
import { GenresBtns } from "../styles/components/GenresBtns";
import "./classStyle.css";

export default function Genres() {
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState("주식");

  const getBooks = useCallback(
    async (e) => {
      let params = {
        query: genres,
        size: "6",
      };
      if (genres === "장르") {
        params = { query: "장르", sort: "latest", size: "6" };
      }
      const {
        data: { documents },
      } = await bookSearch(params);
      setBooks(documents);
    },
    [genres]
  );
  const handleGenres = (e) => {
    const {
      target: { id },
    } = e;
    const btns = document.querySelectorAll("button");
    btns.forEach((btn) => {
      btn.classList.remove("clickedBtn");
    });

    setGenres(id);
    getBooks();
    e.target.classList.add("clickedBtn");
  };
  useEffect(() => {
    getBooks();
  }, [genres, getBooks]);

  return (
    <Booksection>
      <MainTitle>
        <h2>장르별 추천 책</h2>
        <i className="fas fa-chevron-right"></i>
      </MainTitle>
      <GenresBtns>
        <button id="주식" className="clickedBtn" onClick={handleGenres}>
          트렌드
        </button>
        <button id="인생" onClick={handleGenres}>
          자기계발
        </button>
        <button id="에세이" onClick={handleGenres}>
          에세이
        </button>
        <button id="장르" onClick={handleGenres}>
          라이프
        </button>
        <button id="소설" onClick={handleGenres}>
          소설
        </button>
      </GenresBtns>
      <GenresBookList>
        {books.map((book, index) => (
          <GenresBook
            key={index}
            author={book.authors}
            description={book.contents}
            title={book.title}
            image={book.thumbnail}
          />
        ))}
      </GenresBookList>
    </Booksection>
  );
}
