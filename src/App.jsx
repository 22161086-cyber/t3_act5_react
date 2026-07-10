import { useState } from 'react'

// 1 y 2. COMPONENTE QUE RECIBE PROPS (Muestra el género y quién recomienda)
function Encabezado(props) {
  return (
    <div style={{ backgroundColor: '#242424', padding: '10px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>🎬 Recomendaciones de {props.genero}</h2>
      <p>Lista creada especialmente por: <strong>{props.usuario}</strong></p>
    </div>
  )
}

export default function App() {
  // 3. ESTADO / useState (Contador de Likes para hacer la página interactiva)
  const [likes, setLikes] = useState(0)

  // 4. ARREGLO DE DATOS (Lista de tus películas recomendadas)
  const peliculas = [
    'Interestelar (Ciencia Ficción)',
    'El Origen / Inception (Suspenso)',
    'Spider-Man: Un nuevo universo (Animación)',
    'Avatar: El camino del agua (Acción)'
  ]

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', fontFamily: 'sans-serif', textAlign: 'center', color: '#fff', backgroundColor: '#1a1a1a', padding: '30px', borderRadius: '12px' }}>
      
      {/* Enviamos el género y tu nombre a través de PROPS */}
      <Encabezado genero="Películas Favoritas" usuario="Litzy" />

      {/* BOTÓN CON ESTADO: Al hacer clic, aumenta el contador de likes */}
      <div style={{ margin: '25px 0' }}>
        <button 
          onClick={() => setLikes(likes + 1)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#e50914', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}
        >
          ¡Dar Like a esta lista! ({likes})
        </button>
      </div>

      <div style={{ textAlign: 'left', backgroundColor: '#2c2c2c', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0, color: '#e50914' }}>Películas que debes ver:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          {/* RENDERIZADO DE LISTA DINÁMICA CON .MAP() */}
          {peliculas.map((pelicula, index) => (
            <li key={index}>{pelicula}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}