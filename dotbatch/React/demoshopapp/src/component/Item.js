import './Item.css';

function Item(props){
    const ItemName=props.name;
    return(
    <div>
    <p className='hru'>{ItemName}</p>
    {props.children};
    </div>);
}
export default Item;