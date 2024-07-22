import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dataStocks: {
        MSFT:
            [{
                date: "Tue Jan 02 2024 02:00:00 GMT+0200 (שעון ישראל (חורף))",
                open: "138",
                high: "131",
                low: "160004",
                close: "138",
                volume: "2074500"
            },
            {
                date: "Tue Jan 02 2024 02:00:00 GMT+0200 (שעון ישראל (חורף))",
                open: "138",
                high: "131",
                low: "160004",
                close: "138",
                volume: "2074500"
            },
            {
                date: "Tue Jan 02 2024 02:00:00 GMT+0200 (שעון ישראל (חורף))",
                open: "138",
                high: "131",
                low: "160004",
                close: "138",
                volume: "2074500"
            },],
        A:
            [{
                date: "Tue Jan 02 2024 02:00:00 GMT+0200 (שעון ישראל (חורף))",
                open: "138",
                high: "131",
                low: "160004",
                close: "138",
                volume: "2074500"
            },
            {
                date: "Tue Jan 02 2024 02:00:00 GMT+0200 (שעון ישראל (חורף))",
                open: "138",
                high: "131",
                low: "160004",
                close: "138",
                volume: "2074500"
            },
            {
                date: "Tue Jan 02 2024 02:00:00 GMT+0200 (שעון ישראל (חורף))",
                open: "138",
                high: "131",
                low: "160004",
                close: "138",
                volume: "2074500"
            },]
    }
}

export const stocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        initStocks: (state, action) => {
            state.dataStocks = action.payload;
        },

        addDataForAllStock: (state, action) => {
            let newData = state.dataStocks.reduce((acc, stock) => {
                let updatedStock = { ...stock.value, ...action.payload[stock.key] };
                acc[stock.key] = updatedStock;
                return acc;
            }, {});

            return {
                ...state,
                dataStocks: Object.values(newData),
            };
        },

        updateOneStock: (state, action) => {
            state.dataStocks[action.key] = action.payload;
        },
    },
})

export const { addDataForAllStock, updateOneStock, initStocks } = stocksSlice.actions

export default stocksSlice.reducer