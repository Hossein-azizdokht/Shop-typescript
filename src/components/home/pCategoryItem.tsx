
import React, { FC } from 'react'
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';

interface Props {
    data: {
        id: number,
        name: string,
        cover: string,
        url: string
    }
}
//---------------------------------------------

const CategoryItem = ({ data }: Props) => {


    const cardVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0,
            scale:0
        },
        onscreen: {
            opacity: 1,
            scale:1,
            y: 50,
            transition: {
                duration: 0.5,
                delay: 0.5,
            }
        }
    };

    return (

        <motion.div className="col-md-2" variants={cardVariants}>
            <Link to='/store'>
                <div className='category-item'>
                    <img src={`${data.cover}`} alt={data.name} style={{ backgroundClip: 'content-box' }} />
                </div>
            </Link>
        </motion.div>

    )
}

export default CategoryItem;