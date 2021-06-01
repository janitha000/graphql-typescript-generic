import { fireEvent, render, screen } from "@testing-library/react"
import Count from "./Count"

describe('Count component', () => {
    it('it should render ', () => {
        const { getByText } = render(<Count />)
        expect(getByText('Current value of the counter is 0')).toBeInTheDocument()
        expect(getByText('Increment')).toBeInTheDocument()
        expect(getByText('Decrement')).toBeInTheDocument()
    })

    it('should increase the count', () => {
        const { getByText } = render(<Count />)
        const incrementBtn = getByText('Increment')

        fireEvent.click(incrementBtn)
        expect(getByText('Current value of the counter is 1')).toBeInTheDocument()

    })

    it('should decrease the count', () => {
        const { getByText } = render(<Count />)
        const incrementBtn = getByText('Decrement')

        fireEvent.click(incrementBtn)
        expect(getByText('Current value of the counter is -1')).toBeInTheDocument()
        screen.debug()

    })




})