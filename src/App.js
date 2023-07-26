import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    const api = await axios.get("https://dummyjson.com/products");
    setProductData(api.data);
  };

  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  // async function getData() {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProductData(data);
  //     })
  //     .catch((error) => console.error(error));
  // }

  // console.log(productData);
  return (
    <>
      {/* {console.log(productData)} */}
      <NavBar />
      <Cards productData={productData} />
    </>
  );
}

export default App;
