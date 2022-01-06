import React, {useState, useEffect, useRef} from "react";
import set = Reflect.set;

// @ts-ignore
export default function Flashcard({flashcard}){
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState(100)
    const frontEl = useRef<HTMLDivElement>(null);
    const backEl = useRef<HTMLDivElement>(null);

    function setMaxHeight(){
        // @ts-ignore
        const frontHeight = frontEl.current.getBoundingClientRect().height
        // @ts-ignore
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight,[flashcard.question, flashcard.answer, flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        // called when component destroys itself, hence its cleaner by removing it
        return () => window.removeEventListener('resize', setMaxHeight)

    },[])
    return(
        <div
            style={{height: height}}
            className={`card ${flip ? 'flip': ''}`}
            onClick={() => setFlip(!flip)}
        >

            <div className="front" ref={frontEl}>
                {flashcard.question}
                <div className="flashcard-options">
                    {flashcard.options.map((option: string) => {
                        return <div className="flashcard-option"> {option} </div>
                    })}
                </div>
            </div>

            <div className="back" ref={backEl}>{flashcard.answer}</div>

        </div>
    )
}
