"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const dialogues = [
    "Ek baar jo maine commitment kar di, toh main apne aap ki bhi nahi sunta! Toh tu bhi ek baar 'Ha' bol de! – Wanted 😎",
    "Jaa Simran, jee le apni zindagi... Lekin pehle 'Ha' toh bol! – DDLJ ❤️",
    "Pyaar dosti hai… aur dosti me ‘Ha’ bolna zaroori hai! – Kuch Kuch Hota Hai 😍",
    "Haar kar jeetne wale ko Baazigar kehte hain… Toh tu bhi jeet ja aur ‘Ha’ bol! – Baazigar 🎭",
    "Pushpa, I hate tears! Toh rona band kar aur 'Ha' bol! – Amar Prem 😆",
    "Babuji ne kaha ‘Ha’ bol de, toh tu ‘Ha’ bol de! – Devdas 🍷😂",
    "Tension lene ka nahi, sirf ‘Ha’ bolne ka! – Munna Bhai M.B.B.S. 😜",
    "Agar tum ‘Ha’ nahi bologe, toh kahani adhuri reh jayegi! – Yeh Jawaani Hai Deewani 🎬",
    "Mogambo tabhi khush hoga jab tu ‘Ha’ bolega! – Mr. India 😈",
    "Rishte me toh hum tumhare dost lagte hain, aur dost ‘Ha’ bolte hain! – Shahenshah 🔥",
];

export default function FunDialog({ onConfirm }: { onConfirm: () => void }) {
    const [dialogueIndex, setDialogueIndex] = useState(0);
    const router = useRouter();

    const handleNaClick = () => {
        setDialogueIndex((prev) => (prev + 1) % dialogues.length); // Loop through unique dialogues
    };

    return (
        <div className="dialogOverlay">
            <div className="dialogBox">
                <p>{dialogues[dialogueIndex]}</p>
                <div className="dialogButtons">
                    <button
                        className="haButton"
                        onClick={() => {
                            onConfirm(); // Close dialog box
                            setTimeout(() => router.push("/celebration"), 500); // Redirect to celebration page
                        }}
                    >
                        Ha 💖
                    </button>
                    <button className="naButton" onClick={handleNaClick}>
                        Na 🙅‍♂️
                    </button>
                </div>
            </div>
        </div>
    );
}
