import React, {useState} from "react";

// @ts-ignore
export default function Flashcard({flashcard}){
    const [flip, setFlip] = useState(false)
    return(
        <div
            className={`card ${flip ? 'flip': ''}`}
            onClick={() => setFlip(!flip)}
        >
            {flip ? <div className="back">{flashcard.answer}</div> :
                <div className="front">
                    {flashcard.question}
                    <div className="flashcard-options">
                        {flashcard.options.map((option: string) => {
                            return <div className="flashcard-option"> {option} </div>
                        })}
                    </div>
                </div>
            }
        </div>
    )
}
