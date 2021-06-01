import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import { makeTodos } from './ToDo'
import TODO from "./ToDo"
import { title } from "process";

let todos: any;
let todoCount = 0;

describe('TODO should render', () => {
    beforeAll(async () => {
        todos = await makeTodos(10)
        todoCount = todos.filter((x: any) => x.completed === true).length;
    })
    it('should render component', () => {
        act(() => {
            render(<TODO />)
        })
    })

    it('should show loading', () => {
        act(() => {
            render(<TODO />)
            expect(screen.getByText("Loading...")).toBeInTheDocument()
        })

    })

    it('should remove loading', async () => {
        act(async () => {
            render(<TODO />)
            await waitForElementToBeRemoved(() => screen.getByText("Loading..."))
        })
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

    // it('should reduce no of completed items', async () => {
    //     const { getByText } = render(<TODO />)
    //     await waitForElementToBeRemoved(() => screen.getByText("Loading..."))
    //     fireEvent.click(getByText(todos[0].title))

    //     const completed = await waitFor(() => getByText('9'))
    //     expect(completed).toHaveTextContent('9')

    // })


})

