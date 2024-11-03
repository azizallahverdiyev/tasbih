import React from 'react'
import "./ReleaseTime.css"

function ReleaseTime({mymargin, datename, datecount}) {
  return (
    <div className='date-container' style={{marginTop: mymargin }}>
        <h1 className='date-count'>{datecount}</h1>
        <h3 className='date-name'>{datename}</h3>
    </div>
  )
}

export default ReleaseTime