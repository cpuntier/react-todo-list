import { useRef, useState, useEffect } from "react";

export default function ListItem(props) {
    console.log("RERENDER")
    const currentItem = props.data.find((item) => item.id === props.id);
    const inputRef = useRef(null);
    console.log("This was found", props.data.find((item) => item.id === props.id))
    console.log("current item", currentItem);

    const [editListItem, setEditListItem] = useState(false);
    const [input, setInput] = useState("");
    const [checked, setChecked] = useState(currentItem.done);

    function handleDelete() {
        const data = props.data
        const newData = data.filter((item) => item.id != props.id)
        //     console.log(newData);
        props.setData(newData);
        setChecked(!checked);
    }

    function editedListItem() {
        setInput(inputRef.current.value);
    }

    function savedListItem() {
        const obj = { ...props.data.find((item) => item.id == props.id) }
        obj.content = input;

        props.data.splice(props.data.indexOf(props.data.find((item) => props.id === item.id)), 1, obj);
        setEditListItem(false);
        props.setData(props.data);
    }

    function checkHandler() {
        currentItem.done = !currentItem.done;
        setChecked(!checked)
    }

    function editHandler() {
        setInput(currentItem.content);
        setEditListItem(true);
    }

    return (
        <>
            <li key={props.id} style={{ display: "flex", justifyContent: "space-between" }}>

                    {editListItem ?
                        <>
                            <label >
                                <input ref={inputRef} type="text" value={input} onChange={editedListItem} />
                            </label>

                            <button onClick={savedListItem}>Save</button>
                        </>
                        :
                        <>
                            <label>
                                <input type="checkbox" checked={currentItem.done} onChange={checkHandler} /> <span style={{ textDecoration: checked ? "line-through" : "" }}>{currentItem.content}</span>
                            </label>
                            <div>

                            <button onClick={() => { console.log(currentItem.content); setInput(currentItem.content); setEditListItem(true); }}>Edit</button>
                            <button onClick={handleDelete} disabled={!checked}>Delete</button>
                            </div>
                        </>}


            </li>
        </>
    )
}