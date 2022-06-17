import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import "./form.css";
import Tarea from "../Tarea/tarea.jsx";

function Form() {
  const [tarea, setTarea] = useState();
  const [prioridad, setPrioridad] = useState();
  const agregarTarea = () => {
    return onChangeTarea();
  };
  const onChangeTarea = (tarea) => {
    console.log(tarea.target.value);
  };
  const onSelectPrioridad = () => {};
  return (
    <>
      <form action="javascript:void(0);">
        <input
          id="tarea"
          type="text"
          name="tarea"
          placeholder="Descripción de la tarea"
          onChange={onChangeTarea}
        />
        <select name="prioridad" id="prioridad" onSelect={onSelectPrioridad}>
          <option value="" disabled selected>
            Prioridad
          </option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
        </select>
        <button id="agregar" onClick={agregarTarea}>
          Agregar!
        </button>
      </form>
      <Tarea descripcion="" prioridad="" />
    </>
  );
}

export default Form;
