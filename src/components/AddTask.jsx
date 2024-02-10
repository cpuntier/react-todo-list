import { useRef } from "react"

export default function AddTask(props) {

    const inputRef = useRef(null)

    function handleAdd(){
        // console.log(inputRef.current.value)        
        props.setData([{content: inputRef.current.value, done: false, id:  props.data.length ?  props.data[0].id+1:1 },...props.data])
        inputRef.current.value = "";
    }


    return (
        <>
            <input ref = {inputRef} type="text"  />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}