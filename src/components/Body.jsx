/* eslint-disable array-callback-return */

import React from "react";
import {ListaColaboradores} from "./ListaColaboradores";
import {nanoid} from "nanoid";
import { useState } from "react";

const Body = (P) => {
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");
  const [Colaboradores, setColaboradores] = useState(ListaColaboradores);

  const agregarColaborador = (P) => {
    P.preventDefault();
    if (!nombreColaborador.trim() || !correoColaborador.trim()) {
        alert("Se deben llenar todos los campos");
    } else {
        setColaboradores([...Colaboradores, { id: nanoid(), nombre: nombreColaborador, correo: correoColaborador}]);
    }
};

  return (

    <div className="container">
      <form onSubmit={agregarColaborador}>
        <h5>Nombre del colaborador</h5>
        <input type="text"  className="form-control my-3" placeholder="Ingresar el nombre del colaborador" 
        onChange={(i) => setNombreColaborador(i.target.value)}/>
        <h5>Correo del colaborador</h5>
        <input type="text" className="form-control" placeholder="Ingresar correo del colaborador"
        onChange={(i) => setCorreoColaborador(i.target.value)}/>

        <input type="submit" value="Agregar colaborador" className="btn btn-primary my-4"/>
      </form>
      <hr />
      <div>
        <h1>Listado de Colaboradores</h1>
        

        {Colaboradores.filter((el) => {
          if (P.final === "") {
            return el;
          } else if (el.nombre.toLocaleLowerCase().includes(P.terminartoLocaleLowercase())) {
            return el;
          }
          }).map((el) => (
            <div key={el.id}>
              <p>
               {el.nombre} - {el.correo}
              </p>
            </div>
          )
        )}
      </div>

    </div>
        
  );
};

export default Body;







