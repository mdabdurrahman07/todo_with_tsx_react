import { Key } from "react";
import { useTodos } from "../../hooks/useTodo.jsx";


const AllTodos = () => {
    const {todo} = useTodos()
    let filterValues = todo;
    return (
        <ul>
            {filterValues.map((todo)=>{
                return <li key={todo?.id}>

                </li>
            })}
        </ul>
    );
};

export default AllTodos;