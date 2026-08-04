
async function fetchExample(url){
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('Error en la respuesta '+response.status);
        }
        const data = await response.json();
        console.log('Datos Recibidos ', data)
    } catch (error) {
        console.log("Error en la petición: ", error)
    }
}

export default fetchExample;

