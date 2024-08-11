import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import "./index.css";
function App() {
  const [counter, setCounter] = useState<number>(3);
  const startCountJohn = () => {
    const interval = setInterval(
      () =>
        setCounter((counter) => {
          if (counter > 0) {
            return counter - 1;
          } else {
            clearInterval(interval);
            return 3;
          }
        }),
      1000
    );
  };

  const startCountBene = () => {
    const interval = setInterval(
      () =>
        setCounter((counter) => {
          if (counter > 0) {
            return counter - 1;
          } else {
            clearInterval(interval);
            return 3;
          }
        }),
      1000
    );
  };

  return (
    <div className="flex w-full h-screen flex-col justify-evenly items-center pl-4 pr-4">
      <h2>Rummy Cub</h2>
      <Button color={"green"} style={""} onClick={startCountJohn}>
        Button 1
      </Button>
      <div className="w-full h-1/2 bg-black text-white flex justify-center items-center">
        {counter}
      </div>
      <Button color={"red"} style={""} onClick={startCountBene}>
        Button 2
      </Button>
      <h2>Rummy Cub</h2>
    </div>
  );
}

export default App;
