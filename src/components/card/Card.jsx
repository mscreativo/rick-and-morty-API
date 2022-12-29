import { CardItem } from "./CardItem"
import PropTypes from 'prop-types';
import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading";
import { Pagination } from "../Pagination";


export const Card = () => {
  const [page, setPage] = useState(1);
  const {personajes, isLoading } = useFetch(page);
  


  
  return (
    <main className="container">
      <Pagination page={page} setPage={setPage}/>
        {
          (isLoading)
          ? <Loading/>
          :
          personajes.map( (personaje) =>{
            return <CardItem key={personaje.id} personaje={personaje}/>
          } )
        }

        <Pagination page={page} setPage={setPage}/>

    </main>
  )
}

