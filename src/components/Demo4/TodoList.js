import React, {useState} from "react"
import TodoForm from "./TodoForm"

const TodoList = () => {
    /* todoList是数组 */
    const [todos, setTodos] = useState([]);
    function setValue(text) {
        setTodos([{ text }, ...todos]);
        console.log('todos', todos);
    }
 
    return (
        <div>
            <TodoForm onSubmit={ setValue } />
            <div>
                {
                    todos.map((element, index) => {
                        console.log('ele', element);
                        return (
                            <div key={index} >
                                { element.text }
                            </div>
                        )
                    })
                }
            </div>
            <button onClick={ () => { setTodos([]) } }>clear</button>
        </div>
    )
}

export default TodoList