import usePokemonList from '../../hooks/usePokemonList'
import Pokemon from '../Pokemon'
import styles from './style.module.css'

function App() {
  const [pokemonList] = usePokemonList(25)
  
  return (
    <div className={styles.container}>
      {pokemonList && pokemonList.map(pokemon => <Pokemon key={pokemon.name} pokemonUrl={pokemon.url} /> )}
    </div>
  )
}

export default App
