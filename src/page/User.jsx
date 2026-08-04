import fetchExample from "../api/fetchExample";
import axiosExample from "../api/axiosExample";

function UserPage() {

    console.log(fetchExample('https://jsonplaceholder.typicode.com/users25'));
    console.log(axiosExample('https://jsonplaceholder.typicode.com/users25'));

  return (
    <section className="py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Lista de usuarios</h1>
      <div className="prose prose-gray max-w-3xl">
        <p className="text-lg text-gray-600 leading-relaxed">
          Somos un equipo apasionado por la tecnolog&iacute;a y el desarrollo de aplicaciones web
          modernas. Nuestro objetivo es construir experiencias digitales &uacute;tiles, accesibles
          y con un dise&ntilde;o cuidado.
        </p>
      </div>
    </section>
  );
}

export default UserPage;