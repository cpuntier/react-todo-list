import ListItem from "./ListItem"


export default function List(props) {

    return (
        props.data.map( (item) =>(
            console.log(item),
                <ListItem key = {props.id} id = {item.id} data = {props.data} setData = {props.setData} ></ListItem>
    ))
    )

}



