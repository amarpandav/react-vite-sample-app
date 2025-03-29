//import PlayerTemp from "../components/PlayerTemp.tsx";

import Header from "../components/Header/Header.tsx";
import UserInput from "../components/UserInput/UserInput.tsx";
import {useState} from "react";
import Results from "../components/Results/Results.tsx";
import classes from "./InvestHomePage.module.css";

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

export default function InvestHomePage() {

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


    const inputIsValid = investmentDto.duration > 0;
    return (
        <>
            <Header></Header>
            <UserInput investmentDto={investmentDto} callback={handleChange}></UserInput>
            {!inputIsValid && <p className={classes.center}>Please enter duration greater than 0</p>}
            {inputIsValid && <Results investmentDto={investmentDto}></Results>}
        </>
    );
}
