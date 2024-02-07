import ListItem from "./ListItem"


export default function List(props) {

    return (
        props.data.map( (item) =>(
                <ListItem content={item.content} done={item.done} id = {item.id} data = {props.data} setData = {props.setData} ></ListItem>
    ))
    )

}



