import React, { useState } from 'react'
import './ToDoList.css'

export default function ToDoList() {
    let to_do_items = [
        {id: 1,
        name: 'Test',
        completed: false,
        }, {
        id: 2,
        name: 'Test 2 ',
        completed: false,
        },
        {
        id: 3,
        name: 'Test 3',
        completed: false,
        }

    ]

    const [items, setItems] = useState(to_do_items)

    const completeToDo = (key) => {
        let newArray = items.map((value)=>{
            
            if (value.id === key){
                value = { id: value.id, name: value.name, completed: !value.completed}
                return value
            }
            return value
        })
        setItems(newArray)

    }

    const deleteToDo = (key) => {
        let newArray = items.filter((value)=>{
            
                return value.id !== key
            
        })
        setItems(newArray)

    }

    const addToDo = (e) => {
        if (e.keyCode === 13) {
            const newToDo = {id: Date.now(), name: e.target.value, completed: false}
            //setItems([newToDo, ...items]); // ESTE FUNCIONA
            setItems((prevState)=>([ ...prevState, newToDo])) // ESTO NO FUNCIONA (NO SE POR QUE)
         }

    }
    return (<>
    <input type="text" onKeyUp={(e)=>addToDo(e)}></input>
    {/* {todos} */}
        {items.length !== 0 && items.map((value) =>{
            return ( <div className={value.completed? "completed": "not-completed"} key={value.id}>{value.name}
            <input type="button" onClick={()=>deleteToDo(value.id)} value="Delete"></input>
            <input type="button" onClick={()=>completeToDo(value.id)}value="Complete"></input>
            </div>) 

        })}</>
    )
}
