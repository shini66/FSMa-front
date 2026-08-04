function CartArticle({title, body}){

    return (
        <div style={{ border: '1px solid #4f8ef7', padding: '12px', margin: '8px', borderRadius: '8px' }}>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default CartArticle;