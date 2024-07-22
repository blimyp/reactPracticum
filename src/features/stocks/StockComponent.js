import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StockLine } from './StockLine';
import { initStocks } from './stocksSlice';


export function StockComponent() {
    const stocks = useSelector((state) => state.stocks.dataStocks);
    const dispatch = useDispatch()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('localhost:5000/api/getAllStocks');
    //         const data = await response.json();
    //         dispatch(initStocks(data));
    //     }
    //     fetchData();
    // }, []);

    return (
        <div>
            {stocks.map((item) => {
                return <StockLine line={item} />
            })}
        </div>
    )
}