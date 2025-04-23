import img from "../assets/images/principal.jpg";
import imagen from "../assets/images/javier.png";
import pastores from "../assets/images/principalDos.jpg";

import pastorDesktop from "../assets/images/pastorDesktop.webp";
import pastorMobile from "../assets/images/pastorMobile.webp";

function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="text-gray-300 relative">
        <picture>
          {/* Imagen para pantallas grandes (desktop) */}
          <source srcSet={pastorDesktop} media="(min-width: 768px)" />
          {/* Imagen para pantallas pequeñas (mobile) */}
          <img
            className="w-full max-h-[100vh] object-cover relative"
            src={pastorMobile}
            alt="Pastor"
          />
        </picture>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-8xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Quiénes Somos
          </h1>
          <p className="text-sm sm:text-xl max-w-3xl mx-auto">
            Conoce más sobre nuestra iglesia, nuestra visión, misión y valores
            que nos guían.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-[60px] md:py-[100px] bg-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Nuestra Historia
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                Iglesia El Encuentro nació en el año 2010 con un pequeño grupo
                de familias que se reunían en un hogar para estudiar la Biblia y
                orar juntos. Con el tiempo, este grupo creció en número y en
                propósito.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                En 2015, nos mudamos a nuestro actual edificio, lo que nos
                permitió expandir nuestros ministerios y alcanzar a más personas
                en nuestra comunidad.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Hoy, somos una congregación vibrante y diversa, comprometida con
                compartir el amor de Cristo y servir a nuestra comunidad local.
              </p>
            </div>
            <div className="bg-gray-200 h-64 md:h-96 rounded-lg mt-6 md:mt-0"></div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Nuestra Visión y Misión
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-10 w-10 md:h-12 md:w-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">
                Nuestra Visión
              </h3>
              <p className="text-base sm:text-lg text-gray-700 text-center">
                Ser una comunidad de fe que refleje el amor de Cristo,
                transformando vidas y impactando positivamente a nuestra
                sociedad.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-10 w-10 md:h-12 md:w-12 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">
                Nuestra Misión
              </h3>
              <p className="text-base sm:text-lg text-gray-700 text-center">
                Guiar a las personas hacia una relación personal con Jesucristo,
                equiparlas para el servicio y enviarlas a compartir el
                Evangelio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Nuestros Valores
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Estos son los principios fundamentales que guían nuestras
              decisiones y acciones como comunidad de fe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-3 md:mb-4">
                <svg
                  className="h-8 w-8 md:h-10 md:w-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                Fidelidad a la Palabra
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Creemos en la autoridad de la Biblia como la Palabra inspirada
                de Dios y nos comprometemos a enseñarla con fidelidad.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-3 md:mb-4">
                <svg
                  className="h-8 w-8 md:h-10 md:w-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                Comunidad Auténtica
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Fomentamos relaciones genuinas donde las personas pueden ser
                auténticas, crecer juntas y apoyarse mutuamente.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-3 md:mb-4">
                <svg
                  className="h-8 w-8 md:h-10 md:w-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                Amor y Compasión
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Nos esforzamos por amar a todos como Cristo nos amó, mostrando
                compasión y gracia a quienes nos rodean.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-3 md:mb-4">
                <svg
                  className="h-8 w-8 md:h-10 md:w-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                Generosidad
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Practicamos la generosidad con nuestro tiempo, talentos y
                recursos, reconociendo que todo lo que tenemos viene de Dios.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-3 md:mb-4">
                <svg
                  className="h-8 w-8 md:h-10 md:w-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                Excelencia
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Buscamos hacer todo con excelencia como para el Señor, dando lo
                mejor de nosotros en cada área de ministerio.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-3 md:mb-4">
                <svg
                  className="h-8 w-8 md:h-10 md:w-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">
                Crecimiento Continuo
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Nos comprometemos con el crecimiento espiritual continuo,
                buscando ser más como Cristo cada día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
              Nuestro Equipo de Liderazgo
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Conoce a las personas que Dios ha llamado para guiar y servir a
              nuestra congregación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 sm:h-56 md:h-64 bg-gray-200">
                <img className="w-full overflow-auto" src={img} alt="card" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  Pastor Carlos Rodríguez
                </h3>
                <p className="text-blue-600 mb-3 md:mb-4">Pastor Principal</p>
                <p className="text-sm sm:text-base text-gray-700">
                  Con más de 15 años de experiencia ministerial, el Pastor
                  Carlos lidera nuestra iglesia con sabiduría y compasión.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 sm:h-56 md:h-64 bg-gray-200">
                <img className="w-full overflow-auto" src={img} alt="card" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  Ana Martínez
                </h3>
                <p className="text-blue-600 mb-3 md:mb-4">
                  Directora de Alabanza
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  Ana coordina nuestro equipo de música y alabanza, creando
                  experiencias de adoración que nos acercan a Dios.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 sm:h-56 md:h-64 bg-gray-200">
                <img className="w-full overflow-auto" src={img} alt="card" />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  Miguel Sánchez
                </h3>
                <p className="text-blue-600 mb-3 md:mb-4">
                  Director de Jóvenes
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                  Miguel guía a nuestros jóvenes con entusiasmo y dedicación,
                  ayudándoles a crecer en su fe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-12 md:py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-3xl mx-auto">
            Te invitamos a ser parte de nuestra familia. Ven y experimenta el
            amor de Dios en un ambiente acogedor y lleno de fe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Horarios de Servicios
            </a>
            <a
              href="#"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
