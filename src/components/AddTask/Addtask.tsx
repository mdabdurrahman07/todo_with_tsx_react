import { Button, Input } from "keep-react";
import { FormEvent, useState } from "react";
import { useTodos } from '../../hooks/useTodo.jsx';






const Addtask = () => {
  const {handleAddTodo} = useTodos()
  const [todo, Settodo] = useState("")
  const handleTodoForm = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleAddTodo(todo)
    Settodo("")
  }
  console.log(todo)
    return (
        <div>
      <form onSubmit={handleTodoForm} className="flex justify-center items-center gap-5">
        <div>
        <Input placeholder="Enter Task" value={todo} onChange={(e) => Settodo(e?.target?.value)} type="text"/>
        </div>
        <div>
        <Button type="submit" color="success">ADD</Button>
        </div>
      </form>
        </div>
    );
};

export default Addtask;