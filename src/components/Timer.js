import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 30,
    };
  }

  render() {
    const { timer } = this.state;
    return (
      <h2>
        { timer } 
      </h2>
    );
  }
}

export default Timer;

/* 
import { useEffect, useRef, useState } from "react";

interface CountdownProps {
  seconds: number;
}

function Countdown({ seconds }: CountdownProps): JSX.Element {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<number>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [timeLeft]);

  return <div>{timeLeft}s</div>;
}

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
      {isVisible && <Countdown seconds={30} />}
    </div>
  );
}
https://codesandbox.io/s/keen-lamport-g2iku?file=/src/App.tsx:24-867&hidenavigation=1&theme=dark
*/