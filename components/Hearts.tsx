"use client";

import { useEffect, useState } from "react";

export default function Hearts() {
    const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prev) => [
                ...prev,
                { id: Date.now(), x: Math.random() * 100, y: Math.random() * 100 },
            ]);
            setTimeout(() => {
                setHearts((prev) => prev.slice(1));
            }, 3000);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="heartContainer">
            {hearts.map((heart) => (
                <span
                    key={heart.id}
                    className="floatingHeart"
                    style={{ left: `${heart.x}%`, top: `${heart.y}%` }}
                >
                    💖
                </span>
            ))}
        </div>
    );
}
