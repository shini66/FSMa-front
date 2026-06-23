import ListUser from "../components/ListUser";

function App() {
  
  const users = [
    { id: 1, name: 'Laptop', age: 20, address: {city: 'Asu', country: "PY"} },
    { id: 2, name: 'Mouse', age: 20, address: {city: 'Asu', country: "PY"} },
    { id: 3, name: 'Teclado', age: 20, address: {city: 'Asu', country: "PY"} },
  ];

  return (
    <>
      <ListUser listUsers={users}/>
    </>
  )
}

export default App
