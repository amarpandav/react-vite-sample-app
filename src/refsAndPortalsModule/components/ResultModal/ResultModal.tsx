import classes from "./ResultModal.module.css";
//import {useImperativeHandle} from "react";

interface Props {
    ref: React.RefObject<HTMLDialogElement>,
    result: string;
    targetTime: number;
}

export default function ResultModal({ref, result, targetTime}: Props/*, ref2: React.Ref<HTMLDialogElement>*/) {

    /*YOu need to use forwardRef to get it working :
useImperativeHandle() is used to decouple this components and its insights to the parent component. so ourside would call open() but internally we can call
whatever we want like showModal here.
 We can replace <dialog> with <div> and it will work as expected.

    useImperativeHandle(ref2, () => {
        return {
            open() {
                ref.current?.showModal();
            }
        }
    });*/

    return (
        <dialog ref={ref} className={classes.resultModal}>
            <h2>You {result}</h2>
            <p>The target time was <strong>{targetTime}</strong> seconds.</p>

            <p>You stopped the timer with <strong>X seconds left</strong> seconds.</p>
            <form method="dialog">
                <button>Close</button>
            </form>

        </dialog>
    );
}
