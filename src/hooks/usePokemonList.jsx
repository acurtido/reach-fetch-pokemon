import React, { useEffect } from 'react'

export default function useFetch(cantidad) {
    const [pokemonList, setPokemonList] = React.useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${cantidad}`)
            .then(response => response.json())
            .then(data => setPokemonList(data.results))
    }, [cantidad])
  
    return [pokemonList]
}
