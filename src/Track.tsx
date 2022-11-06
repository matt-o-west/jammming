import React from 'react'
import './Track.css'

const Track = ({ track, addTrack, removeTrack }) => {
    const isRemoval: boolean = false;

    const renderAction = () => {
        return (<>
            {isRemoval ? <button className="Track-action" onClick={removeTrack}>-</button> : <button className="Track-action" onClick={addTrack}>+</button>}
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