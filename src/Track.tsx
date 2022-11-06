import React from 'react'
import './Track.css'

const Track = ({ track }) => {
    const isRemoval: boolean = false;

    const renderAction = () => {
        return (<>
            {isRemoval ? <button className="Track-action" >-</button> : <button className="Track-action">+</button>}
            </>
        )
    }

  return (
    <div className="Track">
  <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist}</p>
              <p>{track.album}</p>
  </div>
  <button className="Track-action">TRACK</button>
</div>
  )
}

export default Track