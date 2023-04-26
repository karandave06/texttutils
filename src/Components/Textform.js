import React, { useState } from "react";

export default function Textform(props) {

  const myfun = () => {
 

   let upper = text.toUpperCase();
   settext(upper);
    // props.setalert('converted into the uppercase');
  };

  const change = (e) => {
    console.log("change is avtivate");
    settext(e.target.value);
  };

 const lower = () =>{
  let low = text.toLowerCase();
  settext(low)
 }

  const clear = ()=>{
      
let cleartext = " ";
settext(cleartext)
  }

  const [text, settext] = useState("hello i am karan dave");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            onChange={change}
            id="myBox"
            value={text}
            style={{backgroundColor :props.mode ==='dark' ? '#0d1843': 'white' ,color: props.mode ==='dark' ? 'white': 'black' }}
          ></textarea>
          <label htmlFor="myBox"></label>
        </div>

        <button className="btn btn-primary my-2" onClick={myfun}>
          Convert to UPPERCASE
        </button>

        <button className="btn btn-primary my-2 mx-4" onClick={lower}>
          Convert to lowercase
        </button>

        <button className="btn btn-primary my-2 mx-4" onClick={clear}>
          clear text
        </button>
      </div>

      <div className="container">
        <h2>Your text stmmeary</h2>

        <div className="box">
        <p>
        in you text hear is {text.split(" ").length} words and {text.length} characters

        </p>

        <p>{0.008 * text.split("").length} minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0 ?text:"Enter something to preview"}</p>
        </div>
      </div>
    </>
  );
}
