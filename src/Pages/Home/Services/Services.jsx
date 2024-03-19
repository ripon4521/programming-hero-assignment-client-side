import useServices from "../../../Hooks/useServices";
import ServicesCard from "./ServicesCard";


const Services = () => {

    const [services, refetch]=useServices();
    // console.log(services);

    return (
        <div className="text-center mt-10 bg-[#f7e4e5]  p-5">
            {/* bg-[#FFF0F7] */}
           <h1 className="text-4xl text-black font-roboto font-semibold drop-shadow-md">One Platfrom for all Financial Solutions</h1> 
           
           <div className="flex justify-center gap-10 mt-20 flex-col  md:flex-row pl-10 lg:flex-row lg:row-span-4 md:pl-0">
            {
                services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }
           </div>
        
        </div>
    );
};

export default Services;