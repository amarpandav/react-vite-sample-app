import classes from "./UserInput.module.css";
import {InvestmentDto} from "../../pages/InvestHomePage.tsx";

interface Props {
    investmentDto: InvestmentDto;
    callback: (inputIdentifier: string, newValue: number) => void;
}
export default function UserInput( {investmentDto, callback}: Props) {




    return (
        <section id="user-input" className={classes.userInput}>
            <div className={classes.inputGroup}>
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required
                           value={investmentDto.initialInvestment}
                           onChange={(event) => callback('initialInvestment', +event.target.value)}></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                           value={investmentDto.annualInvestment}
                           onChange={(event) => callback('annualInvestment', +event.target.value)}></input>
                </p>
            </div>
            <div className={classes.inputGroup}>
                <p>
                    <label>Expected Return</label>
                    <input type="number" required
                           value={investmentDto.expectedReturn}
                           onChange={(event) => callback('expectedReturn', +event.target.value)}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                           value={investmentDto.duration}
                           onChange={(event) => callback('duration', +event.target.value)}></input>
                </p>
            </div>
        </section>
    );
}