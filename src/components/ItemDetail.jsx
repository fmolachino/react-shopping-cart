
//TODO Finish the detailed view.

export const ItemDetail = ({product}) => {
    return (
        <>
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.stock}</div>
          <img src={product.image} alt={product.name} />
        </>
    )
}