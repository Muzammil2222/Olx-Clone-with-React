import { useState } from 'react'
import Headers from './components/Header'
import Card from './components/Card'
function App() {
  
  const [show , setShow] = useState(true);
  return (
    <>
     <Headers/>
     {show ? <div style={{
      display: 'flex',
      gap: '20px',
      maxWidth: '1280px',
      margin: "0 auto",
     }}> 
        <Card priceRs="40,50,000" title='Nissan Dayz Highway Star 2021 Total Genuine' location='Hall Road, Lahore' lastUpdateDate='2 days ago' image='https://images.olx.com.pk/thumbnails/522052369-240x180.jpeg' />

        <Card title='Lamp' location='good quality light with taiz roshni with long live' image='https://imagescdn.simons.ca/images/20992-24101256-11-A1_2/porous-concrete-table-lamp.jpg?__=3' />

        <Card title='Shoe' location='good quality shoes with good quality leather' image='https://static-01.daraz.pk/p/2c5c0a1f6a3b3b9c5d9b6c2e0b9c0c0f.jpg' />


      </div> : null}
    </>
  )
}

export default App
