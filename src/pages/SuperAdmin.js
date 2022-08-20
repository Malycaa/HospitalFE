import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import NavbarSuperAdmin from '../components/NavbarSuperAdmin';
import landingpage1 from '../landingpage1.png'
import landingpage2 from '../landingpage2.png'
import landingpage3 from '../landingpage3.png'

function SuperAdmin() {
  return (
    <>
      <NavbarSuperAdmin />
      <Container style={{ height: '80vh' }}>
        <Carousel variant='dark' className="h-100 d-flex align-items-center justify-content-center w-250">
          <Carousel.Item>
            <img
              className='img-fluid rounded'
              src={landingpage1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='img-fluid rounded'
              src={landingpage2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='img-fluid rounded'
              src={landingpage3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>


    </>
  );
}

export default SuperAdmin;