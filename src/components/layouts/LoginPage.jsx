import { useNavigate } from "react-router-dom";

function LoginPage(){
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/admin');
    }

    return (
        <>
            <h1>Iniciar Sesión</h1>
            <button onClick={handleLogin}>Ingresar</button> 
        </>
    )
}

export default LoginPage;