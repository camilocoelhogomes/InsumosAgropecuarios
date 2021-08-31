import React from 'react';
import { TextField, Fab } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

import '../css/CalculatorInput.css'

const CalculatorInput = ({ input, name, hasSoloAnalisys, changeInput, decInput, accInput }) => {


    if (!hasSoloAnalisys && (name === 'phosphor' || name === 'potassium')) {
        return <></>
    }
    return (
        <li className='input'>
            <div className='input-area'>
                <p className='input-label'>{input.label}</p>
                <TextField
                    fullWidth
                    value={input.value}
                    onChange={() => changeInput(name)}
                />
            </div>
            <div className='input-change-buttons'>
                <Fab size='small' color='secondary'>
                    <Remove
                        style={{ color: '#FFFFFF' }}
                        onClick={() => decInput(name)}
                    />
                </Fab>
                <Fab size='small' color='secondary'>
                    <Add
                        style={{ color: '#FFFFFF' }}
                        onClick={() => accInput(name)}
                    />
                </Fab>
            </div>
        </li>
    )
}

export default CalculatorInput;