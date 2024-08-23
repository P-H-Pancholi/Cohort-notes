import { useState } from "react"

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div>
            <input type="text" placeholder="title" onChange={function (e) {
                setTitle(e.target.value) // e.target => html element
            }}/>
            <br /><br /><br />
            <input type="text" placeholder="description" onChange={function (e) {
                setDescription(e.target.value) // e.target => html element
            }}/>
            <br /><br /><br />
            <button onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        name: title,
                        description: description
                    }),
                    headers: {
                        "Content-type" : "application/json"
                    }
                }).then(
                    async function (res) {
                        const json = await res.json()
                        alert("Todo added")
                    })
            }}>Add a Todo</button>
        </div>
    )
}