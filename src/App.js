import React, { useState } from 'react'
import Posteos from "./components/Posteos"
import Estatus from "./components/Estatus"

// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

const App = () => {
  
  const [countGeneralLikes, setCountGeneralLikes] = useState(0);

  const incrementLikes = () => {
    setCountGeneralLikes(countGeneralLikes+1);
  }
  
  return (
    <body>
      <div>
       <Estatus countGeneralLikes={countGeneralLikes}/>
      </div>
        <Posteos incrementLikes={incrementLikes}/>
    </body>
  )
}
export default App
