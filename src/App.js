import './App.css';
import Form from './componentes/Form/form.jsx'
import {useState} from 'react'
import ordenarLista from './componentes/Form/ordenarLista';

const prioridades = [
  {descripcion: 'baja', value: 'prioridad-baja'}, 
  {descripcion: 'media', value: 'prioridad-media'},
  {descripcion: 'alta', value: 'prioridad-alta' }
];

function App() {
  const [lista, setLista] = useState([])
  const agregarTarea = (tarea) => {
    const nuevaLista = [...lista, tarea];
    const nuevaListaOrdenada = ordenarLista(nuevaLista)
    setLista([...nuevaListaOrdenada]) 
  }

  const borrar = (elemABorrar) => {
    let nuevaLista = [...lista].filter((item) => item.descripcion !== elemABorrar.descripcion);
    setLista (nuevaLista);
}

  return (
    <div className="App">
      <main>
        <Form 
          agregarTarea={agregarTarea}
          listaFinal = {lista}
          listaDePrioridades={prioridades}
          borrarElem = {borrar}
        />        
      </main>
    </div>
  );
}

export default App;