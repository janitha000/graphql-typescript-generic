import './styles/CurrencyRow.css'

interface props {
    options: (string | undefined)[],
    selectedCurrency: string,
    onChange: (e: any) => void,
    onInputChange?: (e: any) => void,
    amount?: number;
}
const CurrencyRow: React.FC<props> = ({ options, selectedCurrency, onChange, onInputChange, amount }) => {
    return (
        <div className="cur-row">
            {amount ? <input type="number" onChange={onInputChange} value={amount} />
                : <input type="number" onChange={onInputChange} />}
            <select name="" id="" value={selectedCurrency} onChange={onChange}>
                {options && options.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )

}

export default CurrencyRow