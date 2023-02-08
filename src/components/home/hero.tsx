import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


export function Hero() {
    return (
        <Container>
            <Row className="mt-5 pt-5">
                <Col lg={4}>
                    <div className="slide-item small mb-2">

                        <img src="./img/slide/1.jpg" />
                    </div>
                    <div className="slide-item small mb-2">
                        <img src="./img/slide/2.jpg" />
                    </div>
                </Col>
                <Col lg={8}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination]}
                    >
                        <SwiperSlide>

                            <div className="slide-item big">
                                <div className="text">
                                    <h1>NEW 2023 COLLECTION</h1>
                                    <h6>Lore, ipsum is a simple paragraph that designers ...</h6>
                                </div>
                                <img src="./img/slide/1.jpg" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide-item big">
                                <div className="text">
                                    <h1>NEW 20223 COLLECTION</h1>
                                    <h6>Lore, ipsum is a simple paragraph that designers ...</h6>
                                </div>
                                <img src="./img/slide/2.jpg" />
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </Col>
            </Row>
        </Container>
    )
}