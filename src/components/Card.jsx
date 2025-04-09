const Card = ({ image, title, subtitle, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Imagen */}
      <img 
        className="w-full h-48 object-cover" 
        src={image}
        alt={title}
      />
      
      {/* Contenido */}
      <div className="px-6 py-4">
        <h1 className="text-xl font-bold text-gray-800">{title}</h1>
        <h3 className="text-sm text-blue-600 font-semibold mb-1">{subtitle}</h3>
        <p className="text-gray-700 mt-4">
        {description}
        </p>
        Únete a nosotros para alabanza, adoración y un mensaje
        inspirador de la Palabra de Dios.

      </div>
    </div>
  );
};

export default Card;
