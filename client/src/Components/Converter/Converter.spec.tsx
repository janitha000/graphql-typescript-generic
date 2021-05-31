import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Converter from './Converter'
import { mount, shallow } from 'enzyme'
import CurrencyRow from './CurrencyRow'


describe('Convert component testing', () => {
    it('renders without crashing', async () => {
        const { queryByText } = render(<Converter />)
        expect(await queryByText("Converter")).toBeVisible()
        expect(await queryByText("=")).toBeVisible()
    })

    it('should render two currency rows', () => {
        const { getAllByRole } = render(<Converter />)
        expect(getAllByRole('spinbutton')).toBeDefined
        expect(getAllByRole('spinbutton').length).toEqual(2)
    })

    it('should have correct values on other input', () => {
        const { getAllByRole } = render(<Converter />)
        fireEvent.change(getAllByRole('spinbutton')[1], { target: { value: '2' } })
        //userEvent.type(getAllByRole('spinbutton')[0], '2')
        //const { rerender } = render(<Converter />)
        //screen.debug()
        //console.log(getAllByRole('spinbutton'))
        //expect(getAllByRole('spinbutton')[1]).toHaveValue('1.2')
    })
    it.skip('should have correct values on other input', () => {
        const converter = shallow(<Converter />)
        expect(converter.contains('Converter')).toEqual(true)
        expect(converter.exists(CurrencyRow)).toEqual(true)
    })
})