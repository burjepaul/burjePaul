import React from 'react'

import './portofolioMobileCard.styles.scss'

function PortofolioMobileCard({value}) {
  console.log(value)
  return (
    <div className='mobile-card-container'>
        <h1 className='mobile-card-title'>{value.title}</h1>
        <div className='mobile-card-content-container'>

          <iframe title={value.videoLink} className='mobile-video'
              src={`https://www.youtube.com/embed/${value.videoLink}`}>
          </iframe>

          <ul className='mobile-card-descriptions'>
            {value.descriptions.map((entry) => {
              console.log(entry)
              if (entry=== "Available on Google Play here") return <li>Available on Google Play <a href='https://play.google.com/store/apps/details?id=com.fotbal.predictions' target='_blank' rel="noreferrer">here</a></li>
              if (entry=== "Available on App Gallery here") return <li>Available on App Gallery <a href='https://appgallery.huawei.com/app/C108277163' target='_blank' rel="noreferrer">here</a></li>
              return(
                <li>{entry}</li>
                )
              })}
          </ul>

          </div>
    </div>
  )
}

export default PortofolioMobileCard
