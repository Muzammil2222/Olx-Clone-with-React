import React from 'react'

function Heading({title}) {
  return (
    <div>
        <h1
        style={{
            maxWidth: '1280px',
            margin: '0 auto',
            fontSize: '24px',
            color: '#002f34',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '700',
        }}
        >{title}</h1>
    </div>
  )
}

export default Heading
