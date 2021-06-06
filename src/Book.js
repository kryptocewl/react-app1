import React from "react";

const Book = (props) => {
  //console.log(props);

  const { img, title, author } = props; /* props.book*/
  /*
  ALSO you can use 2 other ways to access props:
   1) const {img,title,author} = props
     <img src={img} alt="My Hero Academia nº 01 (Manga Shonen) " />
      <h1>{title}</h1>
      <h4>{author}</h4>
  /*
  2)
    const Book = (img,title,author)=>{} 
      <img src={img} alt="My Hero Academia nº 01 (Manga Shonen) " />
      <h1>{title}</h1>
      <h4>{author}</h4>

   3)
     <img src={props.img} alt="My Hero Academia nº 01 (Manga Shonen) " />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>

    
*/
  //attirbute , eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e.target);
    alert("hello world");
  };
  const complexExample = (author) => {
    console.log({ author });
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log({ title })}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};
export default Book;
