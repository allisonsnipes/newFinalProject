import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'

class Carousel extends React.Component {
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <div id='main'>
        <h2 />
        <Slider {...settings}>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Catan-2015-boxart.jpg/250px-Catan-2015-boxart.jpg' alt='catan'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }}
            />
          </div>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnNvJiRs2vPjPEwkkz1IqqwHOHivkq-av8UKRkDHQbhvjtmC_RA' alt='Monopoly'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }}
            />
          </div>
          <div>
            <img src='https://pbs.twimg.com/media/D9iZq-yWkAA0tT0.jpg' alt='Photosynthesis'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }}
            />
          </div>
          <div>
            <img src='https://i.ebayimg.com/images/g/A88AAOSwIk9ag6rH/s-l300.jpg' alt='D and D'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }}
            />
          </div>
        </Slider>
      </div>

    )
  }
}

export default Carousel
