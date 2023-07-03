import { useState } from "react";
import { useQuery } from 'react-query';
import { useCatData } from "../useCatData"
import Axios from 'axios';

function  CatFact2(){

    const {data, refetch, isLoading} = useCatData();
    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <>
            <button onClick={refetch}>Update Fact</button>
            <br/>
            <h3>{data?.fact}</h3>
        </>
    );
}

export default CatFact2; 