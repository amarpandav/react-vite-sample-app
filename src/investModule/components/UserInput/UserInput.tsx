import classes from "./UserInput.module.css";
import {useState} from "react";

//If we make this a class, we can use the constructor to set the default values
//However return {...prevInvestmentDto, [inputIdentifier]: newValue} won't work because { ...prevInvestmentDto }
// creates a shallow copy of the object but it loses the fact that it is an instance of InvestmentDto class.
// So, we need to use the class to create a new instance of InvestmentDto and set the values which creates more boilerplate code.
//that example is commented out inside handleChange
export interface InvestmentDto {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
    /*if this would have been the class: constructor(
        public initialInvestment: number,
        public annualInvestment: number,
        public expectedReturn: number,
        public duration: number) {
    }*/
}

export default function UserInput() {
    const [investmentDto, setInvestmentDto] = useState<InvestmentDto>({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier: string, newValue: number) {
        setInvestmentDto((prevInvestmentDto) => {
            return {...prevInvestmentDto, [inputIdentifier]: newValue}
            /*return new InvestmentDto(
                inputIdentifier === 'initialInvestment' ? newValue : prevInvestmentDto.initialInvestment,
                inputIdentifier === 'annualInvestment' ? newValue : prevInvestmentDto.annualInvestment,
                inputIdentifier === 'expectedReturn' ? newValue : prevInvestmentDto.expectedReturn,
                inputIdentifier === 'duration' ? newValue : prevInvestmentDto.duration
            );*/
        });
    }

    return (
        <section id="user-input" className={classes.userInput}>
            <div className={classes.inputGroup}>
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required
                           value={investmentDto.initialInvestment}
                           onChange={(event) => handleChange('initialInvestment', +event.target.value)}></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                           value={investmentDto.annualInvestment}
                           onChange={(event) => handleChange('annualInvestment', +event.target.value)}></input>
                </p>
            </div>
            <div className={classes.inputGroup}>
                <p>
                    <label>Expected Return</label>
                    <input type="number" required
                           value={investmentDto.expectedReturn}
                           onChange={(event) => handleChange('expectedReturn', +event.target.value)}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                           value={investmentDto.duration}
                           onChange={(event) => handleChange('duration', +event.target.value)}></input>
                </p>
            </div>
        </section>
    );
}