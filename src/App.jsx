import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="text-white">
        <h1 className="text-2xl lg:text-4xl text-center">Password Generator</h1>
      </header>
    </>
  );
}

export default App;
