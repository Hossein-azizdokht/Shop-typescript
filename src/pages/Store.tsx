import { useEffect,useState } from 'react';
import { Row } from 'react-bootstrap';
import { StoreItem } from '../components/store/storItem';

const Store = () => {

  const [data, setData] = useState([])
  async function getData() {
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
        // <div key={index}>{item.category}</div>
        <StoreItem key={index} {...item} />
      ))}
    </Row>
  )
}

export default Store