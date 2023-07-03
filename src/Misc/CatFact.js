import { useState } from "react";
import { useQuery } from 'react-query';
import Axios from 'axios';

function  CatFact(){

    const [text, settext] = useState(null);

    // const fetchData = async ()=>{
    //     const data = await(
    //         await fetch("https://catfact.ninja/fact")
    //     ).json();
    //     settext(data);
    // }

    const { data:catd, isLoading, refetch} = useQuery(["cat"], ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=> res.data);
    }); 

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <button onClick={refetch}>Update Fact</button>
            {/* <p>{text?.fact}</p>
            <p>{text?.length}</p> */}
            <br/>
            <h3>{catd?.fact}</h3>
        </>
    );
}

export default CatFact; 