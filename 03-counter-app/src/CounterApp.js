import PropTypes from 'prop-types'
import { useState } from 'react';

const CounterApp = ({ value, }) => {

    //hacemos una Desestructuracion del resultado del hook
    // const state = useState('Goku');
    const [counter, setCounter] = useState(0);// return aun array con dos valores

    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
         
            {/* <button onClick={(e) => handleAdd(e)}>+1</button> */}

            {/* aca pasa como referencia la fucion*/}
            {/* <button onClick={handleAdd}>+1</button> */}

            {/* aca pasa ejecuta la funcion cunado la renderiza*/}
            {/* <button onClick={handleAdd()}>+1</button> */}

            <button onClick={handleAdd}>+1</button>

        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;