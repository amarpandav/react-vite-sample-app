import classes from "../TimerChallenge/Timerchallenge.module.css";
import {useRef, useState} from "react";
import ResultModal from "../ResultModal/ResultModal.tsx";

interface Props {
    title: string;
    targetTime: number;
}

//Anything outside this function will be shared across all instances of this component

export default function TimerChallenge({title, targetTime}: Props) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const timerId = useRef<number>(); //useRef to store timerId

    //let timerId: number = -1; //problem with this approach is, if we start-stop
    // more than 1 timer its not possible to stop the previous timer as timer id is overriden with latest id
    //hence use useRef to store timerId

    const dialog = useRef<HTMLDialogElement>(null);

    function handleStart() {
        setTimerStarted(() => true); //this code can also be moved towards end of the function

        timerId.current = setTimeout(() => {
            setTimerExpired(() => true);
            setTimerStarted(false);
            dialog?.current?.showModal();
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timerId.current);
    }

    return (
        <>
            {timerExpired && (<ResultModal ref={dialog} result='lost' targetTimeInSecs={targetTime}></ResultModal>)}
            <section id="player" className={classes.challenge}>
                <h2>{title}</h2>
                <p className={classes.challengeTime}>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop: handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p>
                    {timerStarted ? 'Time is running....' : 'Time is inactive'}
                </p>
            </section>
        </>
    );
}
