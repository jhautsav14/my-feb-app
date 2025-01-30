"use client";

import { useEffect, useState } from "react";

export default function Sparkles({ trigger }: { trigger: boolean }) {
    const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

    useEffect(() => {
        if (trigger) {
            const newSparkles = Array.from({ length: 15 }, () => ({
                id: Date.now() + Math.random(),
                x: Math.random() * 100,
                y: Math.random() * 100,
            }));
            setSparkles(newSparkles);

            setTimeout(() => {
                setSparkles([]);
            }, 800); // Sparkles disappear after 0.8 seconds
        }
    }, [trigger]);

    return (
        <div className="sparkleContainer">
            {sparkles.map((sparkle) => (
                <span
                    key={sparkle.id}
                    className="sparkle"
                    style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
                >
                    ✨
                </span>
            ))}
        </div>
    );
}
