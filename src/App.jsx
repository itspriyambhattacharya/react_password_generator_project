import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("Bhgrzxxs");

  return (
    <>
      <header className="text-white">
        <h1 className="text-2xl lg:text-4xl text-center">Password Generator</h1>
      </header>
    </>
  );
}

export default App;
