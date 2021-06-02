import { act, fireEvent, getByRole, render, screen, waitFor, waitForDomChange, waitForElementToBeRemoved } from "@testing-library/react"
import { makeTodos } from './ToDo'
import TODO from "./ToDo"
import { title } from "process";
import React from 'react';

let todos: any;
let todoCount = 0;

describe('TODO should render', () => {
    beforeAll(async () => {
        todos = await makeTodos(10)
        todoCount = todos.filter((x: any) => x.completed === true).length;
    })


    // beforeEach(() => {
    //     act(() => {
    //         render(<TODO />)
    //     })
    // })

    it('should remove loading', async () => {
        act(() => {
            render(<TODO />)
        })
        await waitForElementToBeRemoved(() => screen.getByText("Loading..."))
    })

    it('should have todos loaded', async () => {
        render(<TODO />)

        await waitForElementToBeRemoved(() => screen.getByText("Loading..."))
        todos.slice(0, 15).forEach((td: any) => {
            expect(screen.getByText(td.title)).toBeInTheDocument();
        });
    })

    it('should display no of completed items', async () => {
        render(<TODO />)
        await waitForElementToBeRemoved(() => screen.getByText("Loading..."))
        expect(screen.getByText('Completed:')).toBeInTheDocument()
        expect(screen.getByText(todoCount)).toBeInTheDocument()
    })

    it('should reduce no of completed items', async () => {
        render(<TODO />)
        await waitForElementToBeRemoved(() => screen.getByText("Loading..."))
        fireEvent.click(screen.getAllByRole('checkbox')[0])
        const completed = await waitFor(() => screen.getByText('9'))
        expect(completed).toHaveTextContent('9')

    })





})

