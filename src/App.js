import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [productData, setProductData] = useState([]);
  const [filteredData, setFilteredData] = useState(productData);

  function getData() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.products);
        setFilteredData(data.products);
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const FilterItem = (category) => {
    if (category === "All") {
      setFilteredData(productData);
    } else {
      const filteredData = productData.filter(
        (item) => item.category === category
      );
      setFilteredData(filteredData);
    }
  };
  return (
    <>
      <NavBar FilterItem={FilterItem} />
      <Cards productData={filteredData} />
    </>
  );
}

export default App;
