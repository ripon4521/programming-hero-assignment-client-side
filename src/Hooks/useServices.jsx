import { useQuery } from "react-query";
import useAxiosPublic from "./useaxiosPublic";



const useServices = () => {
    const axiosPublic = useAxiosPublic();

   
    const { refetch , data:services = []}=useQuery({
        queryKey:['services'],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/services`);
            return res.data;
        
        }
    })

    return [services , refetch]
};

export default useServices;