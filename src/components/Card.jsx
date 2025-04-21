const Card = ({ image, title, subtitle, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white relative">
      {/* Imagen con sombra negra degradada */}
      <div className="relative">
        <img className="w-full h-48 object-cover object-[25%_30%]" src={image} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Contenido */}
      <div className="px-6 py-4">
        <h1 className="text-lg font-bold text-gray-800">{title}</h1>
        <h3 className="text-sm text-gray-700 font-semibold">{subtitle}</h3>
        <p className="text-gray-700 text-sm mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
