import axios from "axios";

async function axiosExample(url){
    try {
        const response = await axios.get(url);
        console.log('Datos Recibidos: ', response.data)
    } catch (error) {
        console.log('Error en la petición: ', error);
    }
}

export default axiosExample;