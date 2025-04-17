import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';

const MovieDetail = () => {
  return (
    <>
      <section className='movie_banner_section py-4 bg-dark text-white'>
        <Container>

          <div className="movie_img d-flex flex-wrap  ">
            <img className='rounded-3 ' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jaat-et00416952-1733732596.jpg" alt="" />
            {/* <p className='position-absolute bottom-0 left-0 text-center w-100'>In cinemas</p> */}
            <div className="movie_detail d-flex flex-wrap justify-content-center flex-column gap-4 ps-3">
              <h2>jaat</h2>
              <div className='rating_section d-flex flex-wrap justify-content-between bg-secondary p-3 rounded-3 align-items-center'>
                <div className='me-5'>
                  <FaStar className='rating_star' />
                  <span className='fs-6 fw-bold text-white'>(9/10)</span>
                  <span className='fs-6 fw-bold text-white'>(23K Votes)</span>
                  <FaAngleRight className='text-white' />
                </div>
                <div>
                  <button type="button" className="btn btn-light fs-5">Rate Now</button>
                </div>
              </div>
              <div>
                <span className='px-2 py-1 rounded-1 bg-primary me-2'>2D</span>
                <span className='px-2 py-1 rounded-1 bg-primary'>Hindi</span>
              </div>
              <div>
                <ul className='d-flex flex-wrap gap-4'>
                  <li>2h 33m</li>
                  <li>Action,Drama</li>
                  <li>UA16+</li>
                  <li>10 Apr, 2025</li>
                </ul>
              </div>
              <div>
                <Button variant="danger" className='fs-6 px-5 py-3 fw-bold'>Book Tickets</Button>
              </div>
            </div>
          </div>


        </Container>
      </section>

      <section className='about_movie_section '>
        <Container>
          <Row> 
            <Col className='col-8 border-bottom border-1 py-4'>
              <h3 className='text-black fs-4 fw-bold'>About the movie</h3>
              <p>Jaat is a massive action drama directed by Gopichand Malineni. The film stars Sunny Deol in the crucial role alongside Randeep Hooda, Vineet Kumar, Regina Cassandra, and Saiyami Kher.</p>

            </Col>
          </Row>
        </Container>
      </section>

      <section className='movie_cast_section '>
        <Container>
          <Row> 
            <Col className='col-8 border-bottom border-1 py-4'>
              <h3 className='text-black fs-4 fw-bold mb-4'>Cast</h3>
              <Row>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='movie_crew_section '>
        <Container>
          <Row> 
            <Col className='col-8 border-bottom border-1 py-4'>
              <h3 className='text-black fs-4 fw-bold mb-4'>Crew</h3>
              <Row>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
                <Col className='col-2 '>
                  <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/sunny-deol-2299-12-09-2017-03-59-10.jpg" className='rounded-circle cast_img' alt="" />
                  <p className='fs-6 text-center my-1 fw-bold'>Sunny Deol</p>
                  <p className='text-center'>Actor</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default MovieDetail