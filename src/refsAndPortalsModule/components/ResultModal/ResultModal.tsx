import classes from "./ResultModal.module.css";

interface Props {
    ref: React.RefObject<HTMLDialogElement>,
    result: string;
    targetTime: number;
}
export default function ResultModal({ref, result, targetTime}: Props) {

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
