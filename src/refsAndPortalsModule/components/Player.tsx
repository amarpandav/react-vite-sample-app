import classes from "./Player.module.css";

export default function Player() {
  return (
    <section id="player" className={classes.player}>
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" />
        <button>Set Name</button>
      </p>
    </section>
  );
}
