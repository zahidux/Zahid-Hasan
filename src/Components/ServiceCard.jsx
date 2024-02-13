const ServiceCard = ({ service }) => {
  // console.log(service);
  const { title, description, iconImage } = service;
  return (
    <div className="shadow-xl p-5 rounded-xl">
      <div className="text-center my-12 md:my-20 mx-12">
        <div className="w-28 h-28 mx-auto rounded-full border-[2px] border-black p-5 my-5 shadow-iconShadow">
          <img className="w-full" src={iconImage} alt={title} />
        </div>
        <h2 className="text-blue text-2xl font-bold mb-5">{title}</h2>
        <p className="text-gray line-clamp-4">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
