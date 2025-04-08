import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
  // Datos de ejemplo para los eventos
  const events = [
    {
      id: 1,
      title: 'Retiro Espiritual',
      date: '15 de Abril, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Centro de Retiros El Refugio',
      description: 'Un fin de semana de renovación espiritual, oración y comunión. Ven a desconectar del mundo y conectar con Dios.',
      category: 'Retiro'
    },
    {
      id: 2,
      title: 'Concierto de Alabanza',
      date: '30 de Abril, 2025',
      time: '7:00 PM - 9:30 PM',
      location: 'Auditorio Principal',
      description: 'Una noche especial de adoración y alabanza con músicos invitados. Ven a elevar tu voz en adoración junto a toda la congregación.',
      category: 'Música'
    },
    {
      id: 3,
      title: 'Campaña de Servicio Comunitario',
      date: '10 de Mayo, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Barrio San José',
      description: 'Únete a nosotros para servir a nuestra comunidad local. Estaremos distribuyendo alimentos, ropa y ofreciendo servicios gratuitos.',
      category: 'Servicio'
    },
    {
      id: 4,
      title: 'Conferencia para Matrimonios',
      date: '24-25 de Mayo, 2025',
      time: 'Viernes 7:00 PM - Sábado 5:00 PM',
      location: 'Salón Familiar',
      description: 'Un evento especial para fortalecer los matrimonios con enseñanzas prácticas, dinámicas y tiempo de comunión.',
      category: 'Conferencia'
    },
    {
      id: 5,
      title: 'Campamento Juvenil',
      date: '15-18 de Junio, 2025',
      time: 'Todo el día',
      location: 'Campamento Montaña Alta',
      description: 'Cuatro días de aventura, diversión y crecimiento espiritual para jóvenes de 13 a 18 años.',
      category: 'Jóvenes'
    },
    {
      id: 6,
      title: 'Escuela Bíblica de Vacaciones',
      date: '7-11 de Julio, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'Instalaciones de la Iglesia',
      description: 'Una semana divertida para niños de 5 a 12 años con juegos, manualidades, música y enseñanzas bíblicas.',
      category: 'Niños'
    }
  ];

  // Función para filtrar eventos por categoría (para futuras implementaciones)
  const filterEvents = (category) => {
    if (category === 'all') return events;
    return events.filter(event => event.category === category);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Eventos</h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Descubre todas las actividades y eventos especiales que tenemos preparados para nuestra comunidad.
          </p>
        </div>
      </section>

      {/* Events Calendar Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Próximos Eventos</h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-2xl">
                Mantente al día con nuestras actividades y eventos especiales. ¡Hay algo para cada miembro de la familia!
              </p>
            </div>
            
            {/* Filtros - Para futuras implementaciones */}
            <div className="mt-6 md:mt-0 w-full md:w-auto overflow-x-auto">
              <div className="inline-flex rounded-md shadow-sm">
                <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-blue-700 bg-white border border-blue-300 rounded-l-md hover:bg-blue-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700">
                  Todos
                </button>
                <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700">
                  Conferencias
                </button>
                <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700">
                  Jóvenes
                </button>
                <button className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border-t border-b border-r border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700">
                  Niños
                </button>
              </div>
            </div>
          </div>
          
          {/* Lista de Eventos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <div className="h-40 sm:h-48 bg-blue-100 flex items-center justify-center">
                  <div className="text-blue-800 text-4xl sm:text-5xl">
                    <svg className="h-16 w-16 sm:h-20 sm:w-20" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-4 sm:p-6 flex-grow">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div className="text-xs sm:text-sm font-semibold text-blue-600 mb-1 sm:mb-0">{event.date}</div>
                    <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">{event.category}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{event.title}</h3>
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-center text-gray-600 mb-1 text-xs sm:text-sm">
                      <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="truncate">{event.time}</span>
                    </div>
                    <div className="flex items-start text-gray-600 text-xs sm:text-sm">
                      <svg className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 mb-4">
                    {event.description}
                  </p>
                </div>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300">
                    Más Información
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Services Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Servicios Regulares</h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Además de nuestros eventos especiales, te invitamos a nuestros servicios regulares cada semana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-3 sm:mb-4">
                <svg className="h-10 w-10 sm:h-12 sm:w-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">Servicio Dominical</h3>
              <p className="text-sm text-gray-600 text-center">Domingos 10:00 AM - 12:00 PM</p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700">
                Únete a nosotros para alabanza, adoración y un mensaje inspirador de la Palabra de Dios.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-3 sm:mb-4">
                <svg className="h-10 w-10 sm:h-12 sm:w-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">Estudio Bíblico</h3>
              <p className="text-sm text-gray-600 text-center">Miércoles 7:00 PM - 8:30 PM</p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700">
                Profundiza en las escrituras y crece en tu conocimiento y entendimiento de la Palabra de Dios.
              </p>
            </div>
            
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-md">
              <div className="text-blue-800 mb-3 sm:mb-4">
                <svg className="h-10 w-10 sm:h-12 sm:w-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2">Reunión de Jóvenes</h3>
              <p className="text-sm text-gray-600 text-center">Viernes 7:00 PM - 9:00 PM</p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-700">
                Un espacio dinámico donde los jóvenes pueden conectar, crecer espiritualmente y desarrollar amistades significativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">¿Quieres organizar un evento con nosotros?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-3xl mx-auto">
            Si deseas organizar un evento especial en nuestras instalaciones o necesitas más información sobre nuestros próximos eventos, no dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
              Contáctanos
            </Link>
            <a href="#" className="inline-block bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300">
              Ver Calendario Completo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
