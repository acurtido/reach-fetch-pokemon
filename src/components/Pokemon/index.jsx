/* eslint-disable react/prop-types */
import usePokemon from "../../hooks/usePokemon"
import styles from "./style.module.css"

export default function Pokemon({ pokemonUrl }) {
  const [pokemon] = usePokemon(pokemonUrl)

  return (
    <>
      {pokemon && (
        <div className={styles.container}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </>
  )
}


