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
      flexWrap: 'wrap',
      gap: '20px',
      maxWidth: '1280px',
      margin: "0 auto",
     }}> 
        <Card priceRs="40,50,000" title='Nissan Dayz Highway Star 2021 Total Genuine' location='Hall Road, Lahore' lastUpdateDate='4 hours ago' image='https://images.olx.com.pk/thumbnails/522052369-240x180.jpeg' />

        <Card priceRs="850,000" title='KIA Spectra 2002' location='Bahawalpur-Bahawalnagar Road, Bahawalpur' lastUpdateDate='2 days ago' image='https://images.olx.com.pk/thumbnails/524946666-800x600.webp' />

        <Card priceRs="2,450,000" title='Toyota Corolla Altis 2008 model' location='Jail Road, Lahore' lastUpdateDate='3 weeks ago' image='https://images.olx.com.pk/thumbnails/504571496-800x600.webp' />
        <Card priceRs="9,000,000" title='Toyota Prius A Premium Selection 2020' location='Johar Town, Lahore' lastUpdateDate='1 week ago' image='https://images.olx.com.pk/thumbnails/514191185-800x600.webp' />
        <Card priceRs="3,600,000" title='Toyota Corolla Altis 2009' location='New City, Wah' lastUpdateDate='5 days ago' image='https://images.olx.com.pk/thumbnails/513050996-800x600.webp' />
        <Card priceRs="40,50,000" title='Nissan Dayz Highway Star 2021 Total Genuine' location='Hall Road, Lahore' lastUpdateDate='5 days ago' image='https://images.olx.com.pk/thumbnails/522052369-240x180.jpeg' />
        <Card priceRs="40,50,000" title='Nissan Dayz Highway Star 2021 Total Genuine' location='Hall Road, Lahore' lastUpdateDate='5 days ago' image='https://images.olx.com.pk/thumbnails/522052369-240x180.jpeg' />
        <Card priceRs="40,50,000" title='Nissan Dayz Highway Star 2021 Total Genuine' location='Hall Road, Lahore' lastUpdateDate='5 days ago' image='https://images.olx.com.pk/thumbnails/522052369-240x180.jpeg' />


      </div> : null}
    </>
  )
}

export default App
