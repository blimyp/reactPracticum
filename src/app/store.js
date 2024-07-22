import { configureStore } from '@reduxjs/toolkit'
import stocksSlice from '../features/stocks/stocksSlice'

export const store = configureStore({
    reducer: {
        stocks: stocksSlice,
    },
})