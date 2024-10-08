import React from 'react'
import Card from './Card'

import image1 from "../asset/image1.jpg"
import image2 from "../asset/image2.jpg"
import image3 from "../asset/image3.jpg"

const cards = [
    {
        id:1,
        title: "fazt web",
        image: image1,
        url:"https://faztweb.com"
    },
    {
        id:2,
        title: "fazt blog",
        image: image2,
        url:"https://blog.faztweb.com"
    },
    {
        id:3,
        title: "fazt youtube",
        image: image3,
        url:"https://youtube.com/fazttech"
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-4 key={card.id}'>
                            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text} />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Cards