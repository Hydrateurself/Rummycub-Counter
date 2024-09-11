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

  if (counter <= 10) {
    navigator.vibrate(200);
  } else {
    console.log("Vibration is not supportet");
  }

  return (
    <div className="flex w-full h-screen flex-col justify-evenly items-center pl-4 pr-4 bg-slate-100 border-8 border-slate-300">
      <h2 className="font-abril text-5xl rotate-180">Rummyclub</h2>
      <Button
        color={""}
        style={""}
        onClick={handleClick}
        rotate="180deg"
        border=""
        width=""
      >
        Weiter
      </Button>
      <div
        className={` border-4 rounded-lg p-20 border-slate-300 w-full ${
          counter === 10 ? "bg-red-500" : ""
        }`}
      >
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
      </div>
      <Button
        color={""}
        style={""}
        onClick={handleClick}
        rotate=""
        border=""
        width=""
      >
        Weiter
      </Button>
      <div className="flex items-center justify-center gap-8 h-auto w-full">
        <Button
          color="green"
          style=""
          onClick={firstCLick}
          rotate=""
          border=""
          width="100px"
        >
          Start
        </Button>

        <Button
          color={"red"}
          style=""
          onClick={stop}
          rotate=""
          border=""
          width="100px"
        >
          Stop
        </Button>

        <hr />
      </div>
      <h2 className="font-abril text-5xl">Rummyclub</h2>
    </div>
  );
}

export default App;
