import React, { useEffect } from 'react'

export default function usePokemon(pokemonUrl) {
    const [pokemon, setPokemon] = React.useState(null)
    
    useEffect(() => {
        fetch(pokemonUrl)
            .then(response => response.json())
            .then(data => {setPokemon(data)})
    }, [pokemonUrl])

    return [pokemon]
}
