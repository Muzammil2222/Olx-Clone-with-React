import React from 'react'

function Btn(props) {
  return (
    <button style={{
        padding: '10px 20px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: props.bgColor ? props.bgColor : 'blue',
        color:  props.color ? props.color : 'white',
        margin: '10px',
        fontSize: '20'
    }}>
        {props.title}
    </button>
  )
}

export default Btn
