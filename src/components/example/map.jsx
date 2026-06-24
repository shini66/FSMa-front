const usuarios = [
    { id: 1, nombre: 'Ana', activo: true, salario: 1000 },
    { id: 2, nombre: 'Luis', activo: false, salario: 2000 },
    { id: 3, nombre: 'María', activo: true, salario: 900 },
];

const usuariosActivos = usuarios.filter(usuario => usuario.activo);
const totalSalario = usuarios.filter(usuario => usuario.activo).reduce((suma, usuario) => suma + usuario.salario, 0);

function MapExample(){

    return (
        <>
        <ul>
            {usuariosActivos.map(usuario => (
                <li key={usuario.id}>{usuario.nombre} - {usuario.salario}</li>
            ))}
        </ul>
        <p>total: {totalSalario}</p>
        </>
    )
}

export default MapExample;