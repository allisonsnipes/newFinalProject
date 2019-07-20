import React from 'react'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron'
import Navbar from '../components/navbar'
// import Wrapper from '../components/wrapper';
// import createAccountModal from '../components/createAccountModal'
// import LoginModal from '../components/loginModal'
// import Form from '../components/form'
import Container from '../components/container'
import Col from '../components/col'
import Row from '../components/row'

function Home () {
  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: 50 }}>
        <Row>
          <Col size='md-12'>
            <Jumbotron />
          </Col>
        </Row>

        <Row>
          <Col size='md-12'>
            <div className='images'>
              <img
                src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Catan-2015-boxart.jpg/250px-Catan-2015-boxart.jpg'
                alt='Catan'
                style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }}
              />
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnNvJiRs2vPjPEwkkz1IqqwHOHivkq-av8UKRkDHQbhvjtmC_RA'
                alt='Monopoly'
                style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }}
              />
              <img
                src='https://pbs.twimg.com/media/D9iZq-yWkAA0tT0.jpg'
                alt='Photosynthesis'
                style={{ margin: 'auto', padding: '1em', borderRadius: '200px' }}
              />
              <img
                src='https://i.ebayimg.com/images/g/A88AAOSwIk9ag6rH/s-l300.jpg'
                alt='D and D'
                style={{ size: '300px', margin: 'auto', padding: '1em', borderRadius: '200px' }}
              />
            </div>
          </Col>
        </Row>

        <Footer />
      </Container>
    </div>
  )
}

export default Home
