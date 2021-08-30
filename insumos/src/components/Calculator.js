import CalculatorInput from './CalculatorInput';
import '../css/Calculator.css';



const Calculator = ({ navigation, changeInput }) => {
    const calculatorInputs = navigation[1].subItens[0].inputs;

    return (
        <ul>
            {Object.keys(calculatorInputs).map((input) =>
                <CalculatorInput
                    input={navigation[1].subItens[0].inputs[input]}
                    name={input} hasSoloAnalisys={navigation[1].config.hasSoloAnalisys}
                    changeInput={changeInput} />)}
        </ul>
    )
}

export default Calculator;