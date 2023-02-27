
import { Col, Card } from 'react-bootstrap';
import { formatCurrency } from './../../utilities/formatCurrency';

type productCardProps = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
}
const ProductCard = ({ id, title, price, category, description, image }: productCardProps) => {
    return (
        <Col lg={12}>
            <Card className='mt-4 p-2 home-cards'>

                <Card.Img variant='top' src={image} height={'180px'} style={{ objectFit: 'contain' }} />

                {/* <Card.Header>{title}</Card.Header> */}

                <Card.Body className='d-flex flex-column align-items-start justify-content-between h-100'>
                    <h5 className='price'>{formatCurrency(price)}</h5>
                    <div className='text-nowrap overflow-hidden text-truncate me-3 w-100' title={title}>{title}</div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard