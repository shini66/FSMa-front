import ProductItem from "../components/Product";

function Shop() {
  
    const products = [
        { id: 1, name: 'Laptop', precio: 20, disposability: true },
        { id: 2, name: 'Mouse', precio: 20, disposability: true },
        { id: 3, name: 'Teclado', precio: 20, disposability: true },
        { id: 3, name: 'Monitor', precio: 20, disposability: false },
    ];

    return (
        <>
            <div>
                {products.map((product, index) => {
                    <ProductItem key={index} name={product.name} precio={product.precio} disposability={product.disposability} CB={()=>console.log('HOLA')}/>
                })}
            </div>
        </>
    )
}

export default Shop
