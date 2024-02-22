import { useState, useEffect } from 'react';

import './App.css'


const getRandomNumberFromApi = async():Promise<number> => {

  const res = await fetch( 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new' );

  const numberString = await res.text();

  return +numberString;
} 

const App = () => {

  const [ number, setNumber       ] = useState<number>();
  const [ error, setError         ] = useState<string>();
  const [ isLoading, setIsLoading ] = useState<boolean>( true );

  useEffect(() => {
    setIsLoading( true );

    getRandomNumberFromApi()
      .then( _number => setNumber( _number ) )
      .catch( err => setError( err.message ) );
    
  }, [])
  
  useEffect(() => {
    
    setIsLoading( Boolean( !number ) );
  }, [ number ])
  
  useEffect(() => {

    setIsLoading( Boolean( !error ) );
  }, [ error ])
  

  return (
    <div className='App App-header'>
      { 
        isLoading ? 
        <h2>Cargando...</h2> :
        error ?
        <h2> { error } </h2> :
        <h2>Numero aleatorio: { number } </h2>
      }
    </div>
  )
}

export default App;
