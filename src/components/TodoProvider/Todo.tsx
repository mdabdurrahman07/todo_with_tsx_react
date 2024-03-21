/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useState } from "react";


export type TodoProps = {
    children: ReactNode
}

export type Todo = {
   id:string;
   task: string | number;
   completed: boolean;
   createdAt: Date;
}

export type TodoContext = {
    todo:Todo[];
    handleAddTodo: (task: string) => void;
}

 export const todoContext =  createContext<TodoContext | null>(null)




 export const TodoProviders = ({children}: TodoProps) =>{
    const [todo , SetTodo] = useState<Todo[]>([])

    const handleAddTodo = (task:string) =>{
        SetTodo((prev) =>{
            const newTodo: Todo[] = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt: new Date()

                },
                ...prev
              
                
            ]
            console.log("prev value",  prev)
            console.log("newly typed value" ,newTodo);
            return newTodo
            

          
        })
    }
        return <todoContext.Provider value={{todo , handleAddTodo}}>
            {children}
        </todoContext.Provider>
 }

//  consumer hooks

