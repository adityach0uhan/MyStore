import NavBar from './components/NavBar';
import Cards from './components/Cards';
import { useState } from 'react';
import './App.css';

function App() {
  const [productData, setProductData] = useState([]);
  async function getData() {
    await fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => { setProductData(data); })
      .catch(error => console.error(error));
  }

  return (
    <>
      {console.log(productData)}
      <NavBar />
      <Cards productData={productData} />
    </>
  );
}

export default App;
