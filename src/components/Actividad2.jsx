import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export const Actividad2 = () => {

  const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #2C3333;
  padding: 1rem;
  `

  const Frase = styled.div`
   width: 250px;
   padding: 1rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background-color: #2E4F4F;
   border-radius: 8px;
    h2{
      color: #fff;
    }
    p{
      color: #CBE4DE;
    }
  `

    const [datos, setDatos] = useState([]);

    const otro = () =>{
        axios.get('https://api.breakingbadquotes.xyz/v1/quotes/20')
        .then(response => {
            setDatos(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    useEffect(() => {
      otro()
    }, [])

    return (
        <Div>
        { datos.map(frase => (
          <Frase>
            <h2>{frase.author}</h2>
            <p>"{frase.quote}"</p>
          </Frase>
        )) }
        </Div>
     );
}

