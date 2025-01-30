"use client";

import { useEffect, useState } from "react";

// List of romantic Shayari
const shayariList = [
    "Tum paas ho dil ke, is baat ka ehsaas hai, \n Har saans mein bas tumhara hi ahsaas hai. 💖",
    "Tere naam se jeete hain hum, \n Tere naam se mar jayenge. ❤️",
    "Meri har ek dhadkan mein basa hai tera pyaar, \n Tujhse juda hoke jeena ho bekar. 💞",
    "Chupke se aaye the dil mein tum, \n Ab toh tumhare bina jeena mushkil hai sanam. 💘",
    "Tumse mila toh jaana maine pyaar kya hota hai, \n Teri hasi meri duniya hai. 😊",
    "Chaand bhi dekha toh tumhari yaad aayi, \n Tum bin zindagi adhoori si lagti hai. 🌙💑",
    "Mohabbat ki baat chhodo, \n Tumhari ek muskurahat hi kaafi hai meri duniya roshan karne ke liye. 🌟",
];

export default function CelebrationPage() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [typedShayari, setTypedShayari] = useState("");
    const [shayariIndex, setShayariIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        // Show confetti after a short delay
        setTimeout(() => setShowConfetti(true), 500);

        // Typing effect for Shayari
        if (charIndex < shayariList[shayariIndex].length) {
            setTimeout(() => {
                setTypedShayari((prev) => prev + shayariList[shayariIndex][charIndex]);
                setCharIndex(charIndex + 1);
            }, 80);
        } else {
            // After completing one Shayari, show the next one
            setTimeout(() => {
                setTypedShayari("");
                setCharIndex(0);
                setShayariIndex((prev) => (prev + 1) % shayariList.length); // Cycle through the Shayari
            }, 3000);
        }
    }, [charIndex]);

    return (
        <div className="celebrationContainer">
            {/* Confetti Animation */}
            {showConfetti && (
                <div className="confetti">
                    <div className="confetti-piece c1"></div>
                    <div className="confetti-piece c2"></div>
                    <div className="confetti-piece c3"></div>
                    <div className="confetti-piece c4"></div>
                    <div className="confetti-piece c5"></div>
                </div>
            )}

            {/* Romantic Title */}
            <h1 className="celebrationText">💛 True Love Always Wins! 💛</h1>

            {/* Glowing Rounded Yellow Background */}
            <div className="roundedGoldenBox">
                <img src="/co.jpg" alt="Couple Celebration" className="celebrationImage" />
            </div>

            {/* Typing Effect Shayari */}
            <p className="shayariText">{typedShayari}</p>

            {/* Developer Credit */}
            <footer className="devCredit">Developed by Utsav 🚀</footer>
        </div>
    );
}
