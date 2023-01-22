import { Button, Card, Col } from 'react-bootstrap'
import { FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { formatCurrency } from '../../utilities/formatCurrency'

type StoreItemProps = {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string
}
export function StoreItem({ id, title, description, price, image }: StoreItemProps) {
    const quantity = 0;
    return (
        <Col lg={3} md={4} sm={6}>
            <Card className='mt-4 p-2'>
                <Card.Img variant='top' src={image} height={'180px'} style={{ objectFit: 'contain' }} />
                {/* <Card.Header>{title}</Card.Header> */}
                <Card.Body className='d-flex flex-column align-items-start justify-content-between h-100'>

                    <h5 className=''>{formatCurrency(price)}</h5>

                    <div className='text-nowrap overflow-hidden text-truncate me-3 w-100' title={title}>{title}</div>
                    {quantity === 0 ? (
                        <Button variant='light' size='sm' className='w-auto mt-auto' style={{ fontSize: '1.2rem' }}>
                            <FiShoppingBag /><FiPlus />
                        </Button>
                    ) : (
                        <div className='d-flex align-items-center' style={{gap:'0.5rem'}}>
                            <Button> <FiMinus /> </Button>
                            <div><span>{quantity}</span> in cart</div>
                            <Button> <FiPlus /> </Button>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Col>
    )

}