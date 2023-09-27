import React from 'react'

import './portofolioWebsiteCard.styles.scss'
import Iframe from 'react-iframe'

const PortofolioWebsiteCard = ({value}) => {
  return (
    <div className='website-card-container'>
      <h1 className='website-card-title'>{value.title}</h1>
      <Iframe url={value.link}
                width="100%"
                height="300px"
                id=""
                className="website-card-frame"
                display="block"
                position="relative"
        />

        <ul className='website-card-descriptions-container'>
            <li>
                <a href={value.link} target='_blanck' rel="noreferrer">{value.link}</a>
            </li>
            {value.descriptions.map((description) => {
                return(
                    <li>
                        {description}
                    </li>
                )})}
        </ul>

    </div>
  )
}

export default PortofolioWebsiteCard