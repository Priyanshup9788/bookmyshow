import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Recomended = () => {
    return (
        <section className='recomended mt-3'>
            <Container>
                <div className="section-header d-flex flex-wrap justify-content-between">
                    <h3 className='fs-4 fw-bold'>Recommended Movies</h3>
                    <p className='text-danger'>See All </p>
                </div>
                <div className="recomended-part">
                    <Container>
                        <Row>
                            <Col>
                                <div className="imgbox w-100">
                                    <img  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMjEuNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00416952-ldjrtgmkrz-portrait.jpg" className='w-100 rounded-3 movies-img' alt="" />
                                </div>
                                <div className="movie-details mt-2 ">
                                    <h4 className='fs-5'>Jaat</h4>
                                    <p className='movie-type text-secondary fw-normal'>Action/Drama</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="imgbox w-100">
                                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NjAuN0sgTGlrZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00439158-ewvunkfjku-portrait.jpg" className='w-100 rounded-3 movies-img' alt="" />
                                </div>
                                <div className="movie-details mt-2 ">
                                    <h4 className='fs-5'>Kesari Chapter 2: The Untold Story of Jallianwala Bagh</h4>
                                    <p className='movie-type text-secondary fw-normal'>Drama/Historical</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="imgbox w-100">
                                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA1LjFLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00432831-zzbmbvvtsa-portrait.jpg" className='w-100 rounded-3 movies-img' alt="" />
                                </div>
                                <div className="movie-details mt-2 ">
                                    <h4 className='fs-5'>All The Best Pandya</h4>
                                    <p className='movie-type text-secondary fw-normal'>Comedy/Drama</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="imgbox w-100">
                                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni8xMCAgMzMuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00394804-ujrgqmlwjv-portrait.jpg" className='w-100 rounded-3 movies-img' alt="" />
                                </div>
                                <div className="movie-details mt-2 ">
                                    <h4 className='fs-5'>Sikandar</h4>
                                    <p className='movie-type text-secondary fw-normal'>Action/Drama</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="imgbox w-100">
                                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAxLjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00435453-ttugelqzwv-portrait.jpg" className='w-100 rounded-3 movies-img' alt="" />
                                </div>
                                <div className="movie-details mt-2 ">
                                    <h4 className='fs-5'>Jija Sala Jija</h4>
                                    <p className='movie-type text-secondary fw-normal'>Comedy/Drama</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </section>
    )
}

export default Recomended