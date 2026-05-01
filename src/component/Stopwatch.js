import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [total, setTotal] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null)

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTotal((second) => second + 1)
      },1)
    }
  }

  const stop = () => {
    setIsRunning(false)
    clearInterval(timerRef.current)
  }

  const reset = () => {
    setIsRunning(false)
    clearInterval(timerRef.current)
    setTotal(0)
  }

  const format = (num) => String(num).padStart(2, "0");
  const time = Math.floor(total/1000)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  const milliseconds = Math.floor((total % 1000)/10)

     return (
      <div className="flex flex-col justify-center items-center gap-3 h-screen">
        <div className="flex gap-5 ">
            <div className="flex">
                <div
                id="minutes"
                className="bg-zinc-900 text-white p-5 rounded-lg text-5xl">
                {format(minutes)}
                </div>
                <p className="text-2xl">m</p>
            </div>
            <div className="flex">
                <div
                id="seconds"
                className="bg-zinc-900 text-white p-5 rounded-lg text-5xl"
                >
                {format(seconds)}
                </div>
                <p className="text-2xl">s</p>
            </div>
            <div className="flex">
                <div
                id="milliseconds"
                className="bg-zinc-900 text-white p-5 rounded-lg text-5xl"
                >
                {format(milliseconds)}
                </div>
                <p className="text-2xl">ms</p>
            </div>
        </div>

        <div className="flex justify-center text-center gap-4">
            {isRunning ? <button 
            className="text-white bg-zinc-400 px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-zinc-500"
            onClick={stop}
            >Stop Stopwatch</button> 
            :
            <button 
            className="text-white bg-zinc-800 px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-zinc-900"
            onClick={start}
            >Start Stopwatch</button>
            }
            <button 
            className="text-white bg-red-500 px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-red-600"
            onClick={reset}
            >Reset Stopwatch</button>
        </div>
    </div>
  );
}

export default Stopwatch;
