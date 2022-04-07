
import "./App.css";
import React, { useEffect, useState } from "react";
import BookItem from "./components/BookItem";
import Form from "./components/Form";

function App() {
  //This is my API service area
  const [books, setBooks] = useState([]);

  // const [badBooks, setBadBooks] = useState([]);
  // const [goodBooks, setGoodBooks] = useState([]);
  // const [uglyBooks, setUglyBooks] = useState([]);

  const baseURL = "http://localhost:4000";

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(baseURL + "/tasks");
      const data = await result.json();
      console.log(data);
      setBooks(data);
    }
    fetchData();
    console.log("use eff");
  }, []);

  //Main HTML structure
  return (
    <>
      <div className="maincontainer">
        <div className="booklist">
          <Form setBooks={setBooks} />
          <h2>Booklist</h2>
          <div className="container">
            {books.map((book) => {
              return <BookItem book={book} key={book.id} />;
            })}
          {/* </div>
          <div className="container">
            {books.map((book) => {
              return <BookItem book={book} key={book.id} />;
            })}
          </div>
          <div className="container">
            {books.map((book) => {
              return <BookItem book={book} key={book.id} />;
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
