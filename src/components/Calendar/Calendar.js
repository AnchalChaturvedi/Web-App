import React, { useState } from "react"
import Calendar from "react-calendar"

import "./Calendar.scss"

function MyCalendar() {
  const [value, onChange] = useState(new Date())

  return (
    <div>
      <Calendar className="card shadow" onChange={onChange} value={value} />
    </div>
  )
}

export default MyCalendar
