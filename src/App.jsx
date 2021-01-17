import React, { useState } from 'react';
import shortid from 'shortid';


function App() {

  const [ tarea, setTarea ] = useState('');
  const [ tareas, setTareas ] = useState([]);

  const agregarTarea = e =>{
    e.preventDefault();

    // Validar
    if(!tarea.trim()){
      console.log('Sin tarea');
      return;
    }
    console.log(tarea);
    setTareas([
      ...tareas,
      {id: shortid.generate(), nombreTarea: tarea}
    ])

    setTarea('');
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Crud Simple</h1>
      <hr /> 
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
          {
            tareas.map(item =>(
              <li className="list-group-item" key={item.id}>
              <span className="lead"> {item.nombreTarea} </span>
              <button className="btn btn-danger btn-sm float-end mx-2">Eliminar</button>
              <button className="btn btn-warning btn-sm float-end">Editar</button>
            </li>
            ))
          }
            
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={agregarTarea}>
            <input 
              type="text" 
              className="form-control mb-2"
              placeholder="Ingrese la Tarea"
              onChange={ e => setTarea(e.target.value) }
              value={tarea}
            />
            <button className="btn btn-dark w-100" type="submit">Agregar Tarea</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
