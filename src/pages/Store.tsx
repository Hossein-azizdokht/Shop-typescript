import { useEffect,useState } from 'react';
import { Row } from 'react-bootstrap';
import { StoreItem } from '../components/store/storItem';

const Store = () => {

  
  const [data, setData] = useState([])//store data state
  
  async function getData() {//get store data from server
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  
  useEffect(() => {
    getData();
  }, [])

  return (
    <Row>
      {data?.map((item: any,index) => (
        <StoreItem key={index} {...item} />
      ))}
    </Row>
  )
}

export default Store