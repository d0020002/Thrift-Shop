import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const AboutUsScreen = () => {
  return (
    <>
        <div className='aboutbody'>
      <Row>
        {/* <Col md={3}></Col>
        <Col md={6} className='aboutpage'>
          <h1>Who are We?</h1>
          <p>
            Actually We are not any professionals. This website has been created
            for the purpose of aiding students for buying and selling the notes
            and other items that they no longer need which might be useful for
            other new students. We take no charge for this. What we do is just
            aid in establishing the communication between buyer and seller.These
            can include: notes, drawing instruments, utensils & furnitures
            specially by students who are on the verge of leaving campus sooner
            or later.
          </p>
        </Col> */}
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={3}></Col>
        <Col md={6} className='aboutpage1'>
          <h1>Developers</h1>
          <p>
            {' '}
            <a href='https://google.com' target='_blank'>
              Saurabh
            </a>{' '}
          </p>
          <p>
            {' '}
            <a href='https://google.com' target='_blank'>
              Deepak Singh Kushwaha
            </a>{' '}
          </p>
          <p>
            {' '}
            <a href='https://google.com' target='_blank'>
              Rahul Kumar Patel
            </a>{' '}
          </p>
          <p>
            {' '}
            <a href='https://google.com' target='_blank'>
              Ritik Patel
            </a>{' '}
          </p>
          <h3>Who are we?</h3>
          <p>
            We all are MCA final year students at MNNIT.
          </p>
          {/* <h3>Contact Details</h3>
          <i className='fas fa-phone'></i> 9864421289
          <br />
          <i className='fas fa-envelope-square'></i>{' '}
          <a target='_blank' href={`mailto:dhamalaupendra@gmail.com`}>
            dhamalaupendra@gmail.com
          </a> */}
          <br />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
    </>
  )
}

export default AboutUsScreen
