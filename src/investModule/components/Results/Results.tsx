import {InvestmentDto} from "../../pages/InvestHomePage.tsx";
import {calculateInvestmentResults, formatter, ResultDto} from "../../utils/investment.tsx";
import classes from "./Results.module.css";

interface Props {
    investmentDto: InvestmentDto;
}

export default function Results({investmentDto}: Props) {

    const resultDataDto: ResultDto[] = calculateInvestmentResults(investmentDto);
    const initialInvestment = resultDataDto[0].valueEndOfYear - resultDataDto[0].interest - resultDataDto[0].annualInvestment;
    console.log(resultDataDto)
    return (
        <table id="results" className={classes.results}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Interest</th>
                <th>Value End of Year</th>
                <th>Total Interest</th>
                <th>Annual Investment</th>
                <th>Invested Capital</th>
            </tr>

            </thead>
            <tbody>
            {resultDataDto.map((result) => {
                const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                const totalAmountInvested = result.valueEndOfYear - totalInterest;

                return (
                    <tr key={result.year}>
                        <td>{result.year}</td>
                        <td>{formatter.format(result.interest)}</td>
                        <td>{formatter.format(result.valueEndOfYear)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(result.annualInvestment)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}