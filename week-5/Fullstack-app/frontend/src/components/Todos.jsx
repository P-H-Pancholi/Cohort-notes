

export function Todos({todos}) {
    return (
        <div>
            {todos.map(function(todo) {
                return <div>
                    <h1>{todo.name}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={(event) => {
                        alert(event.target)
                    }}>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
                </div>
            })}
        </div>
    )
}