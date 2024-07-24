import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StockLine } from './StockLine';
import { initStocks } from './stocksSlice';


export function StockComponent() {
    const stocks = useSelector((state) => state.stocks.dataStocks);
    const dispatch = useDispatch()

    const [selectedStock, setSelectedStock] = useState(null);

    const handleStockClick = (stockSymbol) => {
        setSelectedStock(stockSymbol);
    };
    

    return (
        <div>
            <h1>Stocks</h1>
            <hr style={{ border: '1px solid lightblue', width: '80%', margin: '0px auto' }} />

            {Object.keys(stocks).map((stockSymbol) => (
                <div key={stockSymbol} style={{
                    margin: 'auto', width: '80%'
                }}>
                    <div
                        key={stockSymbol}
                        style={{
                            paddingTop: '5px',
                            paddingBottom: '5px',
                            // width: '80%',
                            // margin: '0 auto',
                            // cursor: 'pointer',
                            backgroundColor: selectedStock === stockSymbol ? 'red' : 'white',
                            color: selectedStock === stockSymbol ? 'white' : 'black',

                        }}
                        onClick={() => handleStockClick(stockSymbol)}
                    >
                        {stockSymbol}
                    </div>

                    {selectedStock === stockSymbol && (
                        <table style={{ margin: "0px auto", borderCollapse: 'collapse', border: '2px solid #ccc', width: '80%', borderRadius: '5px' }}>
                        <thead>
                          <tr>
                            {Object.keys(stocks[stockSymbol][0]).map((record) => (
                              <th style={{ padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2', border: '1px solid #ccc' }}>{record}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {stocks[stockSymbol].map((stockRecord, index) => (
                            <tr style={{ borderBottom: '1px solid #ccc' }}>
                              {Object.keys(stockRecord).map((record) => (
                                <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ccc' }}>{stockRecord[record]}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>

                    )}
                    <hr style={{ border: '1px solid lightblue', margin: '0px', }} />
                </div>
            ))}
        </div>
    );
}