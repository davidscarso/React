//old
// import React from "react";//  esto es para cuando uso JSX
// import ReactDOM from "react-dom";
// const saludo = <h1>hola mundo</h1>;
//const divRoot = document.querySelector('#root');
// ReactDOM.render(saludo, divRoot); //old
//-------------------------------------------------

import { createRoot } from 'react-dom/client';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'


//const saludo = <h1>hola mundo</h1>;
const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

// root.render(<PrimeraApp saludo='Hola Mundo' />);

root.render(<CounterApp />);

// root.render(<PrimeraApp saludo="¡Hola Mundo!" />);