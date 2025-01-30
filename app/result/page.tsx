"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Hearts from "../../components/Hearts";
import FunDialog from "../../components/FunDialog";
import Image from 'next/image';

export default function ResultScreen() {
    const [showDialog, setShowDialog] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const router = useRouter();

    const handleHaClick = () => {
        setTimeout(() => router.push("/celebration"), 500);
    };

    return (
        <div className="resultContainer">
            <Hearts />
            <h1 className="resultText">💖 You Guys Are Made for Each Other! 💖</h1>

            <div className="glowingCircle">
                <Image src="/couple.jpg" alt="Couple" className="resultImage" width={500}
                    height={300} />
            </div>

            {!confirmed && (
                <div className="confirmationContainer">
                    <h2 className="confirmText">Would you like this couple? 🥰</h2>
                    <div className="confirmButtons">
                        <button className="haButton" onClick={handleHaClick}>
                            Ha 💖
                        </button>
                        <button className="naButton" onClick={() => setShowDialog(true)}>
                            Na 🙅‍♂️
                        </button>
                    </div>
                </div>
            )}

            {showDialog && <FunDialog onConfirm={handleHaClick} />}
        </div>
    );
}
