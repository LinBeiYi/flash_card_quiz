import React, {useState} from 'react';
import FlashcardList from "./FlashcardList";
import './app.css';

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
      <FlashcardList flashcards={flashcards}/>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'what is 2+1',
    answer: '3',
    options: ['1','2','3','4']
  },
  {
    id: 2,
    question: 'what is 2+2',
    answer: '4',
    options: ['1','2','3','4']
  },
  {
    id: 3,
    question: 'what is 2+3',
    answer: '5',
    options: ['1','2','3','5']
  },
  {
    id: 4,
    question: 'what is 2+4',
    answer: '6',
    options: ['1','2','3','6']
  }
]

export default App;
