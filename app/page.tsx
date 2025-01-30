"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FunEmoji from "../components/FunEmoji";
import Sparkles from "../components/Sparkles";
import ProgressBar from "../components/ProgressBar";
import questions from "../components/Questions";

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });
  const [fade, setFade] = useState(true);
  const [sparkle, setSparkle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setQuestionIndex(Math.floor(Math.random() * questions.length));
  }, []);

  const handleYesClick = () => {
    setSparkle(true);
    setFade(false);
    setProgress((prev) => {
      const newProgress = Math.min(prev + 20, 100);
      if (newProgress === 100) {
        setTimeout(() => router.push("/result"), 1000);
      }
      return newProgress;
    });

    setTimeout(() => {
      const nextIndex = Math.floor(Math.random() * questions.length);
      setQuestionIndex(nextIndex);
      setFade(true);
      setSparkle(false);
    }, 500);
  };

  const moveNoButton = () => {
    const x = Math.random() * window.innerWidth * 0.7;
    const y = Math.random() * window.innerHeight * 0.7;
    setNoPosition({ top: `${y}px`, left: `${x}px` });
  };

  return (
    <div className="container">
      <FunEmoji />
      <ProgressBar progress={progress} />
      <Sparkles trigger={sparkle} />
      <h1 className={`question ${fade ? "fade-in" : "fade-out"}`}>{questions[questionIndex]}</h1>

      <div className="buttons">
        <button className="yesButton" onClick={handleYesClick}>
          Yes 💖
        </button>
        <button
          className="noButton"
          style={{ top: noPosition.top, left: noPosition.left }}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
        >
          No 🙅‍♂️
        </button>
      </div>
    </div>
  );
}
