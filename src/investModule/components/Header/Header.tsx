import logo from "../../../assets/investment-calculator-logo.png";
import classes from "./Header.module.css";

export default function Header() {
    return (
        <header id="header" className={classes.header}>
            <img src={logo} alt="Logo showing money bag"></img>
            <h1>Investment Calculator</h1>
        </header>
    );
}