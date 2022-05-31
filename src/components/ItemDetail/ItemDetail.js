//recibe la prop 'data' del componente padre ItemDetailContainer
const ItemDetail = ({data, title}) => {
    console.log('data desde ItemDetail: ', data);
    return(
        <>
        <h2>{title}</h2>
        <div>
            <h3>{data.title}</h3>
            <p>{data.price}</p>
        </div>

        </>
    )
}

export default ItemDetail