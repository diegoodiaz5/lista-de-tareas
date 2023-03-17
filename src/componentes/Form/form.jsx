import { useEffect, useState } from "react";
import "./form.css";
import taskListIcon from "../../Images/taskListIcon.png";
import close from "../../Images/close.png";
import edit from "../../Images/editar.png";

function Form({ agregarTarea, listaDePrioridades, listaFinal, borrarElem }) {
  const errDes = document.getElementById("errorDescrip");
  const errPri = document.getElementById("errorPrio");
  const [descripcion, setDescripcion] = useState("");
  const [prioridad, setPrioridad] = useState();
  const onChangeDescripcion = (ev) => {
    setDescripcion(ev.target.value);
  };
  const onChangePrioridad = (ev) => {
    setPrioridad(ev.target.value);
  };
  const onClickAgregar = () => {
    if (descripcion !== "" && prioridad !== undefined) {
      errDes.style.display = "none";
      errPri.style.display = "none";
      agregarTarea({
        prioridad,
        descripcion,
      });
    } else if (descripcion === "") {
      errDes.style.display = "inline";
      errPri.style.display = "none";
    } else {
      errDes.style.display = "none";
      errPri.style.display = "inline";
    }
  };
  useEffect(() => {
    const formTL = document.getElementById("formTaskList");
    formTL.addEventListener("submit", (e)=> {e.preventDefault()});
  })

  return (
    <>
      <div className="title">
        <h1>Lista de tareas!</h1>
        <img src={taskListIcon} alt="Icon TaksList" height="32px" />
      </div>
      <form id="formTaskList">
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
          <option value="" disabled selected="selected">
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
      <p className="errorMsg" id="errorDescrip">
        <b>Agrega una descripción!</b>
      </p>
      <p className="errorMsg" id="errorPrio">
        <b>Agrega una prioridad!</b>
      </p>
      <h3>Tareas pendientes:</h3>
      {listaFinal.length === 0 ? (
        <p id="mensaje-lista-vacia">No hay tareas agregadas!</p>
      ) : (
        <ul id="lista-tareas">
          {listaFinal.map((tarea) => (
            <div className="tareaContenedor">
              <li className={tarea.prioridad}>{tarea.descripcion}</li>
              <img src={edit} alt="editarTarea" className="editBoton" />
              <img
                onClick={() => borrarElem(tarea)}
                src={close}
                alt="eliminarTarea"
                className="botonEliminar"
              />
            </div>
          ))}
        </ul>
      )}
    </>
  );
}

export default Form;
