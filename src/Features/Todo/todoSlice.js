import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialStatae = {
    Todos : [
        {
            id: 1, text: "Hello World"
        }
    ]
}

export const TodoSlice = createSlice ({
    name:"todo",
    initialState:initialStatae,
    reducers: {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text: action.payload,
            }
            state.Todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.Todos = state.Todos.filter((todo) => todo.id !== action.payload)
        }
    }
})


export const {addTodo, removeTodo} = TodoSlice.actions;

export default TodoSlice.reducer;