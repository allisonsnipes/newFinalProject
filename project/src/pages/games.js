import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Container from '../components/container'
import Col from '../components/col'
import Row from '../components/row'

function UserHome () {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: 50 }}>
        <Row>
          <Col size='md-12'>
            <h1 style={{ textAlign: 'center' }}>Games in Berkeley:</h1>
          </Col>
        </Row>

        <Row>
          <Col size='md-6'>
            <img
              src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Catan-2015-boxart.jpg/250px-Catan-2015-boxart.jpg'
              alt='Catan'
              style={{ height: '300px', margin: 'auto', padding: '1em', borderRadius: '200px' }}
            />
          </Col>

          <Col size='md-6'>
            <p style={{ marginTop: 30 }}>Game Type: Catan</p>
            <p> Location: 344 Anza Street</p>
            <p>Time: 10pm</p>
            <p>Amount of People: 3</p>
          </Col>
        </Row>

        <Row>
          <Col size='md-12'>
            <h1 style={{ textAlign: 'center' }}>Games in San Francisco:</h1>
          </Col>
        </Row>

        <Row>
          <Col size='md-6'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnNvJiRs2vPjPEwkkz1IqqwHOHivkq-av8UKRkDHQbhvjtmC_RA'
              alt='Monopoly'
              style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }}
            />
          </Col>

          <Col size='md-6'>
            <p style={{ marginTop: 35 }}>Game Type: Monopoly</p>
            <p> Location: 5227 Locksley Ave</p>
            <p>Time: 1pm</p>
            <p>Amount of People: 6</p>
          </Col>
        </Row>

        <Row>
          <Col size='md-12'>
            <h1 style={{ textAlign: 'center' }}>Games in Oakland:</h1>
          </Col>
        </Row>

        <Row>
          <Col size='md-6'>
            <img
              src='https://i.ebayimg.com/images/g/A88AAOSwIk9ag6rH/s-l300.jpg'
              alt='Photosynthesis'
              style={{ height: '300px', margin: 'auto', padding: '1em', borderRadius: '200px' }}
            />
          </Col>

          <Col size='md-6'>
            <p style={{ marginTop: 35 }}>Game Type: Photosynthesis</p>
            <p> Location: 3626 Redding Street </p>
            <p>Time: 6pm</p>
            <p>Amount of People: 2</p>
          </Col>
        </Row>

        <Row>
          <Col size='md-12'>
            <h1 style={{ textAlign: 'center' }}>Games in San Jose:</h1>
          </Col>
        </Row>

        <Row>
          <Col size='md-6'>
            <img
              src='https://images-na.ssl-images-amazon.com/images/I/61hBn4AliJL._SX425_.jpg'
              alt='D and D'
              style={{ height: '300px', margin: 'auto', padding: '1em', borderRadius: '200px' }}
            />
          </Col>

          <Col size='md-6'>
            <p style={{ marginTop: 35 }}>Game Type: Dungeon and Dragrons</p>
            <p> Location: 432 University Ave</p>
            <p>Time: 2pm</p>
            <p>Amount of People: 9</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default UserHome
