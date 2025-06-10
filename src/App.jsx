import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let sChar = "@#!$%^&*";

    if (numberAllowed) {
      str += num;
    }
    if (characterAllowed) {
      str += sChar;
    }

    for (let i = 0; i < length; i++) {
      let randIdx = Math.floor(Math.random() * str.length + 1);
      pass += str[randIdx];
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  return (
    <>
      <header className="text-white">
        <h1 className="text-2xl lg:text-4xl text-center">Password Generator</h1>
      </header>
      <main>
        <div className="mt-3.5 mx-auto w-fit lg:min-w-2xl p-4 rounded-md bg-gray-600 flex flex-col justify-center">
          <div className="flex mb-4">
            <input
              type="text"
              name="passwordInp"
              id="passswordInp"
              placeholder="Password"
              value={password}
              readOnly
              className="py-2 px-3 bg-gray-300 w-full rounded-l-2xl lg:rounded-l-3xl"
            />
            <button className="bg-blue-800 text-white px-3 py-2 w-20 lg:w-28 shrink-0 cursor-pointer rounded-r-2xl lg:rounded-r-3xl shadow-2xl">
              Copy
            </button>
          </div>
          <div className="flex gap-2 text-white flex-wrap">
            <input
              type="range"
              name="rangeInp"
              id="rangeInp"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="rangeInp">Length: {length}</label>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
