import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { author, flexCenter } from "../styles/variables";

import { bookSearch } from "../api";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willChange = true;
    if (willChange) {
      setValue(value);
    }
  };
  return { value, onChange };
};
function Search() {
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");
  const [isFound, setFound] = useState(false);

  const btns = document.querySelectorAll("button");
  const searching = useInput("");

  const getBooks = useCallback(async () => {
    try {
      if (searching.value === "") {
        setBooks([]);
        setFound(false);
      } else {
        const params = {
          query: searching.value,
          sort,
          page: "1",
          size: "50",
        };
        const {
          data: { documents },
        } = await bookSearch(params);
        setBooks(documents);
        setFound(true);
      }
    } catch (err) {
      console.log(err);
    }
  }, [sort, searching.value]);
  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks();
  };
  const sortLatest = (e) => {
    btns.forEach((btn) => {
      btn.classList.remove("clickedBtn");
    });
    setSort("latest");
    e.target.classList.add("clickedBtn");
    getBooks();
  };
  const sortNon = (e) => {
    btns.forEach((btn) => {
      btn.classList.remove("clickedBtn");
    });
    setSort("");
    e.target.classList.add("clickedBtn");
    getBooks();
  };
  useEffect(() => {
    getBooks();
  }, [getBooks]);
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <SearchForm onSubmit={handleSubmit}>
          <input type="text" placeholder="Search" {...searching} />
        </SearchForm>
        <SearchSortBtns>
          <button className="clickedBtn" onClick={sortNon}>
            정확도순
          </button>
          <button onClick={sortLatest}>신간순</button>
        </SearchSortBtns>
        {!isFound ? (
          <NotFound>Not Found.</NotFound>
        ) : (
          <SearchList>
            {books.map((book, index) => (
              <SearchBooks key={index}>
                <img src={book.thumbnail} alt={book.title} />
                <h1>{book.title}</h1>
                <h3>{book.authors}</h3>
              </SearchBooks>
            ))}
          </SearchList>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Search;
const SearchForm = styled.form`
  ${flexCenter},
  width: 33%;
  margin-top: 50px;
  position: relative;
  input {
    width: 400px;
    border: 1px solid #e1e1e1;
    padding: 10px;
    border-radius: 3px;
    &:focus,
    &:active {
      outline: none;
    }
    &::placeholder {
      font-family: "Lato", sans-serif;
    }
  }
`;
const NotFound = styled.h4`
  ${flexCenter}
  margin:100px;
`;
const SearchList = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const SearchBooks = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  margin: 30px;
  img {
    margin-bottom: 8px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #4646461c;
  }
  h1,
  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  h3 {
    ${author}
    margin-top:5px;
  }
  @media (max-width: 780px) {
    width: 120px;
    margin: 10px;
  }
`;
const SearchSortBtns = styled.div`
  ${flexCenter}
  button {
    margin: 20px 10px 0px;
    background-color: #fff;
    color: #333333;
    border: 1px solid #333333;
    border-radius: 3px;
    padding: 5px 10px;
    cursor: pointer;
    &:focus,
    &:active {
      outline: none;
    }
  }
`;
