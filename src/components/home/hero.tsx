
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion, Variants } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Pagination } from 'swiper';


export function Hero() {

    const cardVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0,
            scale: 0
        },
        onscreen: {
            opacity: 0.5,
            scale: 0.5,
            y: 50,
            transition: {
                duration: 0.5,
                delay: 0.5,
            }
        }
    };
    return (
        <Container>
            <Row className="mt-5">
                <Col lg={4}>
                    <div className="slide-item small mb-2">

                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/99c6ae890024843a6887bc5e1208ac628fc2258c_1675252848.jpg?x-oss-process=image/quality,q_95" />
                    </div>
                    <div className="slide-item small mb-2">
                        <img src="https://dkstatics-public.digikala.com/digikala-adservice-banners/61940b9759dd3fd7fc26f58c30e7fcc3975e83dd_1675589955.jpg?x-oss-process=image/quality,q_95" />
                    </div>
                </Col>
                <Col lg={8}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 60500,
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
                                    {/* <motion.div className="col-md-2" variants={cardVariants}> */}
                                    <h1>NEW 2023 COLLECTION</h1>
                                    {/* </motion.div> */}

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