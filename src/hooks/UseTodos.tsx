import { useContext } from "react";
import { todoContext } from "../components/TodoProvider/Todo";

const UseTodos = () => {
    const todosConsumer = useContext(todoContext)
    if(!todosConsumer){
        throw new Error("Provider maybe outside of the context")
    }
    return 
};

export default UseTodos;