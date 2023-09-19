// lo componenter se pueden  hacer en base a cñase o funciones, se prefire hacelo en funciones
// import React from 'react';//< hace falta? no me d< error si no esta

//import { Fragment } from "react";

import PropTypes from 'prop-types'
//FC
const PrimeraApp = ({ saludo, subtitulo }) => {
    // console.log('props', props)

    // const saludo = '¡Hola Mundo!';
    // const myObject = { name: 'David', age: 40, };


    return (
        <>
            <h1>{saludo}</h1>
            {/* <h1>{props.saludo}</h1> */}
            {/* <h1>{saludo}</h1> */}
            {/* <pre>{JSON.stringify(myObject, null, 3)}</pre> */}
            <p>{subtitulo}</p>


        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo',
}

export default PrimeraApp;