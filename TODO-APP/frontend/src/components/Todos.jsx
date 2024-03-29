// todos={ arrays of objects}
// props likh lo
// aur function me const todos=props.todos
export function Todos({todos}) {

    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}

// export function Todos({title,description,completed}) {

//     return <div>
//         {todos.map(function(todo) {
//             return <div>
//                 <h1>{title}</h1>
//                 <h2>{description}</h2>
//                 <button>{completed == true ? "Completed" : "Mark as Complete"}</button>
//             </div>
//         })}
//     </div>
// }

