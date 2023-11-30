import React, { useState } from 'react';
import { Chart as ChartJs } from 'chart.js';
import { Line } from 'react-chartjs-2';

import sourceData from "../data/sourceData.json";


export const ChartLine = () => {
    const [labels, setLabels] = useState(sourceData.map((data) => data.label))
    const [values, setValues] = useState(sourceData.map((data) => data.value))

    // Your component logic here

    const data = {
        labels: labels,
        datasets: [{
            label: "Grafico por el poder Perruno",
            data: values,
            backgroundColor: [
                /*Azul*/ 'rgba(15, 15, 255, 0)',
                /*Morado*/ 'rgba(139, 15, 255, 0)',
                /*Menos morado*/ 'rgba(202, 10, 255, 0)',
                /*Rosado*/ 'rgba(255, 5, 243, 0)',
                /*Fucsia*/ 'rgba(250, 0, 104, 0)',
                /*Sandia*/ 'rgba(245, 0, 37, 0)',
                /*Naranja*/ 'rgba(240, 24, 0, 0)',
                /*Salmon*/ 'rgba(235, 86, 0, 0)',
                /*Gold*/ 'rgba(230, 145, 0, 0)',
                /*Amarillo*/ 'rgba(224, 202, 0, 0)',
            ],
            borderColor: [
                /*Azul*/ 'rgb(15, 15, 255)',
                /*Morado*/ 'rgb(139, 15, 255)',
                /*Menos morado*/ 'rgb(202, 10, 255)',
                /*Rosado*/ 'rgb(255, 5, 243)',
                /*Fucsia*/ 'rgb(250, 0, 104)',
                /*Sandia*/ 'rgb(245, 0, 37)',
                /*Naranja*/ 'rgb(240, 24, 0)',
                /*Salmon*/ 'rgb(235, 86, 0)',
                /*Gold*/ 'rgb(230, 145, 0)',
                /*Amarillo*/ 'rgb(224, 202, 0)'
            ],
            borderWidth: 1
        }]
    };


    return (
        <div>
            <div>
                <h1>Linea y no de la dura</h1>
                <Line
                    data={data}
                />
            </div>
        </div>
    );

}
