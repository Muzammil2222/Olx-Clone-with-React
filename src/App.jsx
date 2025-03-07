import { useState } from 'react'
import Headers from './components/Header'
import Card from './components/Card'
import Heading from './components/Heading';
function App() {
  
  const [show , setShow] = useState(true);
  const cars = [
    {
      priceRs: "40,50,000",
      title: "Nissan Dayz Highway Star 2021 Total Genuine",
      location: "Hall Road, Lahore",
      lastUpdateDate: "4 hours ago",
      image: "https://images.olx.com.pk/thumbnails/522052369-240x180.jpeg",
      link: "https://www.olx.com.pk/item/nissan-dayz-highway-star-2021-total-genuine-iid-1098684763",
    },
    {
      priceRs: "4,750,000",
      title: "Toyota Yaris 2021/22",
      location: "Ghakhar, Gujranwala",
      lastUpdateDate: "6 hours ago",
      image: "https://images.olx.com.pk/thumbnails/522916267-800x600.webp",
      link:"https://www.olx.com.pk/item/toyota-yaris-2021-iid-1099191462",
    },
    {
      priceRs: "850,000",
      title: "KIA Spectra 2002",
      location: "Bahawalpur-Bahawalnagar Road, Bahawalpur",
      lastUpdateDate: "2 days ago",
      image: "https://images.olx.com.pk/thumbnails/524946666-800x600.webp",
      link:"https://www.olx.com.pk/item/kia-spectra-2002-iid-1099151280"
    },
    {
      priceRs: "2,450,000",
      title: "Toyota Corolla Altis 2008 model",
      location: "Jail Road, Lahore",
      lastUpdateDate: "3 weeks ago",
      image: "https://images.olx.com.pk/thumbnails/504571496-800x600.webp",
      link:"https://www.olx.com.pk/item/toyota-corolla-altis-2008-model-iid-1095848051"
    }
  ];

  const mobile = [
    {
      priceRs: "3,900",
      title: "Infinix hot 50i 6/128 installment ma available ha",
      location: "I.I. Chundrigar Road, Karachi",
      lastUpdateDate: "4 weeks ago",
      image: "https://images.olx.com.pk/thumbnails/518737440-800x600.webp",
      link: "https://www.olx.com.pk/item/infinix-hot-50i-6128-installment-ma-available-ha-iid-1098146955",
    },
    {
      priceRs: "129,999",
      title: "Samsung S22 Ultra PTA Approved Dual Sim / S21 5G",
      location: "Ichhra, Lahore",
      lastUpdateDate: "3 weeks ago",
      image: "https://images.olx.com.pk/thumbnails/522364401-800x600.webp",
      link:"https://www.olx.com.pk/item/samsung-s21-5g-pta-approved-dual-sim-s22-ultra-iid-1098269444"
    },
    {
      priceRs: "115,000",
      title: "vivo v30 mobile",
      location: "Zaheerabad, Chunian",
      lastUpdateDate: "2 days ago",
      image: "https://images.olx.com.pk/thumbnails/512421766-800x600.webp",
      link:"https://www.olx.com.pk/item/good-condition-mobile-iid-1097119207"
    },
    {
      priceRs: "13,500",
      title: "Apple iPhone 11 Pro Max on Easy Installment",
      location: "Gulberg, Lahore",
      lastUpdateDate: "1 week ago",
      image: "https://images.olx.com.pk/thumbnails/523071513-800x600.webp",
      link:"https://www.olx.com.pk/item/apple-iphone-11-pro-max-on-easy-installment-iid-1098848708"
    }
  ];
  const bikes = [
    {
      priceRs: "285,000",
      title: "Yamaha ybz125, One Handed use",
      location: "Ghari Ahmda Road, Gujrat",
      lastUpdateDate: "1 week ago",
      image: "https://images.olx.com.pk/thumbnails/523353608-800x600.webp",
      link: "https://www.olx.com.pk/item/yamaha-ybz125-one-handed-use-iid-1098895346" ,
    },
    {
      priceRs: "370,000",
      title: "One year use good condition Bike",
      location: "Gizri, Karachi",
      lastUpdateDate: "2 days ago",
      image: "https://images.olx.com.pk/thumbnails/524589530-800x600.webp",
      link: "https://www.olx.com.pk/item/one-year-use-good-condition-bike-iid-1099094928",
    },
    {
      priceRs: "1,100,000",
      title: "Docuati 400cc new Edition 2025",
      location: "Islamabad View Valley, Islamabad",
      lastUpdateDate: "3 weeks ago",
      image: "https://images.olx.com.pk/thumbnails/383912167-800x600.webp",
      link:"https://www.olx.com.pk/item/docuati-400cc-new-edition-iid-1075620218",
    },
    {
      priceRs: "850,000",
      title: "double cylinder",
      location: "New Mirpur City, Mirpur",
      lastUpdateDate: "3 days ago",
      image: "https://images.olx.com.pk/thumbnails/524654457-800x600.webp",
      link:"https://www.olx.com.pk/item/double-cylinder-iid-1099104545",
    }
  ]
  
  return (
    <>
    <div>
     <Headers/>
     <Heading title="Cars"/>
     {show ? <div style={{
      display: 'flex',
      paddingTop: "20px",
      paddingBottom: "20px",
      flexWrap: 'wrap',
      gap: '20px',
      maxWidth: '1280px',
      margin: "0 auto",
     }}> 
      {cars.map((car, index) => {
  return (
    <a 
    key={index} 
    href={car.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: "none", color: "rgb(34, 34, 34)" }}
  >
    <Card
      key={index}
      title={car.title}
      location={car.location}
      image={car.image}
      priceRs={car.priceRs}
      lastUpdateDate={car.lastUpdateDate}
    />
    </a>
  );
})}



      </div> : null}
      </div>
      <div>
      <Heading title="Mobile Phones"/>
      <div style={{
        display: 'flex',
        paddingTop: "20px",
        paddingBottom: "20px",
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: '1280px',
        margin: "0 auto",
      }}>
        {mobile.map((mob, index) => {
          
  return (
    <a 
    key={index} 
    href={mob.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: "none", color: "rgb(34, 34, 34)" }}
  >
    <Card
      key={index}
      title={mob.title}
      location={mob.location}
      image={mob.image}
      priceRs={mob.priceRs}
      lastUpdateDate={mob.lastUpdateDate}
    />
    </a>
  );
})}
      </div>
        </div> 
        <div>
          <Heading title="Bikes & Motorcycles"/>
            <div style={{
              display: 'flex',
              paddingTop: "20px",
              paddingBottom: "20px",
              flexWrap: 'wrap',
              gap: '20px',
              maxWidth: '1280px',
              margin: "0 auto",
            }}>
              {bikes.map((bike, index) => {
               
                return(
                  <a
                  key={index}
                  href={bike.link}
                  target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "rgb(34, 34, 34)" }}
                  >
                  <Card
                  key={index}
                  title={bike.title}
                  location={bike.location}
                  image={bike.image}
                  priceRs={bike.priceRs}
                  lastUpdateDate={bike.lastUpdateDate}
                  />
                  </a>
                )
                
              })}
            </div>
        </div>
    </>
  )
}

export default App
