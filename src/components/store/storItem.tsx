import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { FiMinus, FiPlus, FiShoppingBag, FiTrash } from 'react-icons/fi';
import { useShoppingCart } from '../../context/shopingCartContext';
import { formatCurrency } from '../../utilities/formatCurrency'
import { useSpring, animated } from '@react-spring/web'
type StoreItemProps = {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
}
export function StoreItem({ id, title, description, price, image }: StoreItemProps) {
    const { getItemQuantity, increasCartQuantity, decreasCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);

    const animation = useSpring({
        from: { y: 15, opacity: 0 },
        to: { y: 0, opacity: 1 },
    })
    const animation1 = useSpring({
        from: { y: 25, opacity: 0 },
        to: { y: 0, opacity: 1 }
    })
    return (
        <Col lg={4} md={6} sm={12}>
            <Card className='mt-4 p-2'>
                <animated.div
                    style={animation}
                >
                    <Card.Img variant='top' src={image} height={'180px'} style={{ objectFit: 'contain' }} />
                </animated.div>
                {/* <Card.Header>{title}</Card.Header> */}
                <animated.div
                    style={animation1}>
                    <Card.Body className='d-flex flex-column align-items-start justify-content-between h-100'>

                        <h5 className=''>{formatCurrency(price)}</h5>
                        <div className='text-nowrap overflow-hidden text-truncate me-3 w-100' title={title}>{title}</div>


                        {quantity === 0 ? (
                            <Button variant='light' size='sm' onClick={() => increasCartQuantity(id)} className='w-auto mt-auto' style={{ fontSize: '1.2rem' }}>
                                <FiShoppingBag /><FiPlus />
                            </Button>
                        ) : (
                            <div className='d-flex align-items-center' style={{ gap: '0.5rem' }}>
                                <Button variant="light" onClick={() => decreasCartQuantity(id)}> <FiMinus /> </Button>
                                <div><span>{quantity}</span></div>
                                <Button variant="light" onClick={() => increasCartQuantity(id)}> <FiPlus /> </Button>
                                <Button variant='outline-danger' onClick={() => removeFromCart(id)}> <FiTrash /> </Button>
                            </div>
                        )}
                    </Card.Body>
                </animated.div>
            </Card>
        </Col>
    )

}