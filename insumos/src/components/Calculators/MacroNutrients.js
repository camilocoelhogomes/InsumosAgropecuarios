import './MacroNutrients.css'
const MacroNutrients = (props) => {
    console.log(props)
    const inputs = props.calculator.inputs;

    return (
        <div className='macro-nutrients'>
            <ul className='macro-nutrients-inputs'>
                {Object.keys(inputs).map((item, key) =>
                    <input key={key}
                        id={key}
                        className='macro-nutrients-input'
                        placeholder={`${inputs[item].label}  (${inputs[item].unit})`}
                    />
                )}
            </ul>

            <button className='recomendation-button'>Obter Recomendação</button>
        </div>
    )
}

export default MacroNutrients;