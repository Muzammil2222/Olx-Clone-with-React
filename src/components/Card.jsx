import React from 'react'
import Btn from './Btn'



const  Card = ({title, location, image, priceRs, lastUpdateDate}) =>{
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        backgroundColor: '#fff',
        fontfamily: 'Arial, sans-serif',
      };
    
      const imageStyle = {
        width: '100%',
        height: "154px",
        objectFit: 'cover',
      };

      const cardInner = {
        padding: '18px 15px 20px 15px',
        fontFamily: 'Arial, sans-serif',
      }
      return(
        <div style={cardStyle}>
        <img src={image} alt="Placeholder" style={imageStyle} />
        <div style={cardInner}>
            <p>{priceRs}</p>
        <h3 style={{
            margin: '0',
        }}>{title}</h3>
        <p>{location}</p>
        <p>{lastUpdateDate}</p>
        </div>
        <Btn title='Buy Now' />
      </div>
      )
}
export default Card
