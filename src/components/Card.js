import React from 'react'
import propTypes from 'prop-types'

import './cards.css'

function Card({ title, imageSource, text, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      
    <div className='overflow'>
    <img src={imageSource} alt="" className='card-img-top'/>
    </div>

      <div className="card-body text-light">
        <h4 className='card-title'>{title}</h4>
        <p className=' text-secondary'>
          {
            text ? text : "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. "
          }
        </p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target='_blank' >
          Go to this website
        </a>
      </div>
    </div>
  )
}
Card.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string,
  imageSource: propTypes.string,
  text: propTypes.string

}
export default Card