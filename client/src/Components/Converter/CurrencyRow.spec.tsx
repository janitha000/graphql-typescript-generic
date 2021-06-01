import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import { mount } from 'enzyme'
import CurrencyRow from "./CurrencyRow"
import userEvent from '@testing-library/user-event'

const mockonChange = jest.fn();
const mockonInputChange = jest.fn();

describe('Currency row tests', () => {
    afterEach(cleanup);

    const props = {
        options: ['EUR', 'AED'],
        selectedCurrency: "AED",
        onChange: mockonChange,
        onInputChange: mockonInputChange,
        amount: 0
    }
    it('should display input row', () => {
        const { getByRole } = render(<CurrencyRow {...props} />)
        expect(getByRole('spinbutton')).toBeVisible()
    })
    it('should fire input row', async () => {
        const { getByRole, getByPlaceholderText, container } = render(<CurrencyRow {...props} />)
        fireEvent.change(getByPlaceholderText('1'), {
            target: { value: 12 }
        })
        expect(mockonInputChange).toHaveBeenCalledTimes(1)
    })
    it('should show select options', () => {
        const { getByRole } = render(<CurrencyRow {...props} />)
        expect(getByRole('combobox')).toBeVisible()
    })
    it('should show correct select options', async () => {
        const { getAllByRole } = render(<CurrencyRow {...props} />)
        expect(getAllByRole('option')[0].textContent).toEqual("EUR")
    })
    // it('should show correct select options - enzyme', async () => {
    //     const currencyRow = mount(<CurrencyRow {...props} />)
    //     expect(currencyRow.find('select').text).toHaveValue("EUR")
    // })
    it('should show correct select options when select', async () => {
        const { getByRole } = render(<CurrencyRow {...props} />)
        expect(getByRole('combobox')).toBeVisible()
    })
})