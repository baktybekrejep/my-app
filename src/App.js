import {useState} from "react";


// const App = () => {
//     const [num, setNum] = useState(0)
//     const inc = () => {
//         setNum(num + 1)
//         console.log(num)
//     }
//     const min = () => {
//         setNum(num - 1)
//         console.log(num)
//     }
//     return (<div>
//         <div>{num}</div>
//         <button onClick={inc} type="button">Bass</button>
//         <button onClick={min} type="button">Bass - </button>
//     </div>)
//
// }

// const App = () => {
//     const [str, setStr] = useState('Hello')

//     const upper = () => {
//         setStr(str.toUpperCase())
//     }
//
//     const lower = () => {
//         setStr(str.toLowerCase())
//
//     }
//     const capitalize = () => {
//         setStr(str [0].toUpperCase() + str.slice(1).toLowerCase())
//     }
//
//
//     return (
//             <div>
//                 <div>{str}</div>
//                 <button onClick={upper} type='button'>upper</button>
//                 <button onClick={lower} type='button'>lower</button>
//                 <button onClick={capitalize} type='button'>capitalize</button>
//
//             </div>
//         )
//
// }
//


const App = () => {
    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState([])


    const inputChange = (e) => setTodoText(e.target.value)


    const addTodo = () => {
        setTodoList([...todoList, todoText])
    }
    return (
        <div>
            <input onChange={inputChange} type="text"/>
            <button onClick={addTodo}>Add</button>
            <hr/>
            <ul>{
                todoList.map(it => {
                    return <li>{it}</li>
                })
            }

            </ul>
        </div>
    )
}














    export default App;
