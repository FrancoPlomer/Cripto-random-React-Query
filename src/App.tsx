import './App.css'
import { useRandom } from './hooks/useRandom';

const App = () => {

  const query = useRandom();

  return (
    <div className='App App-header'>
      { 
        query.isLoading ? 
        <h2>Cargando...</h2> :
        query.error ?
        <h2> { `${ query.error }` } </h2> :
        <h2>Numero aleatorio: { `${ query.data }` }</h2>
      }
      <button onClick={ () => query.refetch() } disabled={ query.isLoading }>
        { query.isLoading ? '...' : 'Nuevo número' }
      </button>
    </div>
  )
}

export default App;
