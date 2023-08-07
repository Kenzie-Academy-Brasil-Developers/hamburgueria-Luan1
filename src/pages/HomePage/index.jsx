import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../Services/api";


export const HomePage = ({ addCart, cartList, setIsVisible}) => { 
  const [productList, setProductList] = useState([]);
  const [value, setValue] = useState("");


  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await api.get("products",{
          params: {
            value: value,
          }
        }
        );
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [value]);
  return (
    <>
      <Header cartList={cartList} setIsVisible={setIsVisible} value ={value} setValue={setValue} />
      <main>
        <ProductList productList={productList} addCart={addCart} />
       
      </main>
    </>
  );
};
