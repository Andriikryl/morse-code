import { useEffect, useState } from "react";
import "./morse.css";
import words from "../data/words";
import { englishToMorse } from "../data/morse-dictionary";

export default function Morse() {
  const [name, setName] = useState("");
  const [currentLettersInPlay, setCurrentLettersInPlay] = useState("");
  const [currentWords, setCurrentWords] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [hasMistake, setHasMistake] = useState(false);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  function addDot() {
    setName((prevName) => prevName + ".");
  }
  function addDesh() {
    setName((prevName) => prevName + "-");
  }

  const currentLetter = words[currentWords][currentWordIndex];
  const correctMorseCode = englishToMorse[currentLetter];

  useEffect(() => {
    console.log(currentLetter);
    console.log(correctMorseCode);
    if (correctMorseCode === name) {
      console.log("corect");
    } else {
      console.log("vrong");
    }
  });

  function checkMorseCode() {
    // const currentLetter = words[currentWords][currentWordIndex];
    // const correctMorseCode = englishToMorse[currentLetter];
    // if (name === correctMorseCode) {
    //   setHasMistake(false);
    //   setConsecutiveCorrect((prev) => prev + 1);
    //   setIsCorrect(true);
    // }
  }

  return (
    <section>
      <div className="word__box">
        <p className="word">
          {words[currentWords].split("").map((letter, index) => {
            return (
              <span className="letter" key={index}>
                {letter}
              </span>
            );
          })}
        </p>
      </div>
      <div className="form__box">
        <p>
          <strong>Current morse code:</strong>
          {name || "(empty)"}
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <label htmlFor="name-field">Name:</label>
          <input
            id="name-field"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              checkMorseCode();
            }}
          />
        </form>
        <div className="button__group">
          <button onClick={addDot} className="button">
            <div className="dot"></div>
          </button>
          <button onClick={addDesh} className="button">
            <div className="dash"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
