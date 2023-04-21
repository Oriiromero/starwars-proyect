import React, { useContext } from 'react'
import { CharactersContext } from '../../shared/characters.context';
import './Gallery.css';

const Gallery = (charact) => {
  const props = charact.props

  return (
    <div className='container'>
    {props.map((e, index) =><> <div className='container_char' key={index}>
      <div className='container_char-img'>
        <img src={e.image} alt={e.actor}></img>
      </div>
      <div className='container_char-name'>
        <p>{e.name}</p>
      </div>
    </div>
    </>
    )}
    </div>
  )
}

export default Gallery
