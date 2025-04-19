import { Link } from "react-router-dom";
import backgroundVideo from "../assets/video/video.mp4";
import imgCard from "../assets/images/reunionDom.jpg";
import imgCard2 from "../assets/images/principalDos.jpg";
import imgCard3 from "../assets/images/reunion.webp";
import Card from "../components/Card";



function Home() {
  // Forzar actualización de renderizado
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <video
          className="w-full h-screen object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            filter: "brightness(.3)", // Ajusta el brillo del video
          }}
        ></video>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Bienvenidos a Iglesia El Encuentro
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            El lugar de tu encuentro con Dios
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/about"
              className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300 text-center"
            >Conócenos
            </Link>
            <Link
              to="/events"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition duration-300 text-center"
            >
              Próximos Eventos
            </Link>
          </div>
        </div>
      </section>

 
      {/* Services Section */}
      <section className="py-16 bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Te invitamos a ser parte de nuestra comunidad y participar en
              nuestros servicios semanales.
            </p>
          </div>
          {/* card services */}
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            
          <Card
              image={imgCard3}
              title="Cuarto de Oración"
              subtitle="Domingos a las 9:30hs"
              description="Un espacio para alinear tu corazón con el plan de Dios a través de la oración."
            />

            <Card
              image={imgCard2}
              title="Reunión de Oración"
              subtitle="Miércoles a las 19:00hs"
              description="Únete a nosotros para un tiempo de oración y comunión con Dios."
             
            />

            <Card
              image={imgCard}
              title="Reunión Central"
              subtitle="Domingos a las 10:30hs"
              description="Únete a nosotros para alabanza, adoración y un mensaje inspirador de la Palabra de Dios."
            />

          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Próximos Eventos
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Mantente al día con nuestras actividades y eventos especiales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-blue-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-1">
                  15 de Abril, 2025
                </div>
                <h3 className="text-xl font-bold mb-2">Retiro Espiritual</h3>
                <p className="text-gray-600 mb-4">
                  Un fin de semana de renovación espiritual, oración y comunión.
                </p>
                <Link
                  to="/events"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Más información →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-green-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-1">
                  30 de Abril, 2025
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Concierto de Alabanza
                </h3>
                <p className="text-gray-600 mb-4">
                  Una noche especial de adoración y alabanza con músicos
                  invitados.
                </p>
                <Link
                  to="/events"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Más información →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-yellow-200"></div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-1">
                  10 de Mayo, 2025
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Campaña de Servicio Comunitario
                </h3>
                <p className="text-gray-600 mb-4">
                  Únete a nosotros para servir a nuestra comunidad local.
                </p>
                <Link
                  to="/events"
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Más información →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/events"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-300"
            >
              Ver Todos los Eventos
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Testimonios
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Escucha lo que nuestra comunidad tiene que decir sobre su
              experiencia en Iglesia El Encuentro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Yani y Matias</h4>
                  <p className="text-gray-600 text-sm">Miembro desde 2020</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Yanina y Matías enfrentaron temores de infertilidad por un quiste y SOP. Milagrosamente, el quiste disminuyó y una palabra profética les dio esperanza. Hoy disfrutan a su hijo Benjamín, testimonio de la fidelidad de Dios."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Juan Pérez</h4>
                  <p className="text-gray-600 text-sm">Miembro desde 2018</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "En el Ministerio de Evangelismo, Sergio experimentó el respaldo de Dios y aprendió que evangelizar es para todos, basado en el testimonio personal y buscando un encuentro genuino con Dios, reflejando su amor y compasión."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Laura Ramírez</h4>
                  <p className="text-gray-600 text-sm">Miembro desde 2022</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "La infancia de Martín fue un escape del abuso, hallando paz en la iglesia. De adulto, se perdió, pero al volver a la iglesia, esa paz regresó. Hoy, rendido a Dios, reconoce su propósito y su constante fidelidad."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            ¿Listo para visitarnos?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Te esperamos este domingo para compartir juntos. Nuestra comunidad
            está lista para recibirte con los brazos abiertos.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-6 py-4 rounded-md font-medium text-base sm:text-lg hover:bg-gray-100 transition duration-300 inline-block"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
