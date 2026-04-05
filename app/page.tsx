export default function Home() {
  return (
    <main className="min-h-screen bg-gray-300 flex justify-center items-center p-6">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-blue-900 text-white p-8 flex items-center gap-6">
          <img
            src="/foto.jpg"
            alt="foto"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />

          <div>
            <h1 className="text-4xl font-bold">
              Camilo Esteban Rubiano Santoro
            </h1>
            <p className="mt-2 text-lg">
              Estudiante de Ingeniería de Sistemas / Ingeniería Industrial
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3">

          {/* IZQUIERDA */}
          <div className="bg-gray-100 p-6 text-black">

            <h2 className="font-bold text-xl">Acerca de mí</h2>
            <p className="mt-2 text-sm">
              Estudiante de 7° semestre de Ingeniería de Sistemas e Industrial en la Universidad de Ibagué.
              Con conocimientos en Java, Python y Excel. Enfocado en resolver problemas y optimizar procesos.
            </p>

            <div className="mt-6 text-sm">
              <p><b>📞</b> 3157556596</p>
              <p><b>✉️</b> estebancamilo718@gmail.com</p>
              <p><b>📍</b> Ibagué, Tolima</p>
            </div>

            <h2 className="mt-6 font-bold text-lg">Idiomas</h2>
            <p>Español: Nativo</p>
            <p>Inglés: Intermedio</p>

            <h2 className="mt-6 font-bold text-lg">Habilidades</h2>
            <ul className="list-disc ml-4 text-sm">
              <li>Resolución de problemas</li>
              <li>Gestión de proyectos</li>
              <li>Modelado de sistemas</li>
              <li>Análisis de procesos</li>
            </ul>

          </div>

          {/* DERECHA */}
          <div className="col-span-2 p-6 text-black">

            <h2 className="font-bold text-xl">Experiencia Laboral</h2>
            <p className="mt-2 font-semibold">
              Apoyo Administrativo – Negocio Familiar
            </p>
            <p className="text-sm">
              Atención a clientes, organización de documentación y gestión administrativa.
            </p>
            <p className="text-sm text-gray-600">2024 - Actualidad</p>

            <h2 className="mt-6 font-bold text-xl">Formación Académica</h2>
            <p className="font-semibold">Colegio La Presentación Ibagué</p>
            <p className="text-sm">Bachiller Académico (2021)</p>

            <p className="font-semibold mt-2">Universidad de Ibagué</p>
            <p className="text-sm">
              Ingeniería de Sistemas / Ingeniería Industrial (2022 - Actualidad)
            </p>

            <h2 className="mt-6 font-bold text-xl">Herramientas</h2>
            <ul className="list-disc ml-4 text-sm">
              <li>Java, Python, SQL</li>
              <li>Excel, Word</li>
              <li>Modelado de procesos</li>
              <li>Scrum</li>
            </ul>

          </div>

        </div>
      </div>
    </main>
  );
}