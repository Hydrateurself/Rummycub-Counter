import { useRef, useState } from "react";
import { Button } from "./components/Button";
import "./index.css";
function App() {
  const [counter, setCounter] = useState<number>(63);
  const [isRotated, setIsRotated] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const startCount = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(
      () =>
        setCounter((counter) => {
          if (counter > 0) {
            return counter - 1;
          } else {
            clearInterval(intervalRef.current!);

            return 63;
          }
        }),
      1000
    );
  };

  const handleClick = () => {
    setCounter(63);
    setIsRotated(!isRotated);
    startCount();
  };

  const firstCLick = () => {
    startCount();
  };

  const stop = () => {
    setCounter(63);
    clearInterval(intervalRef.current!);
  };
  return (
    <div className="flex w-full h-screen flex-col justify-evenly items-center pl-4 pr-4 bg-blue-300">
      <h2 className="font-abril text-5xl rotate-180">Rummyclub</h2>
      <Button color={"yellow"} style={""} onClick={handleClick} rotate="180deg">
        Weiter
      </Button>
      <div className="flex justify-center items-center">
        <div className="w-auto h-auto text-black flex justify-center items-center text-8xl">
          <div
            className={`${
              isRotated ? "rotate-180" : " "
            } font-abril font-bold pl-6 pr-6`}
          >
            {counter}
          </div>
        </div>
      </div>
      <Button color={"yellow"} style={""} onClick={handleClick} rotate="">
        Weiter
      </Button>
      <div className="flex gap-8">
        <Button color="green" style="" onClick={firstCLick} rotate="">
          Go
        </Button>
        <Button color={"red"} style="" onClick={stop} rotate="">
          No
        </Button>
      </div>
      <h2 className="font-abril text-5xl">Rummyclub</h2>
    </div>
  );
}

export default App;
