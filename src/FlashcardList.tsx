import React from "react";
import Flashcard from "./Flashcard";
import {FlashcardInfo} from "./models/FlashcardInfo";

// @ts-ignore
export default function FlashcardList({flashcards}){
    return(
        <div className="card-grid">
            {flashcards.map((flashcard: FlashcardInfo) => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
