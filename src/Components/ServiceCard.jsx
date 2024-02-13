
const ServiceCard = ({ service }) => {
    console.log(service)
    const { title, description, iconImage } = service;
    return (
        <div className="shadow-iconShadow relative overflow-hidden hover:before:bg-red hover:before:top-0 before:absolute before:w-[1px] before:h-full before:-top-full before:right-0 before:bottom-0 before:duration-500 hover:after:bg-red hover:after:left-0 after:absolute after:w-full after:h-[1px] after:top-0 after:-left-full after:bottom-0 after:duration-500 group">

            <span className="absolute block group-hover:bg-red group-hover:right-0 w-full h-[1px] z-50 -right-full bottom-0 duration-500"></span>

            <span className="absolute block group-hover:bg-red group-hover:top-0 w-[1px] h-full z-30 top-full left-0 duration-500"></span>

            <div className="p-4">
                <div className="w-28 h-28 mx-auto rounded-full border-[5px] border-black p-5 my-5 shadow-iconShadow">
                    <img className='w-full' src={iconImage} alt={title} />
                </div>

                <h2 className="text-blue text-2xl font-bold mb-5">
                    {title}
                </h2>

                <p className="text-gray line-clamp-4">
                    {description}
                </p>
            </div>

            <div className="flex justify-end mb-4">
                <button className="btn_primary">Contact Now</button>
            </div>
        </div>
    );
};

export default ServiceCard;