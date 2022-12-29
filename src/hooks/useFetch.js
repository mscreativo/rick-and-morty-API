import { useEffect, useMemo, useState } from "react"

export const useFetch = (page) => {

    const [personajes, setPersonajes] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    let pers1 = page;
    let pers2 = page + 1;
    let pers3 = page + 2;
    let pers4 = page + 3;
    let pers5 = page + 4;
    let pers6 = page + 5;

    const getPersonajes = async() => {
       const resp = await fetch(`https://rickandmortyapi.com/api/character/${pers1},${pers2},${pers3},${pers4},${pers5},${pers6}`);
       const data = await resp.json();
       
       setPersonajes(data);
        setIsLoading(false);
     };
 
     useMemo(() => {
       
       getPersonajes();
     
     }, [page]);


     return {
        personajes,
        isLoading
     }

}
