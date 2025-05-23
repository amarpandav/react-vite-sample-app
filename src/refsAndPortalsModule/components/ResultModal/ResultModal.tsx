import classes from "./ResultModal.module.css";
import {createPortal} from "react-dom";
//import {useImperativeHandle} from "react";

interface Props {
    ref: React.RefObject<HTMLDialogElement>,
    targetTimeInSecs: number;
    timeRemainingInMs: number;
    onResetCallback: () => void;
}

export default function ResultModal({ref, targetTimeInSecs, timeRemainingInMs, onResetCallback}: Props/*, ref2: React.Ref<HTMLDialogElement>*/) {

    const userLost = timeRemainingInMs <= 0;
    const formattedRemainingTimeInSecs = (timeRemainingInMs / 1000).toFixed(2);
    const score = Math.round ((1 - timeRemainingInMs / (targetTimeInSecs * 1000)) * 100);
    /*YOu need to use forwardRef to get it working :
useImperativeHandle() is used to decouple this components and its insights to the parent component. so outside would call open() but internally we can call
whatever we want like showModal here.
 We can replace <dialog> with <div> and it will work as expected.

    useImperativeHandle(ref2, () => {
        return {
            open() {
                ref.current?.showModal();
            }
        }
    });*/

    return ( createPortal(
        <dialog ref={ref} className={classes.resultModal} onClose={onResetCallback}>
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>You Score: {score}</h2>}
            <p>The target time was <strong>{targetTimeInSecs}</strong> seconds.</p>

            <p>You stopped the timer with <strong>{formattedRemainingTimeInSecs} seconds left</strong> seconds.</p>
            <form method="dialog" /*onSubmit={onResetCallback} will get automatically called when close button is clicked but not needed as we have onClose for dialog*/>
                <button>Close</button>
            </form>

        </dialog>, document.getElementById('modal') as HTMLDivElement
        )
    );
}
