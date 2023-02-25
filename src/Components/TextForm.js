import React, { useState } from "react";

export default function TextForm(props) {
  //funtion for uppercase text
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase text", "success");
  };

  //funtion for lowercase text
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowecase text", "success");
  };

  // funtion for  clear the text
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("text cleared", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  // function for counting  vowels
  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount(countChar);
      }
    }
    console.log("No. of Vowels present in this text are: " + countChar);
  };

  //function for counting consonants
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
    console.log("no of consonants present in this text are: " + countCons);
  };

  const handleReverseClick = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);
    props.showAlert("Removed extra spaces", "success");
  };

  const handleCapClick = () => {
    let newText = () => {
      let finalStrArr = [];
      let strArr = text.split(" ");
      strArr.forEach((element) => {
        finalStrArr.push(element.charAt(0).toUpperCase() + element.slice(1));
      });
      let finalStr = finalStrArr.join(" ");
      return finalStr;
    };
    setText(newText);
  };

  function handleDuplicates() {
    let wordArr = text.split(" ");
    let newText = wordArr.filter((item, pos) => {
      return wordArr.indexOf(item) === pos;
    });
    newText = newText.join(" ");
    setText(newText);
  }

  //   const [text, setText] = useState("");
  // text = "new text"                --> wrong way to change the state
  // setText("new text");             -->correct way to change the state

  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countChar = 0,
    countCons = 0;

  

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="5"
          />
          
          
        </div>
        <button className="btn btn-sm btn-danger mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button
          className="btn btn-sm btn-success mx-1"
          onClick={handleLowClick}
        >
          Convert to lowercase
        </button>
        <button className="btn btn-sm btn-danger mx-1" onClick={handleClrClick}>
          clear text
        </button>
        <button
          className="btn btn-sm btn-secondary mx-1"
          onClick={handleVoClick}
        >
          count vowels
        </button>
        <button className="btn btn-sm btn-success mx-1" onClick={handleCoClick}>
          count consonants
        </button>

        <button
          className="btn btn-sm btn-danger mx-1"
          onClick={handleReverseClick}
        >
          Reverse Text
        </button>
        <button
          className="btn  btn-sm btn-danger mx-1"
          onClick={handleSpeakClick}
        >
          speak
        </button>
        <button
          className="btn btn-sm btn-danger mx-1"
          onClick={handleExtraSpaces}
        >
          remove extra space
        </button>
        <button className="btn btn-sm btn-danger mx-1" onClick={handleCapClick}>
          Capitalize
        </button>
        <button
          className="btn btn-sm btn-danger mx-1 my-1"
          onClick={handleDuplicates}
        >
          remove dublicate
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words {text.length} letters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview your text here</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
        <h3>You have entered:</h3>
        <p>{count} No. of Vowels</p>
        <p>{count1} No. of Consonants</p>
      </div>
    </>
  );
}
