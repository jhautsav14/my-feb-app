"use client";

import { useEffect, useState } from "react";

export default function ProgressBar({ progress }: { progress: number }) {
    const [unlocked, setUnlocked] = useState(false);

    useEffect(() => {
        if (progress >= 100) {
            setUnlocked(true);
        }
    }, [progress]);

    return (
        <div className="progressContainer">
            <div className="progressBar">
                <div className="progressFill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className={`heart ${unlocked ? "unlocked" : ""}`}>
                {unlocked ? "💖" : "💔"}
            </div>
        </div>
    );
}
