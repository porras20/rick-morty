import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./Card";

export const Actividad3 = () => {

    //Estilos del componente
    const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    `

    //State de los resultados de la API
    const [ datos, setDatos ] = useState([]);

    //State de la busqueda del usuario
    const [ busqueda, setBusqueda ] = useState('');

    //Consultando a la API
    const API = () =>{
        axios.get("https://rickandmortyapi.com/api/character")
        .then(response => {
            setDatos(response.data.results)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        API()
    }, [])
    return ( 
        <>
        <h1>Buscador en la API de rick y morty</h1>
        <input type="text" onChange={ e => setBusqueda(e.target.value) }/>
            <Container>
                {datos.map(dato => (
                    dato.name.includes(busqueda) ?
                    <Card dato={dato} key={dato.id} />
                    : null
                ))}
            </Container>
        </>
     );
}
 
