import { useState } from 'react';
import Animate from '../example/animate';
import Panel, { TemaContext } from '../example/contex';

function HomePage() {
  const [tema, setTema] = useState('claro');

  return (
    <section className="flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Bienvenido a FSMa
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-8">
        Esta es la p&aacute;gina de inicio de tu aplicaci&oacute;n. Explora los enlaces para descubrir m&aacute;s.
      </p>
      <div className="w-full max-w-md">
        <Animate />
      </div>
      <div>
        <TemaContext.Provider value={tema}>
          <button onClick={() => setTema(tema === 'claro' ? 'oscuro' : 'claro')}>
            Cambiar tema
          </button>
          <Panel />
        </TemaContext.Provider>
      </div>
    </section>
  );
}

export default HomePage;
