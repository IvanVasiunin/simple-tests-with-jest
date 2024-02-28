import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [changeText, setChageText] = useState(false);

  function changeTextHandler() {
    setChageText(true);
  }

  return (
    <div>
      <h2>Hello world!</h2>
      {!changeText && (
        <Output>
          It's good to see you!
        </Output>
      )}
      {changeText && (
        <Output>
          Changed!
        </Output>
      )}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
}
