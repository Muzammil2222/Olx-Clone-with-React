import React from 'react'
import { useState } from 'react'

function Header() {
    const [show , setShow] = useState(true);
  return (
    <>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddinTop: "20px",

      }}><svg
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
      }}
      height="40" fill='#002f34' viewBox="0 0 36.289 20.768" alt="Logo" className="_8113da19"><path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path></svg>
      <div className='property'>

      </div>
      </div>
      <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        paddinTop: "20px",

      }}
      >
        <h1 style={{
            fontSize: '40px',
            color: '#002f34',
            fontFamily: 'sans-serif',
        }}>Cars & Bikes</h1>


      </div>
    </>
  )
}

export default Header
