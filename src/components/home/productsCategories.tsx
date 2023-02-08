
import React, { FC } from 'react'
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Col, Row } from "react-bootstrap";

// interface productCatProps {
//     data: []
// }
const ProductCategories= () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
    // console.log(data);
    const cardVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            y: 50,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.5
            }
        }
    };
    return (
        <section>
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <Row>
                    <motion.div className="col-md-2" variants={cardVariants}>
                        asdasdasddadasd
                    </motion.div>
                    <motion.div className="col-md-2" variants={cardVariants}>
                        asdasdasddadasd
                    </motion.div>
                    <motion.div className="col-md-2" variants={cardVariants}>
                        asdasdasddadasd
                    </motion.div>
                    <motion.div className="col-md-2" variants={cardVariants}>
                        asdasdasddadasd
                    </motion.div>
                    <motion.div className="col-md-2" variants={cardVariants}>
                        asdasdasddadasd
                    </motion.div>
                    <motion.div className="col-md-2" variants={cardVariants}>
                        asdasdasddadasd
                    </motion.div>
                </Row>
            </motion.div>
        </section>
    )
}

export default ProductCategories;