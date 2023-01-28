import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { StoreItem } from '../components/store/storItem';
import 'react-loading-skeleton/dist/skeleton.css'
import { Filter } from './../components/store/filter/filter';
import { Brands } from './../_mock/filters';
const Store = () => {

  // type dataType = {
  //   filterData:[]
  // }
  const [data, setData] = useState([])//store data state
  const [isLoading, setIsLoading] = useState(true)//store data state

  async function getData() {//get store data from server
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    setData(data);
    setIsLoading(false)

  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Row>
        <Col lg={3} md={4} sm={6}>
          <Card className='mt-4 p-4 position-sticky top-0'>
            <h5>Filters</h5>
            <hr />
            {!isLoading ? (
              <Filter data={Brands} />
            ) : (
              <>
                <div className='d-flex align-items-center'>
                  <Skeleton width={20} height={20} className="me-1" />
                  <Skeleton width={170} height={20} />
                </div>
                <div className='d-flex align-items-center'>
                  <Skeleton width={20} height={20} className="me-1" />
                  <Skeleton width={170} height={20} />
                </div>
                <div className='d-flex align-items-center'>
                  <Skeleton width={20} height={20} className="me-1" />
                  <Skeleton width={170} height={20} />
                </div>
                <hr />
                <div className='d-flex align-items-center'>
                  <Skeleton width={20} height={20} className="me-1" />
                  <Skeleton width={170} height={20} />
                </div>
                <div className='d-flex align-items-center'>
                  <Skeleton width={20} height={20} className="me-1" />
                  <Skeleton width={170} height={20} />
                </div>
                <div className='d-flex align-items-center'>
                  <Skeleton width={20} height={20} className="me-1" />
                  <Skeleton width={170} height={20} />
                </div>
              </>
            )}
          </Card>
        </Col>
        <Col lg={9} md={8} sm={6}>
          {!isLoading ? (
            <Row>
              {data?.map((item: any, index) => (
                <StoreItem key={index} {...item} />
              ))}

            </Row>
          ) : (
            <Row>
              <Col lg={4} md={4} sm={6}>
                <div className='mt-4 p-2 '>
                  <Skeleton height={180} />
                  <Skeleton width={90} />
                  <Skeleton width={170} />
                  <Skeleton height={40} width={60} />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className='mt-4 p-2 '>
                  <Skeleton height={180} />
                  <Skeleton width={90} />
                  <Skeleton width={170} />
                  <Skeleton height={40} width={60} />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className='mt-4 p-2 '>
                  <Skeleton height={180} />
                  <Skeleton width={90} />
                  <Skeleton width={170} />
                  <Skeleton height={40} width={60} />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className='mt-4 p-2 '>
                  <Skeleton height={180} />
                  <Skeleton width={90} />
                  <Skeleton width={170} />
                  <Skeleton height={40} width={60} />
                </div>
              </Col>

              <Col lg={4} md={4} sm={6}>
                <div className='mt-4 p-2 '>
                  <Skeleton height={180} />
                  <Skeleton width={90} />
                  <Skeleton width={170} />
                  <Skeleton height={40} width={60} />
                </div>
              </Col>
              <Col lg={4} md={4} sm={6}>
                <div className='mt-4 p-2 '>
                  <Skeleton height={180} />
                  <Skeleton width={90} />
                  <Skeleton width={170} />
                  <Skeleton height={40} width={60} />
                </div>
              </Col>
              
            </Row>
          )}

        </Col>
      </Row>
  
    </>
  )
}

export default Store