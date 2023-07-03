import { useQuery } from 'react-query';
import Axios from 'axios';

export const useCatData = () =>{
    const{ data, refetch, isLoading, error} = useQuery(["cat"], async () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    });

    return {data, isLoading, error, refetch}
}