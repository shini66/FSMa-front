import CartArticle from "./CartArticle";
import { useState, useEffect } from "react";
import axios from "axios";

function ListArticle(){

    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setArticles(response.data);
            } catch (err) {
                setError(err.message);
            }
        }

        loadUsers();
    }, []);

    if(error){
        return `Ocurrió un error: ${error}`
    }

    if(!articles.length){
        return `Cargando datos....`
    }
    
    return (    
        <div>
            <h2>Lista de Usuarios</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((user) => (
                    <CartArticle
                        key={user.id}
                        title={user.title}
                        body={user.body}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListArticle;