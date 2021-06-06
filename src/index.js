import React, { Children } from "react";
import ReactDom from "react-dom";
import { data } from "./books"; // named export/import
import SpecificBook from "./Book"; // default export/import : can be renamed as SpecificBook for example
import { greeting } from "./testing/testing";
//CSS
import "./index.css";

/*
const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);*/

function BookList() {
  //console.log(greeting);
  return (
    <section className="bookList">
      {data.map((book) => {
        const { img, title, author = book } = book;
        return (
          <SpecificBook key={book.id} /*book={book}*/ {...book}></SpecificBook>
        );
      })}
    </section>
  );
  // return <section className="bookList">{newNames}</section>;
}

ReactDom.render(<BookList />, document.getElementById("root"));
