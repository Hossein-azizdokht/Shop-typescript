import { Card, Col } from 'react-bootstrap'

type StoreItemProps = {
    id: number,
    title: string,
    desc: string,
    price: number,
    image: string
}
export function StoreItem({ id, title, desc, price, image }: StoreItemProps) {
    return (
        <Col lg={3} md={4} sm={6}>
            <Card>
                <Card.Img variant='top' src={image} height={'180px'} style={{ objectFit: 'contain' }} />
            </Card>
        </Col>
    )

}