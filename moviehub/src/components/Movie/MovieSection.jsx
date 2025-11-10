import React from 'react'
import SpecificTrendingMovie from './SpecificTrendingMovie'
import SpecificUpcomingMovie from './SpecificUpcomingMovie'

function MovieSection() {
  return (
    <div className="w-[90%] m-auto ">
        <SpecificTrendingMovie/>
        <SpecificUpcomingMovie/>
      </div>
  )
}

export default MovieSection