interface Boardprops{
  Cellno:number,
  Snake:string,
  Ladder:string
}
import React from 'react'
const Boardprops = (Grid:Boardprops) => {
  return (
    <div>
        {Grid.Cellno}
        {Grid.Snake}
        {Grid.Ladder}
    </div>
  )
}

export default Boardprops