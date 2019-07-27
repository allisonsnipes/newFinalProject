import React from 'react'
import Slider from 'react-slick'
import API from '../../utils/API'
import axios from 'axios'
import GameData from '../gameData/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'


class Munchkin extends React.Component {
  state = {
    username: '',
    description: '',
    munchkinData: true
  }

  componentDidMount() {
    API.munchkin()
    .then(response => {
      console.log(response)
      this.setState(() => ({
        username: response.data.games[0].name,
        description: response.data.games[0].description.replace(/(<([^>]+)>)/ig, ''),
      }));
    })
    .catch(error => this.setState({ error, munchkinData: false }))
  }

  munchkinShowing = (response) => {
    this.setState(state => ({
        munchkinData: !state.munchkinData,
    }));
  }

  render () {
    return (
          <div>
            <img src='https://pbs.twimg.com/media/D9iZq-yWkAA0tT0.jpg' alt='Photosynthesis'
            style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }} onClick={this.munchkinShowing}
            />
            <GameData show={!this.state.munchkinData} username={this.state.username} description={this.state.description} />
          </div>
    )
  }
}

export default Munchkin
