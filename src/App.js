import './App.css';
import Form from './componentes/Form/form.jsx'
import {useState} from 'react'

const prioridades = [{descripcion: 'baja', value: 'prioridad-baja'}, 
{descripcion: 'media', value: 'prioridad-media'},
{descripcion: 'alta', value: 'prioridad-alta'}];

function App() {
  const [lista, setLista] = useState([])
  const agregarTarea = (tarea) => {
    setLista([...lista, tarea]) 
  }
  console.log(lista)
  return (
    <div className="App">
      <main>
        <Form 
          agregarTarea={agregarTarea}
          listaDePrioridades={prioridades}
        />        
      </main>
    </div>
  );
}

export default App;