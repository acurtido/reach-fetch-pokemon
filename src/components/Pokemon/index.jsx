/* eslint-disable react/prop-types */
import usePokemon from "../../hooks/usePokemon"
import styles from "./style.module.css"
import Types from "../Types";

const PokemonTypes = {
  NORMAL: '#A8A77A',
  FIRE: '#EE8130',
  WATER: '#6390F0',
  ELECTRIC: '#F7D02C',
  GRASS: '#7AC74C',
  ICE: '#96D9D6',
  FIGHTING: '#C22E28',
  POISON: '#A33EA1',
  GROUND: '#E2BF65',
  FLYING: '#A98FF3',
  PSYCHIC: '#F95587',
  BUG: '#A6B91A',
  ROCK: '#B6A136',
  GHOST: '#735797',
  DRAGON: '#6F35FC',
  DARK: '#705746',
  STEEL: '#B7B7CE',
  FAIRY: '#D685AD',
};

export default function Pokemon({ pokemonUrl }) {
  const [pokemon] = usePokemon(pokemonUrl)

  const pokemonTypes = (types) => {
    if (types.length === 1) {
      return getColour(types[0].type.name)
    } else {
      return `linear-gradient(to top right, ${getColour(types[0].type.name)} 50%, ${getColour(types[1].type.name)} 50%)`
    }
  }

  const getColour = (type) => {
    
    switch (type) {
      case 'normal':
        return PokemonTypes.NORMAL;
      case 'fire':
        return PokemonTypes.FIRE;
      case 'water':
        return PokemonTypes.WATER;
      case 'electric':
        return PokemonTypes.ELECTRIC;
      case 'grass':
        return PokemonTypes.GRASS;
      case 'ice':
        return PokemonTypes.ICE;
      case 'fighting':
        return PokemonTypes.FIGHTING;
      case 'poison':
        return PokemonTypes.POISON;
      case 'ground':
        return PokemonTypes.GROUND;
      case 'flying':
        return PokemonTypes.FLYING;
      case 'psychic':
        return PokemonTypes.PSYCHIC;
      case 'bug':
        return PokemonTypes.BUG;
      case 'rock':
        return PokemonTypes.ROCK;
      case 'ghost':
        return PokemonTypes.GHOST;
      case 'dragon':
        return PokemonTypes.DRAGON;
      case 'dark':
        return PokemonTypes.DARK;
      case 'steel':
        return PokemonTypes.STEEL;
      case 'fairy':
        return PokemonTypes.FAIRY;
      default:
        return '#fff';
    }
  }

  return (
    <>
      {pokemon && (
        <div className={styles.container} style={{background:pokemonTypes(pokemon.types)}}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
          <Types types={pokemon.types} />
        </div>
      )}
    </>
  )
}


