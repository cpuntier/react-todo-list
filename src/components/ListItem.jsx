import { useRef, useState,useEffect } from "react";

export default function ListItem(props) {
    const currentItem = props.data.find((item) => item.id === props.id);

    const inputRef = useRef(null);
    const [editListItem, setEditListItem] = useState(false);
    const [input, setInput] = useState(currentItem.content);
    const [checked, setChecked] = useState(currentItem.done);


    console.log(props.id,currentItem);




    function handleDelete() {
        const data = props.data
        const newData = data.filter((item) => item.id != props.id)
        console.log(newData);
        props.setData(newData);
    }

    function editedListItem() {
        setInput(inputRef.current.value);
    }

    function savedListItem(){
        const obj = {...props.data.find((item) => item.id == props.id)}
        obj.content = input;
        
        props.data.splice(props.data.indexOf(props.data.find((item)=> props.id === item.id)),1,obj);
        setEditListItem(false);
        props.setData(props.data);
    }

    function checkHandler(){
        currentItem.done = !currentItem.done;
        setChecked(!checked)
    }

    return (
        <>
            <li key = {props.id}>

                {editListItem ?
                    <>
                        <label>
                            <input ref = {inputRef} type="text" value={input} onChange={editedListItem} />
                        </label>

                        <button onClick={savedListItem}>Save</button>
                    </>
                    :
                    <>
                        <label>
                            <input type="checkbox" checked={currentItem.done}  onChange={checkHandler}/> <span ref = {inputRef}>{currentItem.content}</span>
                        </label>

                        <button onClick={() => setEditListItem(true)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </>}
            </li>
        </>
    )
}