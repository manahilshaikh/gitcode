import { Edit } from "@mui/icons-material";
import React, { useState } from "react";



export const About=() =>{
    const [todo,setTodo] =useState([])
    const [copytodo,setCopyTodo] =useState([])
    const [text,setText] =useState("")
    const [selectIndex,setSelectIndex] =useState(null)
    const [edit,setEdit]=useState(false)
    const handleAdd=() =>{
        if(edit){
         const editTask=todo.map((item,index)=>index===selectIndex ? text:item)
            setTodo(editTask)
            setCopyTodo(editTask)
            setText('')
            setEdit(false)
        }else{
        if(!text.trim()) return
        setTodo([...todo,text])


        
        setCopyTodo([...todo,text])
        setText("")
    }
    }
        const handleDelete=(index,id) =>{
            const taskDelete=todo.filter((item,ind)=>ind!== id)
            setTodo(taskDelete)
        }
            const handleSerach =(value) =>{
                const searchTast=copytodo.filter((elem)=>
                elem.toUpperCase().includes(value.toUpperCase()))
                setTodo(searchTast)
            }
                const handleEdit=(item,ind)=>{
                    setSelectIndex(ind)
                    setText(item)
                    setEdit(true)
                }
    return (

        <div>
            <h1>ToDO List</h1>
            <input type="text" placeholder="Search..."
             onChange={(e)=>handleSerach(e.target.value)}/>
            <input type="text"placeholder="Add Task" value={text}
            onChange={(e)=>setText(e.target.value)} />
            <button onClick={()=>handleAdd()}>
                {/* {edit ?"Edit":"Add"} */}
                AddTask</button>
            <ul>
                {todo.map((item,index)=>{
                    return(
                        <li key={index}>{item}
                        <button onClick={()=>handleDelete(item,index)}>Delete</button>
                        <button onClick={()=>handleEdit(item,index)}>Edit</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}