import axios from "axios";
import { useEffect, useState } from "react";

export default function Todays() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const ID_KEY = "8CqdlZYoXcBYV879UOcE";
      const SECRET_KEY = "GtRTsDyGoa";
      const items = await axios.get("/v1/search/book.json", {
        params: { query: "e" },
        headers: {
          "X-Naver-Client-Id": ID_KEY,
          "X-Naver-Client-Secret": SECRET_KEY,
        },
      });
      setBooks(items.data);
    };
    getBooks();
  }, []);
  console.log(books);
  const handleChange = (e) => {
    setBooks(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form method="get">
        <input type="text" onChange={handleChange}></input>
        <input type="submit" value="search" onSubmit={handleSubmit}></input>
      </form>
    </div>
  );
}
