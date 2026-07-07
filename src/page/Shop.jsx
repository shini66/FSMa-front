import ProductItem from "../components/Product";
import useCart from "../hooks/useCart";

function Shop() {
  
    const products = [
        { id: 1, name: 'Laptop', precio: 20, disposability: true },
        { id: 2, name: 'Mouse', precio: 20, disposability: true },
        { id: 3, name: 'Teclado', precio: 20, disposability: true },
        { id: 4, name: 'Monitor', precio: 20, disposability: false },
    ];

    const { cart, cartTotal, cartCount, addToCart } = useCart();

    function showCart(){
        if(cart.length !== 0){
            const productList = cart.map(product => `${product.name} - ${product.precio}`).join("\n");
            alert(`Productos a comprar: \n\n ${productList} \n Total: ${cartTotal}`)
        }else{
            alert("Lista Vacía")
        }
    }

    return (
        <>
            <header>
                <h1>Tienda</h1>
                <p>Carrito: {cartCount} producto(s)</p>
                <button onClick={showCart}>Ver Carrito</button>
            </header>
            <div>
                {products.map((product) => (
                    <ProductItem key={product.id} name={product.name} precio={product.precio} disposability={product.disposability} onAddToCart={() => addToCart(product)}/>
                ))}
            </div>
        </>
    )
}

export default Shop
