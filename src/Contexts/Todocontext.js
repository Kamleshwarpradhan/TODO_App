import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "  Todo msg",
            completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
})

export const TodoProvider = TodoContext.Provider;

// Custom Hooks to use given Todo Context
export const useTodo = ()=>{
    return useContext(TodoContext);
}