import { useEffect, useMemo, useReducer, useState } from 'react'
import CurrencyRow from './CurrencyRow'
import './styles/Converter.css'

const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=15b3ba7b51ae296bffc9b396c235f883&format=1http://api.exchangeratesapi.io/v1/latest?access_key=15b3ba7b51ae296bffc9b396c235f883&format=1'

interface ApiResponse {
    base: string,
    date: string,
    rates: { [key: string]: number }
}

interface ConverterState {
    rates: { [key: string]: number }
    currencyOptions: string[],
    exchangeRate: number,
    fromCurrency: string,
    toCurrency: string,
    amount: number,
    inputValue: number
}

type ConverterActions = | { type: "fetchRates", payload: { currencyOptions: string[], exchangeRate: number, fromCurrency: string, toCurrency: string, amount: number, rates: {} } }
    | { type: "changeFromCurrency", curreny: string }
    | { type: "changeToCurrency", curreny: string }
    | { type: "changeAmount", fromCurrency: number, inputVal: number }



const converterReducer = (state: ConverterState, actions: ConverterActions) => {
    switch (actions.type) {
        case "fetchRates":
            return {
                ...state,
                currencyOptions: actions.payload.currencyOptions,
                exchangeRate: actions.payload.exchangeRate,
                fromCurrency: actions.payload.fromCurrency,
                toCurrency: actions.payload.toCurrency,
                rates: actions.payload.rates
            }
        case "changeFromCurrency":
            return { ...state, fromCurrency: actions.curreny }
        case "changeToCurrency":
            return {
                ...state,
                toCurrency: actions.curreny,
                exchangeRate: state.rates[actions.curreny],
                amount: state.rates[actions.curreny] * state.inputValue
            }
        case "changeAmount":
            return { ...state, amount: actions.fromCurrency, inputValue: actions.inputVal }
        default:
            return state;
    }
}

const iniialState: ConverterState = {
    currencyOptions: [],
    exchangeRate: 1,
    fromCurrency: '',
    toCurrency: '',
    amount: 0,
    rates: {},
    inputValue: 1,
}


const Converter: React.FC = () => {
    const [state, dispatch] = useReducer(converterReducer, iniialState)

    console.log(state.inputValue)

    useEffect(() => {
        fetch(url).then(res => res.json()).then((data: ApiResponse) => {
            let toCurrency = [...Object.keys(data!.rates)][0]
            dispatch({
                type: "fetchRates",
                payload: {
                    rates: data.rates,
                    fromCurrency: data.base,
                    toCurrency,
                    exchangeRate: data.rates[toCurrency],
                    currencyOptions: [...Object.keys(data!.rates)],
                    amount: (data.rates[toCurrency])
                }
            })
        })
    }, [])

    const onInputChange = (e: any) => {
        let amount = e.target.value * state.exchangeRate
        dispatch({ type: "changeAmount", fromCurrency: amount, inputVal: e.target.value })
    }

    return (
        <div className="converter">
            <div className="converter__container">
                <span>Converter</span>
                <CurrencyRow
                    options={state.currencyOptions}
                    selectedCurrency={state.fromCurrency}
                    onChange={(e: any) => dispatch({ type: "changeFromCurrency", curreny: e.target.value })}
                    onInputChange={onInputChange}
                />
                <div className="converter__container--equal">=</div>
                <CurrencyRow
                    options={state.currencyOptions}
                    selectedCurrency={state.toCurrency}
                    onChange={(e: any) => dispatch({ type: "changeToCurrency", curreny: e.target.value })}
                    amount={state.amount}

                />

            </div>
        </div>

    )

}

export default Converter