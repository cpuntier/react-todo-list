import { useRef } from "react"

export default function AddTask(props) {

    const inputRef = useRef(null)

    function handleAdd(){
        // console.log(inputRef.current.value)        
        props.setData([...props.data, {content: inputRef.current.value, done: false, id:  props.data.length ?  props.data[props.data.length-1].id+1:1 }])
        inputRef.current.value = "";
    }


    return (
        <>
            <input ref = {inputRef} type="text"  />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}