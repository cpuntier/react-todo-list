import { useRef, useState } from "react";

export default function ListItem(props) {

    const inputRef = useRef(null);
    const [editListItem, setEditListItem] = useState(false);
    const [input, setInput] = useState(props.content)



    function handleDelete() {
        const data = props.data
        const newData = data.filter((item) => item.id != props.id)
        props.setData(newData);
    }

    function editedListItem() {
        const data = props.data;
        // console.log(props.data);
        let obj = props.data[props.id-1];
        // console.log(obj);
        obj.content = inputRef.current.value;
        data[props.id] = obj;
        // console.log(data);
        // props.setData(data);
        setInput(obj.content);
    }

    function savedListItem(){
        const data = props.data;
        let obj = props.data[props.id-1]
        obj.content = inputRef.current.value;
        data[props.id] = obj;
        setData(data);       
        setEditListItem(!editListItem);
    }


    return (
        <>
            <li>

                {editListItem ?
                    <>
                        <label>
                            <input ref = {inputRef} type="text" value={input} onChange={editedListItem} />
                        </label>

                        <button onClick={() => savedListItem}>Save</button>
                    </>
                    :
                    <>
                        <label>
                            <input type="checkbox" checked={props.done} /> <span>{props.content}</span>
                        </label>

                        <button onClick={() => setEditListItem(!editListItem)}>Edit</button>
                        <button onClick={handleDelete}>Delete</button>
                    </>}
            </li>
        </>
    )
}