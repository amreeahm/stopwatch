import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [running,setRunning] = useState(false);
  const [time,setTime] = useState(0);

  useEffect(() => {
    let intervalID;

    if(running){
      intervalID = setInterval(()=>{
        setTime(prev => prev + 1)
      },1000)
    }else{
      clearInterval(intervalID)
    }

    return () => clearInterval(intervalID);
  },[running])

  const startStop = () => {
    setRunning(prev => !prev);
  }

  const reset = () =>{
    setRunning(false);
    setTime(0)
  }

  const formatTime = (time) =>{
    const minutes = Math.floor(time/60);
    const seconds = time%60;
    return `${minutes}:${seconds<10?"0":""}${seconds}`
  }
  return (
    <>
    <h1>Stopwatch</h1>
    <p>Time: {formatTime(time)}</p>
    <button onClick={startStop}>{running? "Stop" : "Start"}</button>
    <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
