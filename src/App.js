import React, { useState } from "react";
import "./App.css";

var emojiDictionary = {
  "ð": "Grinning Face",
  "ð": "Beaming Face with Smiling Eyes",
  "ð": "Grinning Face with Sweat",
  "ð¤£": "Rolling on the Floor Laughing",
  "ð": "Face with Tears of Joy",
  "ð": "Winking Face",
  "ð": "Smiling Face with Halo",
  "ð¤©": "Star-Struck",
  "ð": "Face with Tongue",
  "ðª": "Sleepy Face",
  "ð³": "Flushed Face",
  "ð¥±": "Yawning Face",
  "ð«": "Tired Face",
};

var emojisWeKnow = Object.keys(emojiDictionary);

const App = () => {
  const [meaning, setMeaning] = useState("");

  function inputClickHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning !== undefined) {
      setMeaning(meaning);
    } else if (meaning === "") {
      setMeaning("Enter Emoji");
    } else {
      setMeaning("We don't have this emoji in our database.");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div className="navbar">
        <h1>ðEmoji Interpreter</h1>
      </div>
      <div className="input">
        <input
          className="inputText"
          onChange={inputClickHandler}
          placeholder="Enter emoji"
        />
        <h2>Meaning: {meaning}</h2>
        <h3>Emojis We Know</h3>
      </div>
      <div className="emojis">
        {emojisWeKnow.map((emoji) => {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
      <footer>
        <h4>Emoji Interpreter: Enter emoji to get the meaning of it.</h4>
      </footer>
    </div>
  );
};

export default App;
