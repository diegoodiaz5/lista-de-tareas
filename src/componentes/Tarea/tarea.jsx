import "./tarea.css";

export default function Tarea(props) {
  return (
    <>
      <p id="mensaje-lista-vacia">Parece que no hay nada por aquí!</p>
      <ul id="lista-tareas">{props.tarea}</ul>
    </>
  );
}
