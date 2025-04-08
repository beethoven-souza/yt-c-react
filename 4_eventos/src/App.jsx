import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EventHandlingExamples from "./components/EventHandlingExamples";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EventHandlingExamples></EventHandlingExamples>
    </>
  );
}

export default App;
