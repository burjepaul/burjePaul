import React from 'react'

import './portofolio3DCard.styles.scss'

const Portofolio3DCard = ({value}) => {
  return (
    <div className='render-card-container'>
        <h1 className='render-card-title'>{value.title}</h1>
        <div className='render-card-content-container'>

          <iframe title={value.videoLink} className='render-video'
              src={`https://www.youtube.com/embed/${value.videoLink}?playlist=${value.videoLink}&loop=1&controls=0`}>
          </iframe>


          </div>
    </div>
  )
}

export default Portofolio3DCard