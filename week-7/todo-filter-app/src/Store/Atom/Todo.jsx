import {atom, selector} from "recoil"

export const todosAtom = atom({
    key: "todosAtom",
    default: []
})

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
})

export const filteredTodo = selector({
    key: "filteredTodo",
    get: ({get}) => {
        const todos = get(todosAtom)
        const filter = get(filterAtom)
        return todos.filter(x => x.title.includes(filter) || x.description.includes(filter))
    }
})