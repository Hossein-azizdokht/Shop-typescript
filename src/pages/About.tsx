import { Col, Row } from "react-bootstrap"
import Breadcrumbs from "../components/breadcrumb"


const About = () => {
  return (
    <>
      <Row>
        <Col>
          <div className='breadcrumb'>
            <Breadcrumbs />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>About</div>
        </Col>
      </Row>
    </>
  )
}

export default About