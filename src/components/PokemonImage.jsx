import React, { useEffect, useState } from 'react'

import axios from 'axios'

const PokemonImage = (props) => {

  const [imageUrl, setImageUrl] = useState(null)


  useEffect(() => {
    axios.get(props.url).then(({ data }) => {
      setImageUrl(data.sprites.front_default)
    })
  })

  return(
    <div>
      <img src={imageUrl} alt="..."/>
    </div>
  )
}

export default PokemonImage