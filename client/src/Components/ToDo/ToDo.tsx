import { useEffect, useState } from "react";

interface ToDo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const TODO: React.FC = () => {
    const [todos, setTodos] = useState<ToDo[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchToDos() {
            let todos: ToDo[] = await makeTodos(10)
            setTodos(todos)
            setLoading(false)
        }

        fetchToDos()

    }, [])

    const onSelectChange = (item: ToDo) => {
        let org = todos.filter(x => x.id !== item.id)
        item.completed = !item.completed

        setTodos([...org, item])
    }

    return (
        <div className="">
            {loading && <div className="">Loading...</div>}
            {todos && todos.length &&
                <>
                    <div className="">Completed: <p>{todos.filter((x: any) => x.completed === true).length}</p></div>
                    {todos.map(item => (
                        <div className="" key={item.id}>
                            {item.title}
                            <input type="checkbox" checked={item.completed} onChange={() => onSelectChange(item)} />
                        </div>
                    ))}
                </>}

        </div>

    )
}

export default TODO;


export const makeTodos = (n: number): Promise<ToDo[]> => {
    return new Promise((resolve, reject) => {
        const num = n || 15;
        const todos: ToDo[] = [];
        for (let i = 0; i < num; i++) {
            todos.push({
                id: i,
                userId: i,
                title: `Todo item ${i}`,
                // completed: [true, false][Math.floor(Math.random() * 2)],
                completed: true
            });
        }
        resolve(todos);
    })

};