import Item from './Item'
const ItemList = (props) => {
  return (
      <>
          {props.products.map(x=>
              <Item key={"key"+x.id} id={x.id} name={x.name} price={x.price} stock={10} description={x.description} category={x.category} img={x.img}/>
          )}
      </>
  )
}

export default ItemList;
