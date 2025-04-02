import classes from "../TimerChallenge/Timerchallenge.module.css";
import {useRef, useState} from "react";
import ResultModal from "../ResultModal/ResultModal.tsx";

interface Props {
    title: string;
    targetTimeInSecs: number;
}

//Anything outside this function will be shared across all instances of this component

export default function TimerChallenge({title, targetTimeInSecs}: Props) {
    const [timeRemainingInMs, setTimeRemainingInMs] = useState(targetTimeInSecs * 1000)//convert seconds to milliseconds

    const timerId = useRef<number>(); //useRef to store timerId

    //let timerId: number = -1; //problem with this approach is, if we start-stop
    // more than 1 timer its not possible to stop the previous timer as timer id is overriden with latest id
    //hence use useRef to store timerId

    const dialog = useRef<HTMLDialogElement>(null);

    const timerIsActive = timeRemainingInMs > 0 && timeRemainingInMs < targetTimeInSecs * 1000;

    //timer expired, lets do some cleanup and show the dialog
    if(timeRemainingInMs <= 0) {
        clearInterval(timerId.current);
        dialog?.current?.showModal();
    }
    function handleStart() {

        //setInterval is used to run the function at regular intervals
        //setTimeout is used to run the function once after the interval
        timerId.current = setInterval(() => {
            //prevTime parameter is the previous state value automatically passed by react
            setTimeRemainingInMs( (prevTime) =>  prevTime - 10);
        }, 10);//Run the function every 10 milliseconds
    }

    //timer stopped manually, lets do some cleanup and show the dialog
    function handleStop() {
        clearInterval(timerId.current);
        dialog?.current?.showModal();
    }

    function onResetCallback() {
        setTimeRemainingInMs(targetTimeInSecs * 1000);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTimeInSecs={targetTimeInSecs} timeRemainingInMs={timeRemainingInMs} onResetCallback={onResetCallback}></ResultModal>
            <section id="player" className={classes.challenge}>
                <h2>{title}</h2>
                <p className={classes.challengeTime}>
                    {targetTimeInSecs} second{targetTimeInSecs > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop: handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p>
                    {timerIsActive ? 'Timer is active....' : 'Time is inactive'}
                </p>
            </section>
        </>
    );
}
