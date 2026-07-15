function Product({name, precio, disposability, onAddToCart}) {
    return (
        <article className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-2xl font-bold text-indigo-600">${precio}</p>
            <p className={disposability ? "text-green-600 text-sm font-medium" : "text-red-500 text-sm font-medium"}>
                {disposability ? '✅ Disponible' : '❌ Sin stock'}
            </p>
            <button
                onClick={onAddToCart}
                disabled={!disposability}
                className="mt-auto w-full py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800"
            >
                Agregar al Carrito
            </button>
        </article>
    );
}

export default Product;