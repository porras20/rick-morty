// import { useEffect, useState } from "react";


// export const Actividad1 = () =>{
//     const [datos, setDatos] = useState([]);

//   useEffect(() => {
//     const url = "https://randomuser.me/api/?results=3";
//     const peticion =fetch(url);
//     peticion
//     .then(datos => datos.json())
//     .then(lectura => 
//       { 
//         lectura.results.map(user =>(
//           setDatos((e)=>
//           [...e, <div key={user.email}>
//             <div>{user.name.first}{user.name.last}</div>
//             <div>
//               <img src={user.picture.large} alt="" />
//             </div>
//           </div>]
//           )
//         ))
//       })
//     .catch(()=>console.log('Error'));
//   },[])
  
//   return (
//     <>
//       <h1>Premiados</h1>
//       {datos}
//     </>
//   )
// }