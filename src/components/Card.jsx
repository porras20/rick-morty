import styled from "styled-components";

const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 500px;
background-color: gray;
padding: 1rem;
border-radius: 8px;

img{
    width: 200px;
}
.info {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;
    margin-left: 1rem;
}

`

export const Card = ({dato}) => {
    return ( 
        <Div>
            <img src={dato.image} alt="" />
            <div className="info">
                <h2>{dato.name}</h2>
                <p>{dato.status}</p>
                <p>{dato.gender}</p>
                <p>{dato.species}</p>
            </div>
        </Div>
     );
}
 
