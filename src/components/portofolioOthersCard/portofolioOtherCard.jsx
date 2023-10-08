import React from 'react'

import './portofolioOtherCard.styles.scss'

const PortofolioOthersCard = ({value}) => {
  return (
    <div className='other-card-container'>
      <h1 className='other-card-title'>{value.title}</h1>
      <div className='other-card-content-container'>

        <iframe title={value.videoLink} className='other-video'
                src={`https://www.youtube.com/embed/${value.videoLink}`}>
            </iframe>

          <ul className='other-card-descriptions'>
              {value.descriptions.map((description) => {
                return(
                  <li>
                          {description}
                      </li>
                  )})}
          </ul>

        </div>
    </div>
  )
}

export default PortofolioOthersCard