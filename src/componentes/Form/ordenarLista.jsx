const mapPrioridades = {
  "priodidad-baja": 3,
  "prioridad-media": 2,
  "prioridad-alta": 1,
};

export default function ordenarLista(listaFinal) {
  let listaOrdenada = [...listaFinal].sort((a, b) => {
    return mapPrioridades[a.proriedad] - mapPrioridades[b.prioridad];
  });
  return listaOrdenada;
}
