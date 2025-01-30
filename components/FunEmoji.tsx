"use client";

import { useEffect, useState } from "react";

const emojis = ["💖", "😍", "💘", "🥰", "❤️", "💞", "💌", "🌹"];

export default function FunEmoji() {
    const [floatingEmojis, setFloatingEmojis] = useState<
        { id: number; x: number; y: number; size: number; speed: number }[]
    >([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFloatingEmojis((prev) => [
                ...prev,
                {
                    id: Date.now() + Math.random(), // ✅ Now always unique
                    x: Math.random() * 100, // Random X position
                    y: 100, // Start from bottom
                    size: Math.random() * 1.5 + 0.5, // Random size between 0.5x to 2x
                    speed: Math.random() * 3 + 2, // Random speed between 2s to 5s
                },
            ]);

            // Remove after animation completes
            setTimeout(() => {
                setFloatingEmojis((prev) => prev.slice(1));
            }, 5000);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="emojiContainer">
            {floatingEmojis.map((emoji) => (
                <span
                    key={emoji.id} // ✅ Now guaranteed to be unique
                    className="floatingEmoji"
                    style={{
                        left: `${emoji.x}%`,
                        bottom: `0%`,
                        fontSize: `${emoji.size}rem`,
                        animationDuration: `${emoji.speed}s`,
                    }}
                >
                    {emojis[Math.floor(Math.random() * emojis.length)]}
                </span>
            ))}
        </div>
    );
}
