import { useState } from "react";
import ProductItem from "../components/Product";
import useCart from "../hooks/useCart";

function Shop() {

    const [inStock, setInStock] = useState(true);

    const products = [
        { id: 4, name: 'Monitor', precio: 20, disposability: false },
        { id: 3, name: 'Teclado', precio: 20, disposability: true },
        { id: 2, name: 'Mouse', precio: 20, disposability: true },
        { id: 1, name: 'Laptop', precio: 20, disposability: true },
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
        <div className="max-w-7xl mx-auto px-4 py-6">
            <header className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                <h1 className="text-3xl font-bold text-gray-900">Tienda</h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1.5 rounded-full">
                        🛒 {cartCount} producto(s)
                    </span>
                    <button
                        onClick={showCart}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors cursor-pointer"
                    >
                        Ver Carrito
                    </button>
                    <button
                        onClick={() => setInStock(prev => !prev)}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
                    >
                        {inStock ? "Mostrar productos en falta" : "Mostrar productos disponibles"}
                    </button>
                </div>
            </header>

            {products.filter(product => product.disposability === inStock).length === 0 ? (
                <p className="text-center text-gray-500 py-12">No hay productos que mostrar.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.filter(product => product.disposability === inStock).map((product) => (
                        <ProductItem key={product.id} name={product.name} precio={product.precio} disposability={product.disposability} onAddToCart={() => addToCart(product)}/>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Shop
