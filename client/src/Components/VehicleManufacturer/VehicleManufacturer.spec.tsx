// import { render, screen, waitFor, waitForElementToBeRemoved, act } from '@testing-library/react'
// import VehicleManufacturer from './VehicleManufacturer'

// describe('Vehicle Manufactrer', () => {
//     it('should render component', async () => [
//         await render(<VehicleManufacturer />)
//     ])

//     it('should show loading text', async () => {
//         const { getByText } = render(<VehicleManufacturer />)
//         expect(getByText('Loading...')).toBeVisible()
//     })
//     it('should have render button', async () => {
//         const { getByText } = render(<VehicleManufacturer />)
//         await waitForElementToBeRemoved(() => getByText('Loading...'))

//         expect(getByText('Render')).toBeVisible()
//     })

// })

// describe('Vehicle Manufaturer with mocks', () => {
//     beforeEach(() => {
//         global.fetch = jest.fn().mockImplementation(() => {
//             return Promise.resolve(new Response(JSON.stringify({ Results: [{ Country: "USA", Mfr_CommonName: "TESLA" }] })));
//         });
//     })

//     afterEach(() => {
//         jest.restoreAllMocks();
//     })

//     it.only('should show loading text', async () => {
//         await act(async () => {
//             const { getByText } = await render(<VehicleManufacturer />)
//             await waitForElementToBeRemoved(() => getByText('Loading...'))
//             screen.debug()
//         })

//         // expect(getByText('Loading...')).toBeVisible()
//     })
// })



