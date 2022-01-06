import React, { useState, useEffect } from 'react';
import FlashcardList from "./FlashcardList";
import './app.css';
import {QuestionItem} from "./models/QuestionItem";
import axios from "axios";
import set = Reflect.set;

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10')
      .then((res: any) => {
        setFlashcards(
          res.data.results.map((questionItem: QuestionItem, index: String) => {
            const correctAns = decodeString(questionItem.correct_answer)
            const options = [...questionItem.incorrect_answers.map(a=> decodeString(a)), correctAns]
            return {
              id: `${index}-${Date.now()}`,
              question:  decodeString(questionItem.question),
              answer: correctAns,
              options: options.sort(() => Math.random() - 0.5)
            }
          })
        )
      })
  }, [])

  function decodeString(str: string) {
    const textArea = document.createElement('textarea')
    textArea.innerText = str
    return textArea.value
  }

  return (
      <div className='container'>
        <FlashcardList flashcards={flashcards}/>
      </div>
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
