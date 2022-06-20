import { useState } from "react";
import "./form.css";

function Form({ agregarTarea, listaDePrioridades }) {
  const [descripcion, setDescripcion] = useState();
  const [prioridad, setPrioridad] = useState();
  const onChangeDescripcion = (ev) => {
    setDescripcion(ev.target.value);
  };
  const onChangePrioridad = (ev) => {
    setPrioridad(ev.target.value);
  };
  const onClickAgregar = () => {
    agregarTarea({
      prioridad,
      descripcion,
    });
  };

  return (
    <>
      <h1>Lista de tareas!</h1>
      <form action="javascript:void(0);">
        <input
          value={descripcion}
          id="descripcion"
          type="text"
          name="descripcion"
          placeholder="Descripción de la tarea"
          onChange={onChangeDescripcion}
        />
        <select
          name="prioridad"
          id="prioridad"
          onChange={onChangePrioridad}
          value={prioridad}
        >
          <option value="" disabled selected>
            Prioridad
          </option>
          <option value={listaDePrioridades[0].value}>
            {listaDePrioridades[0].descripcion}
          </option>
          <option value={listaDePrioridades[1].value}>
            {listaDePrioridades[1].descripcion}
          </option>
          <option value={listaDePrioridades[2].value}>
            {listaDePrioridades[2].descripcion}
          </option>
        </select>
        <button id="agregar" onClick={onClickAgregar}>
          Agregar!
        </button>
      </form>
      <h3>Tareas</h3>
      <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      <ul id="lista-tareas">
        <li>{agregarTarea}</li>
      </ul>
    </>
  );
}

export default Form;
