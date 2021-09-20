import React, { useState } from "react";
import "./App.css";

var emojiDictionary = {
  "😀": "Grinning Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "😉": "Winking Face",
  "😇": "Smiling Face with Halo",
  "🤩": "Star-Struck",
  "😛": "Face with Tongue",
  "😪": "Sleepy Face",
  "😳": "Flushed Face",
  "🥱": "Yawning Face",
  "😫": "Tired Face",
};

var emojisWeKnow = Object.keys(emojiDictionary);

const App = () => {
  const [meaning, setMeaning] = useState("");

  function inputClickHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      return "We don't have this emoji in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div className="navbar">
        <h1>😀Emoji Interpreter</h1>
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
