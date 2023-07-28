import NavBar from './components/NavBar';
import Cards from './components/Cards';
import { useEffect, useState } from 'react';
import './App.css';

function App() {


  const [productData, setProductData] = useState([]);

  function getData() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProductData(data.products)
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    getData();
    return () => {
      
    }
  }, [])

  return (
    <>
      <NavBar />
      <Cards productData={productData} />
    </>
  );
}

export default App;
