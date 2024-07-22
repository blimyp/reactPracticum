import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initStocks } from './stocksSlice';


export function StockLine({ line }) {
    console.log(JSON.stringify(line))

    return (
        <div>
            <p>{line.date}</p>
            <p>{line.open}</p>
            <p>{line.low}</p>
            <p>{line.high}</p>
            <p>{line.close}</p>
            <p>{line.volum}</p>
        </div>
    )
}