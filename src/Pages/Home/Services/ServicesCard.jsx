

const ServicesCard = ({service}) => {
    const {image,type,description}=service;
    return (
        <div className="bg-white w-[280px] md:h-[300px] lg:h-[400px]  h-[400px] rounded-e-lg rounded-s-lg rounded-t-lg drop-shadow-md ">
            <img className="w-[280px] h-[150px] " src={image} alt="" />
            <h3 className="lg:text-2xl md:text-xl text-2xl mt-4 font-jost text-black hover:text-[#ED1B24]">{type}</h3>
            <p className="text-xl mt-5 font-jost p-2 block md:hidden lg:block">{description}</p>
            <p className="mt-5 text-[#ED1B24] font-jost">Learn More</p>
            
        </div>
    );
};

export default ServicesCard;