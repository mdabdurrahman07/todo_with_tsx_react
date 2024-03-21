import { useContext } from "react"
import { todoContext } from "../components/TodoProvider/Todo"

export const useTodos = () => {
    const todoConsumer = useContext(todoContext)
    if(!todoConsumer){
        alert("provider must be outside")
    }
    return todoConsumer
}