import MacroNutrients from "./Calculators/MacroNutrients";
import '../css/Calculator.css'

const Calculator = (props) => {

    console.log(props)
    return (
        <>

            <header className='calculator-header'>
                <div className='calculator-header-aux'></div>
                <h1 className='calculator-header-label'>Calculadora</h1>

                <div className='Navigation-button'><ion-icon name="ellipsis-vertical"></ion-icon></div>
            </header>

            <section>
                <MacroNutrients />

            </section>
        </>
    )
}

export default Calculator;