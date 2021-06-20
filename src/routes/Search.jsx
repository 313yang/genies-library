import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import styled from "styled-components";
import { author, flexCenter } from "../styles/variables";

import { bookSearch } from "../api";

function Search() {
  const [value, setValue] = useState("");
  const [books, setBooks] = useState([]);
  const [isFound, setFound] = useState(false);
  const search = value;

  const getBooks = async () => {
    try {
      if (search === "") {
        setBooks([]);
        setFound(false);
      } else {
        const params = {
          query: search,
          sort: "",
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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks();
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <SearchForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={handleChange}
          />
        </SearchForm>
        {!isFound ? (
          <NotFound>Not Found.</NotFound>
        ) : (
          <SearchList>
            {books.map((book, index) => (
              <SearchBooks>
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
  button {
    border: none;
    background-color: #e9e9e9;
    border: 1px solid #d6d6d6;
    cursor: pointer;
    padding: 10px 12px;
    border-radius: 3px;
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
