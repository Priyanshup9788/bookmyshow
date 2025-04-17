import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const MovieDetail = () => {
  return (
    <section className='movie_banner_section'>
      <Container>

        <div className="movie_img d-flex flex-wrap  ">
          <img className='rounded-3 ' src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jaat-et00416952-1733732596.jpg" alt="" />
          {/* <p className='position-absolute bottom-0 left-0 text-center w-100'>In cinemas</p> */}
          <div className="movie_detail d-flex flex-wrap justify-content-center flex-column">
            <h2>jaat</h2>
            <div className='rating_section d-flex flex-wrap justify-content-between bg-secondary p-3 rounded-3 align-iteams-center'>
              <div>
                <FaStar className='rating_star' />
                <span>(9/10)</span>
                <span>(23K Votes)</span>
                <FaAngleRight />
              </div>
              <div>
              <button type="button" class="btn btn-light">Rate Now</button>
              </div>
            </div>
          </div>
        </div>


      </Container>
    </section>
  )
}

export default MovieDetail