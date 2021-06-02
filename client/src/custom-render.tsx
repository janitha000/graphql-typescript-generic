import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router"
import { UserContextProvider } from "./Contexts/UserContext"
import React from 'react'



const Wrapper = ({ children }: any) => {
    return (
        <UserContextProvider>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </UserContextProvider>
    )
}

const customRender = (ui: any, options?: any) =>
    render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react'

export { customRender as render }