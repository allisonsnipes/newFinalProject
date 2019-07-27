import React from 'react'
import Slider from 'react-slick'
import API from '../../utils/API'
import axios from "axios";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'

class Carousel extends React.Component {
  state = {
    isLoading: true,
    username: '',
    description: ''
  }

  isLoading = (response) => {
    this.setState({
      username: response.data.games[0].name,
      description: response.data.games[0].description.replace(/(<([^>]+)>)/ig, ''),
      // image: JSON.parse(response.data.picture.thumbnail),
      isLoading: false,
    })
  }

  catan = () => {
    API.catan()
    .then(response => {
      console.log(response)
      this.isLoading(response)
    })
    // We can still use the `.catch()` method since axios is promise-based
    .catch(error => this.setState({ error, isLoading: false }))
  }

  monopoly = () => {
    API.monopoly()
    .then(response => {
      console.log(response)
      this.isLoading(response)
    })
    // We can still use the `.catch()` method since axios is promise-based
    .catch(error => this.setState({ error, isLoading: false }))
  }

  munchkin = () => {
    API.munchkin()
    .then(response => {
      console.log(response)
      this.isLoading(response)
    })
    // We can still use the `.catch()` method since axios is promise-based
    .catch(error => this.setState({ error, isLoading: false }))
  }

  risk = () => {
    API.risk()
    .then(response => {
      console.log(response)
      this.isLoading(response)
    })
    // We can still use the `.catch()` method since axios is promise-based
    .catch(error => this.setState({ error, isLoading: false }))
  }
  
  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    const { isLoading } = this.state;

    return (
      <div id='main'>
        <h2 />
        <Slider {...settings}>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Catan-2015-boxart.jpg/250px-Catan-2015-boxart.jpg' alt='catan'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.catan}
            />
            {
              !isLoading ? 
              <div>
              <h2> {this.state.username} </h2>
              <h2> {this.state.description} </h2>
              </div>
              : <h3></h3>
            }
          </div>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnNvJiRs2vPjPEwkkz1IqqwHOHivkq-av8UKRkDHQbhvjtmC_RA' alt='Monopoly'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.monopoly}
            />
            {
              !isLoading ? 
              <div>
              <h2> {this.state.username} </h2>
              <h2> {this.state.description} </h2>
              </div>
              : <h3></h3>
            }
          </div>
          <div>
            <img src='https://pbs.twimg.com/media/D9iZq-yWkAA0tT0.jpg' alt='Photosynthesis'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.munchkin}
            />
            {
              !isLoading ? 
              <div>
              <h2> {this.state.username} </h2>
              <h2> {this.state.description} </h2>
              </div>
              : <h3></h3>
            }
          </div>
          <div>
            <img src='https://i.ebayimg.com/images/g/A88AAOSwIk9ag6rH/s-l300.jpg' alt='D and D'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.risk}
            />
            {
              !isLoading ? 
              <div>
              <h2> {this.state.username} </h2>
              <h2> {this.state.description} </h2>
              </div>
              : <h3></h3>
            }
          </div>
        </Slider>
      </div>

    )
  }
}

export default Carousel
