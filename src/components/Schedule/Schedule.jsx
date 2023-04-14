import React from 'react'
import match from '../../Assets/tt.jpeg'
import './Schedule.css'

const Schedule = () => {
  return (
    <div className="tmeImg">
       <img className='timetable' src={match} alt='match-schedule'/>
    </div>
  )
}

export default Schedule
